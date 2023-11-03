import { prisma } from "@/lib/prisma"
import { UserRepository } from "@/repositories/users-repository"
import { hash } from "bcryptjs"
import { UserAlreadyExistsError } from "./errors/user-already-exists-erro"

// SOLID

// D - Dependency Inversion Principle


interface RegisterUseCaseRequest{
    name: string
    email: string
    password: string
}

export class RegisterUseCase {

    constructor(private usersRepository: UserRepository){}

    async execute({name, email, password}: RegisterUseCaseRequest){

        const password_hash = await hash(password, 6)
    
        const userWithSameEmail = await this.usersRepository.findByEmail(email)
    
        if (userWithSameEmail){
            throw new UserAlreadyExistsError()
        }

        // const prismaUsersRepository = new PrismaUsersRepository()
    
        await this.usersRepository.create({
            name,
            email, 
            password_hash
        })
    }
}
