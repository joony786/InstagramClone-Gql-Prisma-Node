import './env'
import {GraphQLServer} from "graphql-yoga";
import schema from "./schema";
import logger from 'morgan'

const PORT = process.env.PORT || 4000
console.log(process.env.PORT)

const server = new GraphQLServer({schema})
server.express.use(logger("dev"))

server.start({port: PORT},()=> console.log(`server is running on Port ${PORT}`))
