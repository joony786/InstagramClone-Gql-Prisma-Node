import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation : {
        createAccount: async  (_,args) =>{
            const {userName,email,bio,firstName = "",lastName = ""} = args
            return prisma.createUser({userName, firstName, email, bio, lastName});
        }
}
}
