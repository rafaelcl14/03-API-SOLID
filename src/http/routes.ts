import { FastifyInstance } from "fastify";
import { register } from "./controllers/registrer";

export async function appRoutes(app: FastifyInstance) {
    app.post('/users', register)
}