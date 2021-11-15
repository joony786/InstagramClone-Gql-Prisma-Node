import {preFixes, suffixs} from "./RandomWords";
import  nodemailer from 'nodemailer'
import  sgTransport from 'nodemailer-sendgrid-transport'
import jwt from 'jsonwebtoken'
export const secretGenerator = () =>{
    const randomNumber = Math.floor(Math.random()*suffixs.length)
    return (`${suffixs[randomNumber]}_${preFixes[randomNumber]}`)
}

 const sendMail = email => {
 const options = {
     auth: {
         api_user: 'SENDGRID_USERNAME',
         api_key: 'SENDGRID_PASSWORD'
     }
 }
  const  client = nodemailer.createTransport(sgTransport(options));
  return client.sendMail(email)
};
export const sendSecret =(address,secret) =>{
        const email ={
            from: 'junaid@co.com',
            to: address,
            subject:'Login secret for Instagram',
            html:`hello! your login secret is <b>${secret} </b> <br> copy and paste to your app to login`
        }
        return sendMail(email)
}

export const generateJwtToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
