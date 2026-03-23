import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/quote', (req, res) => {
  const { name, email, eventDate, eventType, message } = req.body;
  
  console.log('--- Nueva Solicitud de Cotización ---');
  console.log(`Nombre: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Fecha: ${eventDate}`);
  console.log(`Evento: ${eventType}`);
  console.log(`Mensaje: ${message}`);
  console.log('------------------------------------');

  // Here you would normally send an email or save to a database
  res.status(200).json({ 
    success: true, 
    message: 'Solicitud recibida correctamente' 
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de ONYX corriendo en http://localhost:${PORT}`);
});
