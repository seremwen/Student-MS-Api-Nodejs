const express = require('express');
const sequelize = require('./models/database'); // Your Sequelize setup
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

// const authRouter= require('./routes/authentication'); // Authentication routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'School MS API',
            version: '1.0.0',
            description: 'API endpoints for school mamagement system',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
       
     
    },
    apis: ['./routes/*.js'], // Files containing Swagger annotations (adjust as per your file structure)
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Synchronize the database
sequelize.sync().then(() => {
    console.log('Database synchronized');
   
});

// Routes
// app.use('/auth', authRouter);

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
