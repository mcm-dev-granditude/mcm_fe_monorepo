import PageWrapper from "@/components/layout/page-wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <PageWrapper>
      <span className="mt-2 bg-background p-10 rounded-md w-full hover:bg-surface transition-colors duration-500">
        Hello from MatchCenterMedia Web!
      </span>
      <Button
        variant="default"
        id="livescore"
      >
        Live Score
      </Button>
    </PageWrapper>
  );
}