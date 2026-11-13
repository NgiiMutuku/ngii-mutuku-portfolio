
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="container-mono py-24 md:py-32">
      <SectionHeading
        eyebrow="Say hello"
        title="Contact"
        description="Have a project in mind, or interested in connecting? I'd love to hear from you."
      />

      <div className="reveal">
        <a
          href="https://www.linkedin.com/in/ngiimutuku/"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Connect with me on LinkedIn
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
