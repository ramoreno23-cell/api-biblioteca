require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

const app = express();

app.use(express.json());

// Rutas
app.use("/", require("./routes/authRoutes"));
app.use("/usuarios", require("./routes/usuarioRoutes"));
app.use("/autores", require("./routes/autorRoutes"));
app.use("/libros", require("./routes/libroRoutes"));

// Conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log("Base de datos conectada");
    })
    .catch(err => {
        console.error(err);
    });

// Iniciar servidor
app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor iniciado en el puerto ${process.env.PORT || 3000}`);
});