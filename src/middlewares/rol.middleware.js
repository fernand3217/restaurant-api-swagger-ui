export const verificarRol = (rolPermitido) => {
    return (req, res, next) => {
        // Verificamos que el middleware verificarToken haya inyectado al usuario
        if (!req.usuario) {
            return res.status(500).json({ error: 'Error de servidor: No se validó el token primero' });
        }

        // Comparamos el rol del usuario con el rol que exige esta ruta
        if (req.usuario.rol !== rolPermitido) {
            return res.status(403).json({ error: 'Acceso denegado: No tienes los permisos necesarios' });
        }

        // Si tiene el rol correcto, pasa a la función final
        next();
    };
};