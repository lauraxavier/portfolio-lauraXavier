const nodemailer = require("nodemailer");

export default function sendEmail(req, res) {
    const { email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.PASSMAIL,
        },
    });

    transporter
        .sendMail({
            from: email,
            replyTo: `${email}`,
            to: process.env.USERMAIL,
            subject: "Contato via Portfolio",
            html: `
      <h1>Contato via Portfolio</h1>
      <p>
        <strong>E-mail:</strong>: ${email}<br />
        <strong>Assunto:</strong>: ${subject}<br />
        <strong>Mensagem</strong>: <br />
        ${message}
      </p>
    `,
        })
        .then((response) => {
            res.send(response);
        })
        .catch((error) => {
            res.send(error);
            console.error("Erro ao enviar e-mail:", error);
            res.status(500).send("Erro ao enviar e-mail.");
        });
}
