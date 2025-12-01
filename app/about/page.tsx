import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "About",
  description:
    "Learn about Lawyer's boutique approach, leadership, and commitment to client outcomes.",
};

const milestones = [
  { label: "Years of practice", value: "18+" },
  { label: "Matters resolved", value: "1,800+" },
  { label: "Court appearances", value: "600+" },
  { label: "Client satisfaction", value: "98%" },
];

export default function AboutPage() {
  return (
    <div className="bg-[var(--sand)]">
      <PageHeader
        title="About Us"
        description="We are a boutique law firm built for leaders who value precision, speed, and clarity."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Exceptional service meets accessible expertise"
            subtitle="Senior attorneys lead every engagement. We operate lean and communicate decisively so you always know the next move."
            align="left"
          />
          <p className="text-base text-zinc-700">
            Lawyer was founded to deliver enterprise-grade counsel without the
            overhead and opacity of large firms. We have argued complex motions,
            navigated regulatory disputes, and shepherded high-value
            transactions with a relentless focus on client outcomes.
          </p>
          <p className="text-base text-zinc-700">
            Clients count on us for clear risk assessments, courtroom readiness,
            and pragmatic negotiation strategies. We keep you informed and ready
            to act—every step of the way.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {milestones.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--beige)]/60 bg-white/80 p-4 text-center"
              >
                <div className="font-heading text-2xl text-[var(--ink)]">
                  {item.value}
                </div>
                <div className="text-sm text-zinc-700">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 border border-[var(--beige)] rounded-2xl opacity-60" />
          <Image
            src="https://images.unsplash.com/photo-1530023367847-a683933f4177?auto=format&fit=crop&w=1200&q=80"
            alt="Our office"
            width={640}
            height={760}
            className="relative rounded-2xl object-cover card-shadow"
          />
        </div>
      </section>
    </div>
  );
}
