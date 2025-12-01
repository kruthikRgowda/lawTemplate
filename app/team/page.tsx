import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Team",
  description:
    "Meet the attorneys and strategists who lead Lawyera engagements.",
};

const team = [
  {
    name: "RaviShankar Kandhi",
    role: "BCom, LLB, FCS",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Srinivas",
    role: "BCom, LLB",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nagimani",
    role: "BCom, LLB",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kiran",
    role: "BCom, LLB",
    bio: "",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
  },
];

export default function TeamPage() {
  return (
    <div className="bg-[var(--sand)]">
      <PageHeader
        title="Our Team"
        description="A collaborative group of litigators, negotiators, and advisors delivering senior-level attention."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 space-y-10">
        <SectionHeading
          eyebrow="People"
          title="Attorneys dedicated to clear outcomes"
          subtitle="We believe in disciplined preparation, transparent communication, and decisive advocacy."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl overflow-hidden border border-[var(--beige)]/60 bg-white card-shadow flex flex-col"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-4 py-5 space-y-1">
                <div className="font-heading text-lg text-[var(--ink)]">
                  {member.name}
                </div>
                <div className="text-sm text-[var(--gold)] font-semibold">
                  {member.role}
                </div>
                <p className="text-sm text-zinc-700">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
