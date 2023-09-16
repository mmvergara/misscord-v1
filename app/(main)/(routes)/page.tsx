import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div className="flex flex-col">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
