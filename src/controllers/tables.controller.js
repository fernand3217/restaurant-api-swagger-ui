import prisma from '../lib/prisma-db.js';


//GET
export const getTables = async (req, res) => {
    try {
        const tables = await prisma.mesas.findMany({
            where: { activa: true },
            orderBy: { numero: 'asc' }
        });
        res.json({
            mensaje: 'Lista de mesas obtenida correctamente',
            data: tables
        });
    } catch (error) {
        console.error('Error al obtener mesas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
export const getTable = async (req, res) => {
    const { id } = req.params;
    try {
        const table = await prisma.mesas.findUnique({
            where: { id: parseInt(id) }
        });
        res.json({
            mensaje: 'Mesa obtenida correctamente',
            data: table
        });
    } catch (error) {
        console.error('Error al obtener mesas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
//POST
export const createTable = async (req, res) => {
    const { numero, capacidad, ubicacion } = req.body;

    try {
        const newTable = await prisma.mesas.create({
            data: {
                numero: parseInt(numero),
                capacidad: parseInt(capacidad),
                ubicacion
            }
        });
        res.status(201).json({ mensaje: 'Mesa creada exitosamente', mesa: newTable });
    } catch (error) {
        // por si hay registro único duplicado"
        if (error.code === 'P2002') {
            return res.status(400).json({ error: 'Ya existe una mesa con ese número' });
        }
        console.error(error);
        res.status(500).json({ error: 'Error al crear la mesa' });
    }
};
//UPDATE
export const updateTable = async (req, res) => {
    const { id } = req.params;
    const { capacidad, ubicacion } = req.body;

    try {
        const tableUpdating = await prisma.mesas.update({
            where: { id: parseInt(id) },
            data: {
                capacidad: capacidad ? parseInt(capacidad) : undefined,
                ubicacion: ubicacion || undefined
            }
        });
        res.json({ mensaje: 'Mesa actualizada', mesa: tableUpdating });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Mesa no encontrada' });
        }
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la mesa' });
    }
};
//DELETE
export const deleteTable = async (req, res) => {
    const { id } = req.params;

    try {
        await prisma.mesas.update({
            where: { id: parseInt(id) },
            data: { activa: false } // Soft delete
        });
        res.json({ mensaje: 'Mesa eliminada correctamente' });
    } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: 'Mesa no encontrada' });
        }
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la mesa' });
    }
};