import Link from "next/link";

import { resolveHref } from "@/sanity/lib/utils";
import type { MenuItem, SettingsPayload } from "@/types";

interface NavbarProps {
  data: SettingsPayload
}
export default function Navbar(props: NavbarProps) {
  const { data } = props;
  const menuItems = data?.menuItems || ([] as MenuItem[]);
  return (
    <div className="sticky top-0 z-10 flex flex-wrap items-center gap-x-5 bg-green/80 px-4 py-4 backdrop-blur md:px-16 md:py-5 lg:px-32">
      {/* Logo and Home Link */}
      <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
        {/* SVG Logo Here */}
        <svg
          className="h-8 w-8 mr-2" // Adjust the size as needed
          viewBox="0 0 24 24" // Example viewBox, adjust as needed
          xmlns="http://www.w3.org/2000/svg"
          fill="none" // Ensures SVG is transparent
          stroke="currentColor"
        >
          {/* Your SVG Path Here */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </Link>








      {menuItems &&
        menuItems.map((menuItem, key) => {
          const href = resolveHref(menuItem?._type, menuItem?.slug);
          if (!href) {
            return null;
          }
          return (
            <Link
              key={key}
              className={`text-lg hover:text-black md:text-xl ${
                menuItem?._type === "home"
                  ? "font-extrabold text-black"
                  : "text-gray-600"
              }`}
              href={href}
            >
              {menuItem.title}
            </Link>
          );
        })}
    </div>
  );
}
