// app/api/export_pdf/route.ts
export const runtime = 'edge';
export const preferredRegion = ['iad1','sfo1','dub1']; // pick your closest
export const dynamic = 'force-dynamic';

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store'
    }
  });
}

export async function GET() {
  return json({ success: false, message: 'Method not allowed. Use POST.' }, 405);
}

export async function POST(req: Request) {
  let body: any = {};
  try {
    body = await req.json();
  } catch {
    return json({ success: false, message: 'Invalid JSON body' }, 400);
  }

  const title = (body?.title ?? '').toString().trim();
  const sections = Array.isArray(body?.sections) ? body.sections : [];

  if (!title) {
    return json({ success: false, message: 'title is required' }, 400);
  }

  const pdfUrl = `https://proofpointlearning-api.vercel.app/downloads/${encodeURIComponent(title)}.pdf`;

  return json({
    success: true,
    message: 'ok',
    pdfUrl,
    echo: { title, sections } // helpful for debugging; safe to keep
  });
}
