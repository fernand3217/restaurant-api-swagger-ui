import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/index.js';

describe('Pruebas de la API REST', () => {

    // Prueba 1: Ruta pública
    it('Debería responder con un saludo en la ruta raíz (GET /)', async () => {
        const response = await request(app).get('/');

        // Aserciones
        expect(response.status).toBe(200);
        expect(response.text).toContain('API del Restaurante en funcionamiento');
    });

    // Prueba 2: Seguridad del Middleware
    it('Debería denegar el acceso a /api/mesas si el usuario no envía token', async () => {
        const response = await request(app).get('/api/mesas');

        // Aserciones
        expect(response.status).toBe(403);
        expect(response.body.error).toBe('Acceso denegado: No se proporcionó un token');
    });

});