// …inside the successful POST path:
const pdfUrl = `https://proofpointlearning-api.vercel.app/downloads/${encodeURIComponent(title)}.pdf`;
return res.status(200).json({
  success: true,
  message: "ok",
  pdfUrl,
  text: `PDF ready: ${pdfUrl}`   // 👈 add this
});
