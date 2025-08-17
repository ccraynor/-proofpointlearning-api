// pages/api/export_pdf.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed. Use POST." });
  }

  return res.status(200).json({
    success: true,
    message: "ok",
    pdfUrl: "https://proofpointlearning-api.vercel.app/downloads/test.pdf",
  });
}
