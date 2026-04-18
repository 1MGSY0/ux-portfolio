import Link from "next/link";
import { Reveal } from "@/app/components/reveal";
import { contactDetails } from "@/app/data/site-content";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-8 lg:px-12">
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700/75">
          Contact Me
        </p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
          Opportunities to turn ideas into digital products.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I&apos;m open to junior UI / UX / Software Development roles,
          interaction design, prototyping, and how product ideas can be translated into real,
          usable software experiences.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {contactDetails.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.08}>
            <Link
              href={item.href}
              className="block rounded-[28px] border border-sky-100 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(37,99,235,0.12)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-3 text-base font-medium text-slate-900">{item.value}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
