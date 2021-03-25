import { Request, Response } from "express"
import { signupInputDTO } from "../business/entities/user"
import { businessSignup } from "../business/userBusiness"


export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
       let message = "Success!"
       const input: signupInputDTO = { 
           name: req.body.name, 
           email: req.body.email, 
           password: req.body.password 
        }
 
       const token: string = await businessSignup(input)
 
       res.status(200).send({ 
           message: "Usuário Criado", 
           token
        })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
       let message = "Success!"
 
       const { email, password } = req.body
 
    //    if (!email || !password) {
    //       res.statusCode = 406
    //       message = '"email" and "password" must be provided'
    //       throw new Error(message)
    //    }
 
    //    const queryResult: any = await connection("labook_users")
    //       .select("*")
    //       .where({ email })
 
    //    if (!queryResult[0]) {
    //       res.statusCode = 401
    //       message = "Invalid credentials"
    //       throw new Error(message)
    //    }
 
    //    const user: User = {
    //       id: queryResult[0].id,
    //       name: queryResult[0].name,
    //       email: queryResult[0].email,
    //       password: queryResult[0].password
    //    }
 
    //    const passwordIsCorrect: boolean = await compare(password, user.password)
 
    //    if (!passwordIsCorrect) {
    //       res.statusCode = 401
    //       message = "Invalid credentials"
    //       throw new Error(message)
    //    }
 
       const token = await businessLogin(email, password)
 
       res.status(200).send({ message, token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }