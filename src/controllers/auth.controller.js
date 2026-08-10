import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../lib/prisma-db.js';

export const registrarUsuario = async (req, res) => {
    // Extraemos los datos 
    const { nombre, email, password } = req.body;

    try {
        // Verificamos el email en la bd
        const usuarioExistente = await prisma.usuarios.findUnique({
            where: { email }
        });

        if (usuarioExistente) {
            return res.status(400).json({ error: 'El email ya está registrado' });
        }

        // Hasheamos (ocultamos) la contraseña
        const password_hash = await bcrypt.hash(password, 10);

        // Guardamos el nuevo usuario 
        const nuevoUsuario = await prisma.usuarios.create({
            data: {
                nombre,
                email,
                password_hash, // Guardamos el hash
                rol: 'cliente' // Por defecto se registran como clientes
            }
        });

        // Respondemos con éxito, pero sin enviar el hash de la contraseña por seguridad
        res.status(201).json({
            mensaje: 'Usuario registrado exitosamente',
            usuario: {
                id: nuevoUsuario.id,
                nombre: nuevoUsuario.nombre,
                email: nuevoUsuario.email,
                rol: nuevoUsuario.rol
            }
        });

    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
export const loginUsuario = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscamos al usuario por su email
        const usuario = await prisma.usuarios.findUnique({
            where: { email }
        });

        // si no existe devolvemos un error 
        if (!usuario) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Comparamos la contraseña en texto plano con el hash guardado 
        const passwordValido = await bcrypt.compare(password, usuario.password_hash);

        if (!passwordValido) {
            return res.status(401).json({ error: 'Credenciales inválidas' });
        }

        // Si todo es correcto creamos el "Payload"
        const payload = {
            id: usuario.id,
            rol: usuario.rol
        };

        // Generamos el Token firmándolo con nuestra llave secreta
        // Le damos un tiempo de expiración (ej. 2 horas) por seguridad
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '2h'
        });

        // 5. Devolvemos el token al cliente
        res.json({
            mensaje: 'Login exitoso',
            token: token
        });

    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};