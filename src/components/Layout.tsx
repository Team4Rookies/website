export const Layout = ({ children }) => {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 flex p-4 shadow-md bg-blue-500 text-white text-xl">
        <div>Teams for Rookies</div>
      </header>
      {children}
    </div>
  );
};
