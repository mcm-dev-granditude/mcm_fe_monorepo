import { NEWS_SOURCES } from "@/components/blocks/news-block/sources";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { NewsSourceId } from "@/components/blocks/news-block/types";

interface NewsFilterProps {
  value: string;
  onChange: (value: NewsSourceId) => void;
}

export function NewsFilter({value, onChange}: NewsFilterProps) {
  const currentSource = NEWS_SOURCES.find(source =>
    source.id.toLowerCase() === value.toLowerCase()
  );

  return (
    <div className="flex items-center gap-2">
      <Select
        value={value}
        onValueChange={onChange}
        defaultValue="all"
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={currentSource?.displayName || "Select source"} />
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