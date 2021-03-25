import { UserDatabase } from "../data/userDatabase";
import { signupInputDTO } from "./entities/user";
import { generateToken } from "./services/authenticator";
import { HashManager } from "./services/hashManager";
import { generateId } from "./services/idGenerator"

const hashManager: HashManager = new HashManager()
const userDatabase: UserDatabase = new UserDatabase()

export const businessSignup = async (input: signupInputDTO) => {
     
    if (!input.name || !input.email || !input.password) {
        throw new Error('"name", "email" and "password" must be provided')
    }

    const id: string = generateId()

    const cypherPassword = await hashManager.hash(input.password);

    const user = {
        id, 
        name: input.name,
        email: input.email,
        password: cypherPassword
    }

    await userDatabase.insertUser(user);

    const token: string = generateToken({id})

    return token

}