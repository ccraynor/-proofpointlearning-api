import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed. Use POST.",
    });
  }

  try {
    const { title, sections } = req.body;

    if (!title || !sections) {
      return res.status(400).json({
        success: false,
        message: "title and sections are required",
      });
    }

    res.status(200).json({
      success: true,
      message: `PDF for '${title}' generated successfully (stub).`,
      pdfUrl: `https://proofpointlearning-api.vercel.app/downloads/${encodeURIComponent(title)}.pdf`,
      text: `Sections included: ${sections.join(", ")}`,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
