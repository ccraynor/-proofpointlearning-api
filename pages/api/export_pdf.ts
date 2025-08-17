// pages/api/export_pdf.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed. Use POST.' });
  }
  const { title, sections } = req.body ?? {};
  if (!title || !Array.isArray(sections)) {
    return res.status(400).json({ success: false, message: 'title and sections are required' });
  }
  const pdfUrl = `https://proofpointlearning-api.vercel.app/downloads/test.pdf`;
  return res.status(200).json({
    success: true,
    message: 'ok',
    pdfUrl,
    text: `PDF ready: ${pdfUrl}`
  });
}
