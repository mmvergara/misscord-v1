import ToggleTheme from "@/components/toggle-theme";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex flex-col">
      <ToggleTheme />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
