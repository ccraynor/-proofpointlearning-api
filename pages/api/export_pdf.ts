import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');

  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed. Use POST.',
      text: 'Use POST with { "title": "...", "sections": ["..."] }'
    });
  }

  const { title, sections } = req.body ?? {};
  if (!title || !Array.isArray(sections)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid JSON body',
      text: 'Send JSON: { "title": "Smoke Test", "sections": ["Intro","Practice"] }'
    });
  }

  const pdfUrl = `https://proofpointlearning-api.vercel.app/downloads/${encodeURIComponent(
    String(title)
  )}.pdf`;

  return res.status(200).json({
    success: true,
    message: 'ok',
    pdfUrl,
    text: `PDF created (stub) for “${title}”. Link: ${pdfUrl}`
  });
}
