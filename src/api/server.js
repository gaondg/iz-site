require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, company, subject, message } = req.body;
  console.log('Recebido POST /api/contact:', req.body);

  // Validação básica
  if (!name || !email || !subject || !message) {
    console.log('Erro: Campos obrigatórios não preenchidos.');
    return res.status(400).json({ error: 'Campos obrigatórios não preenchidos.' });
  }

  // Configuração do transporte de e-mail (exemplo com Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER, // seu e-mail
      pass: process.env.MAIL_PASS  // sua senha ou app password
    }
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: 'contato@izatacore.com',
    subject: `Contato via site: ${subject}`,
    text: `
      Nome: ${name}
      E-mail: ${email}
      Telefone: ${phone || '-'}
      Empresa: ${company || '-'}
      Assunto: ${subject}
      Mensagem: ${message}
    `,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('E-mail enviado com sucesso para contato@izatacore.com');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    res.status(500).json({ error: 'Erro ao enviar e-mail.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));