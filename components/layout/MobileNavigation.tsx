"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Menu, X } from "lucide-react";

import { navigation } from "@/data/company";
import { Button } from "@/components/ui/button";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-menu-trigger lg:hidden"
          aria-label="Open navigation"
        >
          <Menu aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="mobile-menu-overlay" />
        <Dialog.Content className="mobile-menu-panel">
          <div className="mobile-menu-head">
            <Dialog.Title className="mobile-menu-title">Navigation</Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation">
                <X aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>

          <nav aria-label="Mobile navigation" className="mobile-menu-links">
            {navigation.map((item, index) => (
              <Link href={item.href} onClick={() => setOpen(false)} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            ))}
          </nav>

          <Button asChild className="mt-auto w-full">
            <Link href="/contact#quote" onClick={() => setOpen(false)}>
              Request a Quote <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
