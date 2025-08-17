// api/export_pdf.ts
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, sections, include_transparency_note = true } = req.body || {};
  if (!title || !sections || !Array.isArray(sections)) {
    return res.status(400).json({ error: 'Missing title or sections[]' });
  }

  // TODO: generate a PDF; for now, return a stub URL
  const pdfUrl = `https://proofpointlearning.com/downloads/${encodeURIComponent(title)}.pdf`;

  return res.status(200).json({ pdf_file_url: pdfUrl, included_transparency: include_transparency_note });
}
