import {prisma} from "../../../../generated/prisma-client";
import {generateJwtToken} from "../../../utlis";

export default {
    Mutation:{
        confirmSecret: async (_,args) =>{
            const {email,secret} = args;
            const user =  await prisma.user({email})
            if(user.loginSecret === secret){
            // JWT
                return generateJwtToken(user.id)
            }
            else throw Error ('wrong Email/secret')
        }
    }
}
