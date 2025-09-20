import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // Zoho SMTP over STARTTLS
  auth: {
    user: process.env.ZOHO_USER,
    pass: process.env.ZOHO_PASS,
  },
})

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const {
    childName,
    parentName,
    birthDate,
    parentPhone,
    parentEmail,
    startDate,
    message,
  } = req.body as Record<string, string>

  if (!childName || !parentName || !birthDate || !parentPhone || !parentEmail || !startDate) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const text = `Nouvelle demande d'inscription à la Garderie Mirabel\n\nINFORMATIONS DE L'ENFANT:\n- Nom: ${childName}\n- Date de naissance: ${birthDate}\n- Date de début: ${startDate}\n\nINFORMATIONS DU PARENT:\n- Nom: ${parentName}\n- Téléphone: ${parentPhone}\n- Email: ${parentEmail}\n\nMESSAGE ADDITIONNEL:\n${message || 'Aucun'}\n\n---\nSoumis via le site.`

  try {
    await transporter.sendMail({
      from: `Garderie Mirabel <${process.env.ZOHO_USER}>`,
      to: 'garderie.mirabel1@bellnet.ca',
      subject: `Nouvelle demande d'inscription - ${childName}`,
      text,
    })
    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'Email send failed' })
  }
}
