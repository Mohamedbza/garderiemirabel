import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// -- MIDDLEWARES -----------------------------------------------------------
app.use(cors())
app.use(express.json())

// -- EMAIL TRANSPORTER ------------------------------------------------------
// Make sure to set the following ENV variables:
// EMAIL_HOST, EMAIL_PORT, EMAIL_SECURE ("true"|"false"), EMAIL_USER, EMAIL_PASS
// These values depend on your email provider.
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

// Verify transporter configuration on startup
transporter.verify((err) => {
  if (err) {
    console.error('❌  Email transporter configuration error:', err)
  } else {
    console.log('✅  Email transporter is ready to send messages')
  }
})

// -- ROUTES -----------------------------------------------------------------
app.post('/api/contact', async (req, res) => {
  const {
    childName,
    parentName,
    birthDate,
    parentPhone,
    parentEmail,
    startDate,
    message,
  } = req.body || {}

  if (!childName || !parentName || !birthDate || !parentPhone || !parentEmail || !startDate) {
    return res.status(400).json({ success: false, error: 'Missing required fields.' })
  }

  const mailOptions = {
    from: `Garderie Mirabel Site <${process.env.EMAIL_USER}>`,
    to: 'garderie.mirabel1@bellnet.ca',
    subject: `Nouvelle demande d'inscription - ${childName}`,
    text: `Nouvelle demande d'inscription à la Garderie Mirabel\n\nINFORMATIONS DE L'ENFANT:\n- Nom de l'enfant: ${childName}\n- Date de naissance: ${birthDate}\n- Date de début souhaitée: ${startDate}\n\nINFORMATIONS DU PARENT:\n- Nom du parent: ${parentName}\n- Téléphone: ${parentPhone}\n- Email: ${parentEmail}\n\nMESSAGE ADDITIONNEL:\n${message || 'Aucun message additionnel'}\n\n---\nCette demande a été soumise via le site web de la Garderie Mirabel.`,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ success: false, error: 'Email sending failed.' })
  }
})

// -- START SERVER -----------------------------------------------------------
app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`)
})
