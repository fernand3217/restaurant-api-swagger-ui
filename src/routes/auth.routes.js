import { Router } from 'express';
import { registrarUsuario, loginUsuario } from '../controllers/auth.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';
import { verificarRol } from '../middlewares/rol.middleware.js';

const router = Router();


/**
 * @swagger
 * /api/auth/registro:
 *   post:
 *     summary: Registra un nuevo usuario cliente
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: "Carlos Tutor"
 *               email:
 *                 type: string
 *                 example: "carlos@restaurante.com"
 *               password:
 *                 type: string
 *                 example: "MiPasswordSeguro123"
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: El email ya está registrado
 */
router.post('/registro', registrarUsuario);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Inicia sesión y devuelve un token JWT
 *     tags: [Autenticación]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "carlos@restaurante.com"
 *               password:
 *                 type: string
 *                 example: "MiPasswordSeguro123"
 *     responses:
 *       200:
 *         description: Login exitoso, devuelve el token
 *       401:
 *         description: Credenciales inválidas
 */
router.post('/login', loginUsuario);


/**
 * @swagger
 * /api/auth/perfil:
 *   get:
 *     summary: Obtiene los datos del token del usuario actual
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Perfil obtenido exitosamente
 *       403:
 *         description: No se proporcionó un token
 */
// Creamos una ruta para obtener datos del usuario
router.get('/perfil', verificarToken, verificarRol('cliente'), (req, res) => {
    // el middleware inyectó req.usuario, podemos usarlo aquí
    res.json({
        mensaje: '¡Bienvenido a tu perfil protegido!',
        datos_del_token: req.usuario
    });
});
/**
 * @swagger
 * /api/auth/admin-solo:
 *   get:
 *     summary: Ruta de prueba exclusiva para administradores
 *     tags: [Autenticación]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acceso concedido al panel de administración
 *       403:
 *         description: No tienes los permisos necesarios
 */
router.get('/admin-solo', verificarToken, verificarRol('admin'), (req, res) => {
    res.json({
        mensaje: '¡Bienvenido Jefe! Tienes acceso al panel de administración.',
    });
});

export default router;