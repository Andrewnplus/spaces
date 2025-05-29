import Link from "next/link";
import { navItems } from "@/lib/nav";

export default function Sidebar() {
  return (
    <aside className="w-56 border-r bg-muted/40 p-4">
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
