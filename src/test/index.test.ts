import app from "../app";
import request from "supertest";

describe("Prueba de Hola", ()=>{
    it("retorna el valor enviado en el body", async () => {
        const res =await request(app)
        .post("/api/test")
        .send({nombre:"valor"});

        expect(res.statusCode).toEqual(200);
    });
})

describe("Lista de estaciones", ()=>{
    it("Retorna lista de estaciones creadas", async () => {
        const res = await request(app).get("/api/estacion/lista");
        expect(res.statusCode).toEqual(200);
    });
})

describe("Lista de sensores", ()=>{
    it("Retorna lista de sensores", async () => {
        const res = await request(app).get("/api/sensor/lista");
        expect(res.statusCode).toEqual(200);
        expect(res.body.data).toBe([]);
        
    });
})

describe("Lista de actuadores", ()=>{
    it("Retorna lista de actuadores", async () => {
        const res = await request(app).get("/api/actuador/lista");
        expect(res.statusCode).toEqual(404);
    });
})

describe("Lista de Roles", ()=>{
    it("Retorna lista de roles", async () => {
        const res = await request(app).get("/api/rol/lista");
        expect(res.statusCode).toEqual(200);
    });
})

describe("Lista de Mediciones", ()=>{
    it("Retorna lista de todas las mediciones", async () => {
        const res = await request(app).get("/api/medicion/lista");
        expect(res.statusCode).toEqual(200);
    });
})



