import { Router } from 'express';
import { crearReservacion, obtenerReservaciones, obtenerMisReservaciones, actualizarEstadoReservacion, cancelarReservacion } from '../controllers/reservaciones.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';
import { verificarRol } from '../middlewares/rol.middleware.js';

const router = Router();

// Todas reservaciones requieren autenticado
router.use(verificarToken);

/**
 * @swagger
 * /api/reservaciones:
 *   post:
 *     summary: Crea una nueva reservación
 *     tags: [Reservaciones]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               mesa_id:
 *                 type: integer
 *                 example: 1
 *               fecha:
 *                 type: string
 *                 example: "2026-12-01"
 *               hora:
 *                 type: string
 *                 example: "19:30"
 *               num_comensales:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Reservación creada exitosamente
 *       400:
 *         description: Error de disponibilidad o capacidad
 *       404:
 *         description: La mesa solicitada no existe
 */
// POST /api/reservaciones -> Crear una reservación clientes y admin
router.post('/', verificarRol('cliente'), crearReservacion);

/**
 * @swagger
 * /api/reservaciones/mis:
 *   get:
 *     summary: Obtiene las reservaciones del usuario autenticado (Cliente)
 *     tags: [Reservaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de las reservaciones del cliente
 */
// 2. Conectamos la ruta. Usamos verificarRol si quieres restringirlo solo a clientes, 
// o lo dejamos abierto para que un admin también pueda ver sus propias reservas.
router.get('/mis', obtenerMisReservaciones);

/**
 * @swagger
 * /api/reservaciones:
 *   get:
 *     summary: Obtiene las reservaciones
 *     description: Si es cliente, obtiene sus reservaciones. Si es admin, obtiene todas.
 *     tags: [Reservaciones]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de reservaciones devuelta con éxito
 */
// GET /api/reservaciones -> comportamiento por rol
router.get('/', verificarRol('admin'), obtenerReservaciones);

/**
 * @swagger
 * /api/reservaciones/{id}/estado:
 *   put:
 *     summary: Cambia el estado de una reservación (Solo Admin)
 *     tags: [Reservaciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reservación
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               estado:
 *                 type: string
 *                 enum: [pendiente, confirmada, cancelada, completada]
 *                 example: "confirmada"
 *     responses:
 *       200:
 *         description: Estado actualizado correctamente
 *       404:
 *         description: Reservación no encontrada
 */
router.put('/:id/estado', verificarRol('admin'), actualizarEstadoReservacion);

/**
 * @swagger
 * /api/reservaciones/{id}:
 *   delete:
 *     summary: Cancela una reservación propia (Cliente)
 *     tags: [Reservaciones]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la reservación a cancelar
 *     responses:
 *       200:
 *         description: Reservación cancelada exitosamente
 *       403:
 *         description: Acceso denegado (No es tu reservación)
 *       404:
 *         description: Reservación no encontrada
 */
router.delete('/:id', cancelarReservacion);


export default router;