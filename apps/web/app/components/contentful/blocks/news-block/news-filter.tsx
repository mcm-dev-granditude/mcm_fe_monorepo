import { NEWS_SOURCES } from "@/components/contentful/blocks/news-block/sources";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NewsFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export function NewsFilter({value, onChange}: NewsFilterProps) {
  return (
    <div className="flex items-center gap-2">
      <Select
        value={value}
        onValueChange={onChange}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select source" />
        </SelectTrigger>
        <SelectContent>
          {NEWS_SOURCES.map((source) => (
            <SelectItem
              key={source.id}
              value={source.id}
            >
              {source.displayName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}