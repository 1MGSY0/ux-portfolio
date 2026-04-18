import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  title,
  href,
  tag,
  summary,
  image,
  imageClassName,
  coverClassName,
}: {
  title: string;
  href: string;
  tag: string;
  summary: string;
  image: string;
  imageClassName?: string;
  coverClassName?: string;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-[28px] border border-sky-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(37,99,235,0.14)]"
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-[linear-gradient(135deg,#dbeafe,#ecfdf5)] ${coverClassName ?? ""}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 600px, (min-width: 768px) 50vw, 92vw"
          className={`transition duration-500 group-hover:scale-105 ${imageClassName ?? "object-cover"}`}
        />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700/75">
          {tag}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">{summary}</p>
      </div>
    </Link>
  );
}
