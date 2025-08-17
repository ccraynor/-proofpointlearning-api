// pages/api/export_pdf.ts
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { title, sections, include_transparency_note = true } = (req.body ?? {});
  if (!title || !Array.isArray(sections) || sections.length === 0) {
    return res.status(400).json({ error: 'Missing title or sections[]' });
  }
  const pdf_file_url = `https://your-project.vercel.app/downloads/${encodeURIComponent(title)}.pdf`;
  res.status(200).json({ pdf_file_url, included_transparency: !!include_transparency_note });
}
