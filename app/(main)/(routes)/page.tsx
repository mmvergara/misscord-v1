import ToggleTheme from "@/components/toggle-theme";
import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="">
      <ToggleTheme />
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
