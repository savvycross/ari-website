import { Button } from "@/components/Button";
import { Wrap } from "@/components/Layout";

export default function NotFound() {
  return (
    <Wrap className="pt-20 pb-32">
      <p className="font-mono text-sm text-muted">404</p>
      <div className="mt-8">
        <Button href="/" arrow>
          Home
        </Button>
      </div>
    </Wrap>
  );
}
