"use client";

import { motion } from "framer-motion";

import type { NavItem } from "./nav-data";

type DesktopNavigationProps = {
  items: NavItem[];
  ariaLabel: string;
};

export function DesktopNavigation({ items, ariaLabel }: DesktopNavigationProps) {
  return (
    <nav aria-label={ariaLabel} className="hidden lg:block">
      <ul className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={item.id}>
            <motion.a
              className="stone-nav-link group"
              href={item.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              whileFocus={{ y: -3 }}
            >
              <span className="stone-nav-glyph" aria-hidden="true" />
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
