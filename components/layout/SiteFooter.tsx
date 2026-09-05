import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/company";

const companyLinks = [
  ["About", "/about"],
  ["Capabilities", "/capabilities"],
  ["Products", "/products"],
  ["Sustainability", "/sustainability"],
  ["Contact Us", "/contact"],
] as const;

const productLinks = [
  ["Tote Bins", "/products/tote-bins"],
  ["Plastic Spools", "/products/spools"],
  ["Injection Moulding", "/capabilities"],
  ["OEM Manufacturing", "/capabilities#capability-programs"],
] as const;

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <p className="footer-wordmark">PIXELPLAST</p>
          <p>{company.tagline}</p>
          <p>
            Injection-moulded tote bins, plastic spools, and custom OEM parts
            for industrial programs.
          </p>
        </div>

        <div>
          <p className="footer-label">About</p>
          <div className="footer-links">
            {companyLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-label">Products & capabilities</p>
          <div className="footer-links">
            {productLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <p className="footer-label">Contact</p>
          <a href={company.phoneHref}>{company.phone}</a>
          <a href={company.emailHref}>{company.email}</a>
          <p><strong>{company.address}</strong></p>
          <p>GST: {company.gst}</p>
          <Button asChild variant="light" size="sm">
            <Link href="/contact#quote">
              Request a Quote <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="site-container footer-legal">
        <p>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</p>
        <p>Plastic injection moulding · Dadri, UP</p>
      </div>
    </footer>
  );
}
