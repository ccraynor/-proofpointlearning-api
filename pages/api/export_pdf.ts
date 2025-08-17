// pages/api/export_pdf.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // make responses snappy & non-cached
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  // health/preflight: some clients (incl. Actions) may probe GET/OPTIONS first
  if (req.method === "GET" || req.method === "OPTIONS") {
    return res.status(200).json({ success: true, message: "healthy" });
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed. Use POST." });
  }

  // Minimal “it worked” stub — instant return
  return res.status(200).json({
    success: true,
    message: "ok",
    pdfUrl:
      "https://proofpointlearning-api.vercel.app/downloads/test.pdf",
  });
}
