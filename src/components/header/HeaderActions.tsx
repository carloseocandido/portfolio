import { ThemeToggle } from "../ui/ThemeToggle";

export function HeaderActions() {
  return (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      {/* <Button
        href={heroLinks.resume}
        variant="secondary"
        download="Carlos-CV.txt"
        className="hidden sm:inline-flex"
      >
        Resume
      </Button> */}
    </div>
  );
}
