import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import SectionHeading from "../../components/SectionHeading";

export const metadata = {
  title: "Blog",
  description:
    "Insights, case studies, and commentary from Lawyer attorneys.",
};

const posts = [
  {
    title: "Navigating crisis with composure",
    excerpt:
      "Five actions executives should take in the first 48 hours of a legal or regulatory crisis.",
    date: "March 12, 2025",
  },
  {
    title: "Preparing for trial without losing leverage",
    excerpt:
      "How to maintain negotiation strength while gearing up for courtroom advocacy.",
    date: "March 2, 2025",
  },
  {
    title: "Building compliance that scales",
    excerpt:
      "Practical policies that protect teams and move as fast as your business.",
    date: "February 18, 2025",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-[var(--sand)]">
      <PageHeader
        title="Blog"
        description="Legal analysis and practical guidance from the Lawyer team."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-20 space-y-10">
        <SectionHeading
          eyebrow="Latest"
          title="Recent insights"
          subtitle="Stay current with concise takes on case law, regulation, and courtroom strategy."
          align="left"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-[var(--beige)]/60 bg-white/90 p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--gold)] mb-2">
                {post.date}
              </div>
              <h3 className="font-heading text-xl text-[var(--ink)] mb-2">
                {post.title}
              </h3>
              <p className="text-sm text-zinc-700">{post.excerpt}</p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)] hover:text-[var(--gold)]"
              >
                Schedule a consult <span aria-hidden>›</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
