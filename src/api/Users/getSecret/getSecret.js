import {secretGenerator, sendSecret} from "../../../utlis";
import {prisma} from "../../../../generated/prisma-client";

export default {
    Mutation: {
        getSecret: async (_, args) => {
            const {email} = args;
            const loginSecret = secretGenerator()
            console.log(loginSecret)
            try {
                await sendSecret(email,loginSecret )
                await prisma.updateUser({data: {loginSecret}, where: {email}})
                return true;
            } catch (e) {
                console.log(e)
                return false
            }


        }
    }
}
