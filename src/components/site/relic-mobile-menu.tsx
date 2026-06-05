"use client";

import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Gem, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { LanguageSwitcher } from "./language-switcher";
import type { NavItem } from "./nav-data";

type RelicMobileMenuProps = {
  items: NavItem[];
  labels: {
    menuOpen: string;
    menuClose: string;
    navigation: string;
  };
  languageLabels: {
    ariaLabel: string;
    english: string;
    portuguese: string;
  };
};

const relicEase = [0.22, 1, 0.36, 1] as const;

const slabVariants: Variants = {
  closed: {
    opacity: 0,
    x: "100%"
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.36,
      ease: relicEase,
      staggerChildren: 0.055,
      delayChildren: 0.12
    }
  }
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 20
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.24,
      ease: relicEase
    }
  }
};

export function RelicMobileMenu({
  items,
  labels,
  languageLabels
}: RelicMobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      hasOpenedRef.current = true;
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      window.setTimeout(() => firstLinkRef.current?.focus(), 80);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && hasOpenedRef.current) {
      buttonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls={panelId}
        aria-expanded={isOpen}
        aria-label={isOpen ? labels.menuClose : labels.menuOpen}
        className={cn("relic-menu-button", isOpen && "is-open")}
        onClick={() => setIsOpen((current) => !current)}
        ref={buttonRef}
        type="button"
      >
        <Gem className="h-5 w-5" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              aria-label={labels.menuClose}
              className="fixed inset-0 z-40 bg-black/58 backdrop-blur-[1px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              type="button"
            />
            <motion.aside
              aria-label={labels.navigation}
              aria-modal="true"
              className="mobile-stone-slab"
              id={panelId}
              initial="closed"
              animate="open"
              exit="closed"
              role="dialog"
              variants={slabVariants}
            >
              <div className="mobile-slab-dust" aria-hidden="true" />
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-200/80">
                  {labels.navigation}
                </span>
                <button
                  aria-label={labels.menuClose}
                  className="relic-close-button"
                  onClick={() => setIsOpen(false)}
                  type="button"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <nav className="mt-8" aria-label={labels.navigation}>
                <ul className="flex flex-col gap-3">
                  {items.map((item, index) => (
                    <motion.li key={item.id} variants={itemVariants}>
                      <a
                        className="mobile-stone-link"
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        ref={index === 0 ? firstLinkRef : undefined}
                      >
                        <span aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <motion.div className="mt-8" variants={itemVariants}>
                <LanguageSwitcher labels={languageLabels} />
              </motion.div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
