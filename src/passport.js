import {Strategy,ExtractJwt}  from  'passport-jwt'
import passport from 'passport'
import {prisma} from "../generated/prisma-client";

const jwtOptions = {
    jwtFromRequest  : ExtractJwt.fromAuthHeaderAsBearerToken(),
     secretOrKey : process.env.JWT_SECRET
}
const verifyUser = async (payload,done) => {
    try{
         const user = await prisma.user({id:payload.id})
        if(user !== null){
            return done(null,user)
        }return done(null,false)
    }
    catch (e) {
        return done(e,false)
    }
}
passport.use(new Strategy(jwtOptions,verifyUser))
