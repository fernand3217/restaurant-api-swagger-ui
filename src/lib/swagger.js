import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API del Restaurante',
            version: '1.0.0',
            description: 'Documentación de la API REST para la gestión del restaurante',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Servidor Local',
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    // Le decimos a Swagger dónde buscar los comentarios de documentación
    apis: ['./src/routes/*.js'],
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);