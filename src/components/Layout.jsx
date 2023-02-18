import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="font-black text-4xl text-center text-white">
          CRM - Clients
        </h2>
        <nav className="mt-10">
          <Link
            className="text-2xl block mt-2 hover:text-blue-300 text-white"
            to="/"
          >
            Clients
          </Link>
          <Link
            className="text-2xl block mt-2 hover:text-blue-300 text-white"
            to="/client/new"
          >
            New Client
          </Link>
        </nav>
      </aside>

      <main className="md:w-3/4 p-10 md:h-screen overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;