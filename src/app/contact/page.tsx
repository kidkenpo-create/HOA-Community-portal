import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ocean Hills Community Portal",
  description: "Community information and independent real estate contacts for Ocean Hills.",
};

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "3rem 1.25rem", fontFamily: "Arial, sans-serif", lineHeight: 1.65 }}>
      <a href="/" style={{ color: "#145e76" }}>← Back to community portal</a>
      <h1>Contact</h1>
      <p>Find the right contact for your question. This independently operated community portal is not an official Ocean Hills Country Club HOA website.</p>

      <section aria-labelledby="real-estate" style={{ marginTop: 32, padding: 24, border: "1px solid #d5dfe3", borderRadius: 12 }}>
        <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 1, color: "#536875" }}>Real estate inquiries</p>
        <h2 id="real-estate">Bray Homes Realty</h2>
        <p>Jennifer Bray and John Bray work with buyers and sellers in Oceanside and local 55+ communities, including Ocean Hills Country Club.</p>
        <p><strong>Jennifer Bray</strong> · California DRE #01441251</p>
        <p><a href="tel:+17605123650">Call (760) 512-3650</a> · <a href="mailto:jbrayhomes@gmail.com">Email Jennifer Bray</a></p>
        <p><a href="https://www.zillow.com/profile/jenbrayhomes" target="_blank" rel="noopener noreferrer">View Bray Homes Realty's agent profile</a></p>
        <p style={{ fontSize: 13, color: "#536875" }}>Bray Homes Realty is an independent real estate business. Real estate inquiries are separate from community administration and HOA matters.</p>
      </section>

      <section aria-labelledby="community" style={{ marginTop: 32 }}>
        <h2 id="community">Community and HOA questions</h2>
        <p>For HOA rules, dues, access, or official association business, please use the community's authorized management or HOA contact channels. The real estate contacts above do not handle HOA administration.</p>
      </section>
    </main>
  );
}
