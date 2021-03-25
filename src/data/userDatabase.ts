import { User } from "../business/entities/user";
import { BaseDatabase } from "./baseDatabase";

export class UserDatabase extends BaseDatabase{

    public insertUser = async (
        user: User
    ) => {     
       await BaseDatabase.connection('labook_users')
          .insert({
             id: user.id,
             name: user.name,
             email: user.email,
             password: user.password
          }).into("labook_users")
    }
}