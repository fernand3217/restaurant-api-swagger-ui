import { Router } from 'express';
import { getTables, getTable, createTable, updateTable, deleteTable } from '../controllers/tables.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';
import { verificarRol } from '../middlewares/rol.middleware.js';

// Inicializamos el enrutador de Express
const router = Router();

//todas las rutas checaran el token
router.use(verificarToken);
// ejecuta los controladores en las rutas puestas
/**
 * @swagger
 * /api/mesas:
 *   get:
 *     summary: Obtiene la lista de mesas activas
 *     tags: [Mesas]
 *     responses:
 *       200:
 *         description: Lista de mesas obtenida exitosamente
 *       403:
 *         description: Acceso denegado (Falta Token)
 */
router.get('/', getTables);

/**
 * @swagger
 * /api/mesas/{id}:
 *   get:
 *     summary: Obtiene la una mesa por id
 *     tags: [Mesas]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Mesa por ID
 */
router.get('/:id', getTable);
/**
 * @swagger
 * /api/mesas:
 *   post:
 *     summary: Crea una nueva mesa 
 *     tags: [Mesas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numero:
 *                 type: integer
 *                 example: 10
 *               capacidad:
 *                 type: integer
 *                 example: 4
 *               ubicacion:
 *                 type: string
 *                 example: "Ventanal"
 *     responses:
 *       201:
 *         description: Mesa creada exitosamente
 *       403:
 *         description: Acceso denegado (Rol incorrecto)
 */
// POST /api/mesas
router.post('/', createTable);

/**
 * @swagger
 * /api/mesas/{id}:
 *   put:
 *     summary: Actualiza los datos de una mesa (Solo Admin)
 *     tags: [Mesas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la mesa a modificar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               capacidad:
 *                 type: integer
 *               ubicacion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Mesa actualizada
 *       404:
 *         description: Mesa no encontrada
 */
// PUT /api/mesas/:id -> Solo Admin
router.put('/:id', verificarRol('admin'), updateTable
);
/**
 * @swagger
 * /api/mesas/{id}:
 *   delete:
 *     summary: Desactiva una mesa (Soft Delete - Solo Admin)
 *     tags: [Mesas]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de la mesa a eliminar
 *     responses:
 *       200:
 *         description: Mesa eliminada correctamente
 *       404:
 *         description: Mesa no encontrada
 */
// DELETE /api/mesas/:id -> Solo Admin
router.delete('/:id', verificarRol('admin'), deleteTable);

export default router;