import {createTransport} from 'nodemailer'

export const sendMail = async (text)=>{
    const tranporter = createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
     
    })

    await tranporter.sendMail({
        subject:"Contact Request from protfolioWEB",
        to: process.env.MYEMAIL,
        from: process.env.MYEMAIL,
        text
      })
}