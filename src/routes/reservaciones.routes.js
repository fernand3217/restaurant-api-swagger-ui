import { Router } from 'express';
import { crearReservacion, obtenerReservaciones, obtenerMisReservaciones } from '../controllers/reservaciones.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Todas reservaciones requieren autenticado
router.use(verificarToken);
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
router.get('/', obtenerReservaciones);
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
router.post('/', crearReservacion);

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


export default router;