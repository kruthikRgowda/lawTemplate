type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  const titleColor = theme === "dark" ? "text-white" : "text-[var(--ink)]";
  const subtitleColor = theme === "dark" ? "text-white/80" : "text-zinc-700";

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm tracking-[0.2em] uppercase text-[var(--gold)] font-semibold">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-semibold font-heading ${titleColor} leading-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base ${subtitleColor} max-w-2xl`}>{subtitle}</p>
      )}
    </div>
  );
}
