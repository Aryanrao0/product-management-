import mailgen from "mailgen"

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
    forgetPasswordMailgenContet
}