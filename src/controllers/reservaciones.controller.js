import prisma from '../lib/prisma-db.js';


export const crearReservacion = async (req, res) => {
    const { mesa_id, fecha, hora, num_comensales } = req.body;

    // ¡TOKEN! Extraemos el ID del usuario
    const usuario_id = req.usuario.id;

    try {
        // Transformamos "2026-10-15" y "19:00" a formato ISO
        const fechaFormateada = new Date(`${fecha}T00:00:00Z`);
        const horaFormateada = new Date(`1970-01-01T${hora}:00Z`);

        //Existencia y Capacidad
        const mesa = await prisma.mesas.findUnique({
            where: { id: parseInt(mesa_id) }
        });
        if (!mesa) {
            return res.status(404).json({ error: 'La mesa solicitada no existe' });
        }

        if (mesa.capacidad < parseInt(num_comensales)) {
            return res.status(400).json({
                error: `La mesa solo tiene capacidad para ${mesa.capacidad} personas`
            });
        }
        //Disponibilidad de Horario
        const reservacionExistente = await prisma.reservaciones.findFirst({
            where: {
                mesa_id: parseInt(mesa_id),
                fecha: fechaFormateada,
                hora: horaFormateada,
                estado: { not: 'cancelada' }
            }
        });

        if (reservacionExistente) {
            return res.status(400).json({
                error: 'Lo sentimos, la mesa ya está reservada en esa fecha y hora'
            });
        }
        //Todo está en orden, procedemos
        const nuevaReservacion = await prisma.reservaciones.create({
            data: {
                usuario_id: usuario_id,
                mesa_id: parseInt(mesa_id),
                fecha: fechaFormateada,
                hora: horaFormateada,
                num_comensales: parseInt(num_comensales),
                estado: 'pendiente' // Por defecto
            }
        });

        res.status(201).json({
            mensaje: 'Reservación creada exitosamente',
            reservacion: nuevaReservacion
        });
    } catch (error) {
        console.error('Error al crear reservación:', error);
        res.status(500).json({ error: 'Error al procesar la reservación' });
    }
};

//  OBTENER RESERVACIONES por rol
export const obtenerReservaciones = async (req, res) => {
    // Extraemos el id y el rol del token del usuario
    const { id, rol } = req.usuario;

    try {
        let reservaciones;

        if (rol === 'admin') {
            // Si es admin traemos TODAS las reservaciones
            // include: nos permite traer la info de la mesa y el usuario como un JOIN en SQL
            reservaciones = await prisma.reservaciones.findMany({
                include: {
                    mesas: true,
                    usuarios: { select: { nombre: true, email: true } } //  no trae el password por seguridad
                }
            });
        } else {
            // Si es cliente solo traemos SUS reservaciones
            reservaciones = await prisma.reservaciones.findMany({
                where: { usuario_id: id },
                include: { mesas: true }
            });
        }

        res.json(reservaciones);
    } catch (error) {
        console.error('Error al obtener reservaciones:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const obtenerMisReservaciones = async (req, res) => {

    const usuario_id = req.usuario.id;

    try {
        const misReservaciones = await prisma.reservaciones.findMany({
            where: { usuario_id: usuario_id },
            include: {
                mesas: true
            },
            orderBy: [
                { fecha: 'asc' },
                { hora: 'asc' }
            ]
        });

        res.json(misReservaciones);
    } catch (error) {
        console.error('Error al obtener mis reservaciones:', error);
        res.status(500).json({ error: 'Error al obtener las reservaciones' });
    }
};

// CAMBIAR ESTADO DE RESERVACIÓN 
export const actualizarEstadoReservacion = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body; // Puede ser: 'pendiente', 'confirmada', 'cancelada', 'completada'

    try {
        const reservacionActualizada = await prisma.reservaciones.update({
            where: { id: parseInt(id) },
            data: { estado }
        });

        res.json({
            mensaje: 'Estado de reservación actualizado correctamente',
            reservacion: reservacionActualizada
        });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Reservación no encontrada' });
        }
        console.error('Error al actualizar estado:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

//CANCELAR PROPIA RESERVACIÓN 
export const cancelarReservacion = async (req, res) => {
    const { id } = req.params;
    const usuario_id = req.usuario.id;

    try {
        // Buscamos la reservación para verificar a quién le pertenece
        const reservacion = await prisma.reservaciones.findUnique({
            where: { id: parseInt(id) }
        });

        if (!reservacion) {
            return res.status(404).json({ error: 'Reservación no encontrada' });
        }

        // Verificamos que el usuario que hace la petición sea el dueño
        if (reservacion.usuario_id !== usuario_id) {
            return res.status(403).json({ error: 'Acceso denegado: No puedes cancelar una reservación que no es tuya' });
        }

        // Hacemos la cancelación (Soft delete cambiando el estado)
        const reservacionCancelada = await prisma.reservaciones.update({
            where: { id: parseInt(id) },
            data: { estado: 'cancelada' }
        });

        res.json({
            mensaje: 'Reservación cancelada exitosamente',
            reservacion: reservacionCancelada
        });
    } catch (error) {
        console.error('Error al cancelar reservación:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};