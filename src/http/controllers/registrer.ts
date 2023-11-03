import { FastifyRequest, FastifyReply} from "fastify"
import {hash} from "bcryptjs"
import { prisma } from "@/lib/prisma"
import { z } from "zod"
import { RegisterUseCase } from "@/use-cases/registrer"
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { UserAlreadyExistsError } from "@/use-cases/errors/user-already-exists-erro"


export async function register(request: FastifyRequest, replay: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string().min(6)
    })

    const {name, email, password} = registerBodySchema.parse(request.body)
    
    try {

        const usersRepository = new PrismaUsersRepository()
        const registerUseCase = new RegisterUseCase(usersRepository)

        await registerUseCase.execute({
            name,
            email,
            password
        })
    } catch (err) {
        if (err instanceof UserAlreadyExistsError){
            return replay.status(409).send({message: err.message})
        }

        throw err
    }

    return replay.status(201).send()

}