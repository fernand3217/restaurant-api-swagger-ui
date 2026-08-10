import 'dotenv/config';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './lib/swagger.js';
import authRoutes from './routes/auth.routes.js';
import tablesRoutes from './routes/tables.routes.js';
import reservacionesRoutes from './routes/reservaciones.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// las peticiones en formato JSON
app.use(express.json());

//Conectamos Swagger a la URL /api/docs
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Conectamos las rutas
app.use('/api/mesas', tablesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/reservaciones', reservacionesRoutes);

// Dejamos una ruta básica de bienvenida
app.get('/', (req, res) => {
    res.send('API del Restaurante en funcionamiento 🚀');
});

if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
        console.log(`🚀🚀Servidor corriendo en http://localhost:${PORT}`);
        console.log(`📚 Documentación en http://localhost:${PORT}/api/docs`);
    });
}

export default app;