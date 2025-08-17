// pages/privacy.tsx
export default function Privacy() {
  return (
    <main style={{maxWidth: 800, margin: "3rem auto", padding: "0 1rem", fontFamily: "system-ui, Arial"}}>
      <h1>Proofpoint Learning – Privacy Policy</h1>
      <p><strong>Last Updated:</strong> August 17, 2025</p>

      <h2>Who we are</h2>
      <p>Proofpoint Learning (“we,” “our,” “us”) provides educator tools including the ScaffoldBot and ScaffoldBot – ELL/ESL GPT actions.</p>

      <h2>What this policy covers</h2>
      <p>This page explains how our public GPT Actions (e.g., <code>/api/export_pdf</code>) handle information sent by users.</p>

      <h2>Data we process via Actions</h2>
      <ul>
        <li><strong>Lesson content you send</strong> (titles, sections, rubrics, text to adapt, etc.).</li>
        <li><strong>Non-sensitive usage data</strong> (basic logs like timestamp, route hit, status code) for reliability and abuse prevention.</li>
        <li><strong>We do not request or store PII</strong> (student names, IDs, addresses, health data). If you include it, you are responsible for obtaining consent and removing PII.</li>
      </ul>

      <h2>How we use the data</h2>
      <ul>
        <li>To fulfill your request (e.g., generate a PDF, CSV, or return a saved artifact ID).</li>
        <li>To monitor uptime and prevent abuse.</li>
      </ul>

      <h2>Retention</h2>
      <p>Request payloads are processed in memory and not persisted by default. Minimal logs (timestamp, route, status) may be retained up to 30 days for reliability and security.</p>

      <h2>Sharing</h2>
      <p>We do not sell your data. We may use hosting providers (e.g., Vercel) to operate the service.</p>

      <h2>Security</h2>
      <p>We use modern hosting and HTTPS. No method is 100% secure; please avoid sending sensitive personal data.</p>

      <h2>Your choices</h2>
      <ul>
        <li>Do not include PII in prompts or uploads.</li>
        <li>If you believe data should be removed from logs, contact us.</li>
      </ul>

      <h2>Contact</h2>
      <p>Email: support@proofpointlearning.com</p>

      <h2>Updates</h2>
      <p>We may update this policy. Changes will appear on this page with a new “Last Updated” date.</p>

      <hr />
      <p style={{fontSize: 12, color: "#555"}}>
        This page is provided for transparency and does not constitute legal advice.
      </p>
    </main>
  );
}
