const nodemailer = require('nodemailer');
const { emailUser, emailPass, emailRecipients } = require('./config');

async function sendEmail(subject, text, attachment) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    }
  });

  let info = await transporter.sendMail({
    from: `"Notificaciones" <${emailUser}>`,
    bcc: emailRecipients.join(','), // Copia oculta a múltiples destinatarios
    subject,
    text,
    attachments: [{ filename: 'screenshot.png', path: attachment }]
  });

  console.log('Correo enviado: %s', info.messageId);
}

module.exports = sendEmail;
