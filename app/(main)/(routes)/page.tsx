import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const state = true;

const Home = () => {
  return (
    <div className="flex flex-col">
      <p className="text-3xl font-bold text-indigo-500">Hi</p>;
      <Button variant="ghost">Click me</Button>
    </div>
  );
};

export default Home;
