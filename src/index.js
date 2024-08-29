const cron = require('node-cron');
const checkForChanges = require('./monitor');
const sendEmail = require('./email');
const sendWhatsAppMessage = require('./whatsapp');

// Variable para almacenar el contenido anterior de la página
let lastContent = '';

console.log('Iniciando el monitoreo de la página web...');

cron.schedule('*/10 * * * *', async () => { // Ejecutar cada 10 minutos
  try {
    console.log('Ejecutando la tarea programada...');

    const { screenshotPath, hasChanged, content } = await checkForChanges('https://www.argentina.gob.ar/sssalud', lastContent);
    
    if (hasChanged) {
      console.log('¡Cambio detectado en la página! Enviando notificaciones...');

      lastContent = content;

      // Enviar correo electrónico
      await sendEmail('Cambio detectado', 'Se ha detectado un cambio en la página de la Superintendencia de Servicios de Salud.', screenshotPath);
      console.log('Correo enviado con éxito.');

      // Enviar mensaje de WhatsApp
      sendWhatsAppMessage('Se ha detectado un cambio en la página de la Superintendencia de Servicios de Salud.', `http://localhost/screenshots/${screenshotPath}`);
      console.log('Mensaje de WhatsApp enviado con éxito.');
    } else {
      console.log('No se detectaron cambios en la página.');
    }
  } catch (error) {
    console.error('Ocurrió un error durante la ejecución de la tarea:', error);
  }
});

console.log('El monitoreo está en ejecución y esperando novedades...');
