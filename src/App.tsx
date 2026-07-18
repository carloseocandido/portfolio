import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Footer } from "./components/layout/Footer";
import { cn } from "./utils/cn";

function App() {
  return (
    <div
      className={cn(
        "relative min-h-screen overflow-hidden bg-background text-foreground antialiased",
      )}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
