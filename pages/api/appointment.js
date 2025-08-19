import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, address, unit, memo, description, email, phone } = req.body || {};

  try {
    const yahooUser = process.env.YAHOO_USER;
    const yahooPass = process.env.YAHOO_PASS;

    if (!yahooUser || !yahooPass) {
      throw new Error('Missing Yahoo env vars');
    }

    const transporter = nodemailer.createTransport({
      service: 'yahoo',
      auth: { user: yahooUser, pass: yahooPass }
    });

    const text = `New appointment request
Name: ${name}
Address: ${address}
Unit: ${unit}
Memo: ${memo || ''}
Description: ${description || ''}
Client Email: ${email || ''}
Client Phone: ${phone || ''}`;

    await transporter.sendMail({
      from: yahooUser,
      to: yahooUser,
      subject: 'New appointment request - Rapid Plumbing Solutions',
      text
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
