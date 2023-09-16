type props = { children: React.ReactNode };
const AuthLayout = ({ children }: props) => {
  return (
    <main className="bg-slate-800 flex justify-center items-center h-full flex-col">
      <h1 className="text-3xl text-white mb-4 font-bold">Welcome to MissCord v1</h1>
      {children}
    </main>
  );
};

export default AuthLayout;
