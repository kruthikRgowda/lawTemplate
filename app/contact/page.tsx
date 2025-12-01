import ContactForm from "../../components/ContactForm";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Schedule a consultation, request a case evaluation, or ask a question about our services.",
};

const offices = [
  {
    city: " Banglore",
    address: "No. 128, Sanskruti, Suvarna Badavane, 6th cross, Nagarbhavi 1st stage, Bengaluru - 560072",
    phone: "+91 9972916991",
    email: "shwetha@sralegal.co.in",
  }
];

export default function ContactPage() {
  return (
    <div className="bg-[var(--sand)]">
      <PageHeader
        title="Contact"
        description="Tell us about your matter—expect a response from an attorney within one business day."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <SectionHeading
            eyebrow="Get in touch"
            title="Schedule a consultation"
            subtitle="Share a few details and we will follow up with timing, needed materials, and conflicts check."
            align="left"
          />
          <div className="rounded-2xl border border-[var(--ink)]/10 bg-[var(--ink)] text-white p-8 card-shadow">
            <ContactForm variant="dark" />
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-2xl border border-[var(--beige)]/60 bg-white/90 p-6 shadow-sm">
            <h3 className="font-heading text-xl text-[var(--ink)] mb-3">
              Offices
            </h3>
            <div className="space-y-4 text-sm text-zinc-700">
              {offices.map((office) => (
                <div key={office.city}>
                  <div className="text-base font-heading text-[var(--ink)]">
                    {office.city}
                  </div>
                  <div>{office.address}</div>
                  <div>{office.phone}</div>
                  <div>{office.email}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-[var(--beige)]/60 bg-white/90 p-6 shadow-sm space-y-3">
            <h3 className="font-heading text-xl text-[var(--ink)]">
              Consultation hours
            </h3>
            <p className="text-sm text-zinc-700">
              Monday to Friday, 8am — 7pm. Weekend consultations by request for
              urgent matters.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
