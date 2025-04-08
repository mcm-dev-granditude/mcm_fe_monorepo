import Link from "next/link";
import { cn } from "@repo/ui";

const newsProviders = [
  {slug: "mcm-nyheter", label: "MCM Nyheter"},
  {slug: "fotbolls-kanalen", label: "Fotbolls Kanalen"},
  {slug: "fotboll-transfers", label: "Fotboll Transfers"},
  {slug: "footboll-direkt", label: "Footboll Direkt"},
  {slug: "hockey-sverige", label: "Hockey Sverige"}
];

export default function News({className}: {className?: string}) {
  return (
    <div className={cn(className)}>
      <h1 className="text-xl font-bold mb-4">News!</h1>

      <div className="w-full bg-surface flex flex-wrap gap-4">
        {
          newsProviders.map(provider => (
            <div
              key={provider.slug}
              className="p-4 flex items-center gap-4 ring-1  w-full ring-gray-300 rounded-lg"
            >
              <Link
                href={`/news/${provider.slug}`}
                className="cursor-pointer text-lg font-medium"
              >{provider.label}
              </Link>
            </div>
          ))
        }
      </div>
    </div>);
};