"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const metadata = {
  title: "LingNorsk",
  description: "Добро пожаловать в LingNorsk!",
};

export default function Layout({ children }) {
  const pathname = usePathname() || "";
  const categories = useMemo(() => [
    {
      title: "Ord og Bilder",
      slug: "ord-og-bilder",
      sub: [
        "Hei", "Preposisjoner", "Refleksive pronomen", "Genitiv",
        "Eiendomsord", "Adjektiv", "Verb", "Subjunksjoner", "Спørreord",
        "Familien min", "Tid og Tall", "Mat", "Årstider og vær", "Aktiviteter",
        "Helse", "Reise", "Høytider", "Hjemmeliv", "Klær", "Forhold",
        "Å skrive brev", "Besøk", "Helger og planer"
      ]
    },
    {
      title: "Setninger",
      slug: "setninger",
      sub: ["Leddsetninger", "Helsetninger"]
    },
    {
      title: "Fyll inn",
      slug: "fyll-inn",
      sub: []
    },
    {
      title: "Leseforståelse",
      slug: "leseforstaelse",
      sub: []
    },
    {
      title: "Skriftlig prøve",
      slug: "skriftlig-prove",
      sub: []
    },
    {
      title: "Min side",
      slug: "profil",
      sub: []
    }
  ], []);
  return (
    <div className="flex min-h-screen bg-white">
      <aside className="w-64 bg-[#f7f9fc] border-r border-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4 text-blue-700">LingNorsk</h2>
        <nav className="space-y-3">
          {categories.map((cat) => (
            <div key={cat.slug}>
              <p className="text-gray-700 font-semibold mb-1">{cat.title}</p>
              <ul className="pl-2 space-y-1">
                {cat.sub && cat.sub.length > 0 ? (
                  cat.sub.map((sub, i) => (
                    <li key={i}>
                      <Link
                        href={`/${cat.slug}/${sub.toLowerCase().replaceAll(" ", "-")}`}
                        className={`block px-2 py-1 rounded hover:bg-blue-100 transition ${pathname.includes(sub.toLowerCase()) ? "bg-blue-200 text-blue-900" : "text-gray-600"}`}
                      >
                        {sub}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li>
                    <Link
                      href={`/${cat.slug}`}
                      className={`block px-2 py-1 rounded hover:bg-blue-100 transition ${pathname.includes(cat.slug) ? "bg-blue-200 text-blue-900" : "text-gray-600"}`}
                    >
                      Перейти
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}