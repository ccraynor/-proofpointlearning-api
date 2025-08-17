// pages/api/export_pdf.ts
import type { NextApiRequest, NextApiResponse } from "next";

type Ok = { success: true; message: string; pdfUrl: string };
type Err = { success: false; message: string };

export const config = {
  api: {
    // keeps cold-starts tiny, avoids body parsing surprises
    bodyParser: { sizeLimit: "64kb" },
    externalResolver: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Ok | Err>) {
  // Force JSON and no caching (so Actions never gets stale/HTML)
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");

  try {
    if (req.method !== "POST") {
      res.status(405).json({ success: false, message: "Method not allowed. Use POST." });
      return;
    }

    const { title, sections } = (req.body ?? {}) as {
      title?: string;
      sections?: string[];
    };

    if (!title || !Array.isArray(sections)) {
      res.status(400).json({ success: false, message: "Missing 'title' or 'sections'[]" });
      return;
    }

    // 🔒 Do NOT do long work here yet — this stub returns instantly:
    const safeTitle = String(title).trim() || "Untitled";
    const pdfUrl = `https://proofpointlearning-api.vercel.app/downloads/${encodeURIComponent(safeTitle)}.pdf`;

    res.status(200).json({
      success: true,
      message: `PDF for '${safeTitle}' generated successfully (stub).`,
      pdfUrl,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, message: "Unexpected server error." });
  }
}
