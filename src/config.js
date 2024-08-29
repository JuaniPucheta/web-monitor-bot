require('dotenv').config();

module.exports = {
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
  twilioAccountSid: process.env.TWILIO_ACCOUNT_SID,
  twilioAuthToken: process.env.TWILIO_AUTH_TOKEN,
  twilioWhatsAppNumber: process.env.TWILIO_WHATSAPP_NUMBER,
  whatsappRecipients: process.env.WHATSAPP_RECIPIENTS.split(','), // Lista de destinatarios de WhatsApp
  emailRecipients: process.env.EMAIL_RECIPIENTS.split(','), // Lista de destinatarios de correo
};
