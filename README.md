## Configuración de Twilio para Enviar Notificaciones de WhatsApp

Twilio es un servicio de comunicaciones en la nube que permite a los desarrolladores enviar y recibir mensajes de texto, realizar llamadas de voz, y enviar mensajes de WhatsApp a través de sus API. En este proyecto, Twilio se utiliza para enviar notificaciones automáticas de WhatsApp cuando se detecta un cambio en la página web que estás monitoreando.

### Pasos para Obtener los Datos de Twilio

1. **Crear una Cuenta en Twilio:**
   - Ve a [Twilio.com](https://www.twilio.com/) y regístrate para obtener una cuenta gratuita. La cuenta gratuita te proporciona un crédito inicial que puedes usar para pruebas.

2. **Obtener el SID de la Cuenta (Account SID) y el Token de Autenticación (Auth Token):**
   - Una vez que te registres y accedas a tu cuenta, encontrarás el `Account SID` y el `Auth Token` en el [Dashboard](https://www.twilio.com/console).
   - Estos son los datos que necesitarás para configurar la autenticación en tu aplicación.

3. **Configurar el Sandbox de WhatsApp:**
   - Twilio te proporciona un número de teléfono sandbox para realizar pruebas de WhatsApp.
   - En el Dashboard, ve a la sección de [WhatsApp](https://www.twilio.com/console/sms/whatsapp/learn) y sigue las instrucciones para configurar el sandbox.
   - Para conectar tu WhatsApp personal al sandbox, deberás enviar un mensaje con un código de verificación que Twilio te proporciona a un número específico. Una vez hecho esto, podrás enviar y recibir mensajes desde tu aplicación.

4. **Agregar el Número de Twilio a tu Proyecto:**
   - El número de teléfono del sandbox de WhatsApp que Twilio te proporciona se ve como `whatsapp:+14155238886`. Este número se usa en el proyecto para enviar mensajes de WhatsApp.

### Configuración de Variables de Entorno en `.env`

Agrega las siguientes variables a tu archivo `.env`:

```plaintext
TWILIO_ACCOUNT_SID: Es el identificador único de tu cuenta Twilio.
TWILIO_AUTH_TOKEN: Es la clave secreta de tu cuenta que permite realizar solicitudes autenticadas a la API de Twilio.
TWILIO_WHATSAPP_NUMBER: Es el número de teléfono del sandbox de WhatsApp que te proporciona Twilio (en formato whatsapp:+14155238886).
```

Después de obtener estos datos y configurarlos en tu archivo .env, podrás comenzar a enviar notificaciones de WhatsApp desde tu aplicación utilizando Twilio.

---
## node-cron
Es una librería que permite programar la ejecución de tareas en intervalos de tiempo específicos, similar a los cron jobs en sistemas Unix.

Explicación:
node-cron: Es una librería de Node.js que te permite ejecutar código de manera repetitiva a intervalos regulares, como cada minuto, cada hora, o en momentos específicos del día. Es útil para automatizar tareas como el monitoreo de sitios web, envío de correos, generación de informes, entre otros.