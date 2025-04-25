import express from "express";
import getHour from "./time.js";
import date from "./date.js";

const app = express();

app.get("/", (req, res) => {
    res.send("¡Bienvenido a mi servidor de fecha y hora!");
    });


app.get("/hora", (req, res) => {
  res.send(getHour()); // lo uso del time.js
});

app.get("/fecha-completa", (req, res) => {
  res.send(date());
});

// extra
app.use((req, res) => {
    res.status(404).send(`
      <html>
        <head>
          <title>Error 404</title>
        </head>
        <body style="text-align: center; font-family: sans-serif;">
          <h1>Error 404: Ruta no encontrada</h1>
          <img src="https://http.cat/404" alt="error 404" style="max-width: 100%; height: auto;" />
        </body>
      </html>
    `);
  });

  export default app