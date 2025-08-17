import type { NextApiRequest, NextApiResponse } from "next";

// Simple response type
type ExportPdfResponse = {
  success: boolean;
  message: string;
  pdfUrl?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ExportPdfResponse>
) {
  if (req.method === "POST") {
    const { title, sections } = req.body || {};

    if (!title || !sections || !Array.isArray(sections)) {
      return res.status(400).json({
        success: false,
        message: "Missing or invalid 'title' or 'sections' array",
      });
    }

    // For now, return a mock URL (no real PDF yet)
    const pdfUrl = `https://your-project.vercel.app/downloads/${encodeURIComponent(
      title
    )}.pdf`;

    return res.status(200).json({
      success: true,
      message: `PDF for '${title}' generated successfully (stub).`,
      pdfUrl,
    });
  }

  // Any non-POST requests
  return res.status(405).json({
    success: false,
    message: "Method not allowed. Use POST.",
  });
}
