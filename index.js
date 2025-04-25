import app from "./app.js";

const port = 3000;

app.listen(port, () => { // Inicio el servidor WEB (escuchar)
console.log(` Listening on http://localhost:${port}`)
})

