import app from "./app";

const PORT = app.get("PORT");

const server = app.listen(PORT, () =>
    console.log(`Serve on http://localhost:${PORT}`)
);
server.on("error", (error: any) => console.log(error));
