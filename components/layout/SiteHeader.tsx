import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Button } from "@/components/ui/button";
import { company, navigation } from "@/data/company";

export function SiteHeader() {
  return (
    <>
      <div className="contact-bar">
        <div className="site-container contact-bar-inner">
          <p>Plastic injection moulding · OEM</p>
          <div>
            <a href={company.phoneHref}>
              <Phone aria-hidden="true" /> {company.phone}
            </a>
            <a href={company.emailHref}>
              <Mail aria-hidden="true" /> {company.email}
            </a>
          </div>
        </div>
      </div>

      <header className="site-header nav-bar">
        <div className="site-container nav-inner">
          <Link href="/" className="brand-lockup" aria-label="Pixelplast home">
            <Image
              src="/assets/pixelplast-logo.webp"
              alt="Pixel Technoplast Private Limited - Smart Plastic Solutions"
              width={283}
              height={100}
              priority
            />
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Button asChild size="sm" className="hidden lg:inline-flex">
              <Link href="/contact#quote">
                Request a Quote <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <MobileNavigation />
          </div>
        </div>
      </header>
    </>
  );
}
