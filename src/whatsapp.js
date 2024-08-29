const twilio = require('twilio');
const { twilioAccountSid, twilioAuthToken, twilioWhatsAppNumber, whatsappRecipients } = require('./config');

const client = twilio(twilioAccountSid, twilioAuthToken);

function sendWhatsAppMessage(body, mediaUrl) {
  whatsappRecipients.forEach(recipient => {
    client.messages.create({
      from: twilioWhatsAppNumber,
      to: recipient,
      body,
      mediaUrl
    })
    .then(message => console.log('Mensaje enviado a %s: %s', recipient, message.sid))
    .catch(error => console.error('Error enviando mensaje a %s: ', recipient, error));
  });
}

module.exports = sendWhatsAppMessage;
