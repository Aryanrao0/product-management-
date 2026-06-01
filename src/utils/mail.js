import Mailgen from "mailgen";
import mailgen from "mailgen"
import nodemailer from "nodemailer"

const sendEmail = async (option)=>{
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagelink.com"
        }
    })

    const emailTextual = mailGenerator.generatePlaintext(option.mailgenConent)

    const emailHtml = mailGenerator.generate(option.mailgenConent)

    const transporter = nodemailer.createTransport({
        host: process.env.MAILTRAP_SMTP_HOST,
        port: process.env.MAILTRAP_SMTP_PORT,
        auth: {
            user: process.env.MAILTRAP_SMTP_USER,
            pass: process.env.MAILTRAP_SMTP_PASS
        },
    })

    const mail = {
        from: "mail.taskmaneger@example.com",
        to: options.email,
        subject: options.subject,
        text: emailTextual,
        html: emailHtml
    }

    try{
        transporter.sendMail(mail)
    }catch(error){
        console.error("Email service failed silently. Make sure that you have provided your MAILTRAP credentails in the .env file ")
        console.error("Error: ",error)
    }
}

const emailVerificationMailgenContet = (username, verifictionUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! we are exited to have you on board.",
            action: {
                intruction: "To verify your email please click on the following button",
                button: {
                    color: "#1aae5aff",
                    text: "Verify your email",
                    link: verifictionUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

const forgetPasswordMailgenContet = (username, verifictionUrl) => {
    return {
        body: {
            name: username,
            intro: "We got the request to reset the password of your account.",
            action: {
                intruction: "To reset your email please click on the following button",
                button: {
                    color: "rgb(174, 26, 142)",
                    text: "Reset Password",
                    link: passwordResetUrl
                },
            },
            outro: "Need help, or have questions? Just reply to this email, we'd love to help.",
        },
    };
};

export {
    emailVerificationMailgenContet,
    forgetPasswordMailgenContet,
    sendEmail
}