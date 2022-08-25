import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="w-full h-20 bg-indigo-600 md:flex justify-center ">
      <nav className="bg-indigo-600 text-black font-medium  flex justify-around items-center h-20  md:w-2/4 [&>a]:transition-colors hover:[&>a]:bg-indigo-300 ">
        <Link
          to="/"
          className="w-auto px-5 py-1 bg-indigo-200 flex justify-center items-center rounded-lg shadow-sm"
        >
          Inicio
        </Link>
        <Link
          to="/users"
          className="w-auto px-5 py-1 bg-indigo-200 flex justify-center items-center rounded-lg shadow-sm"
        >
          usuarios
        </Link>
        <Link
          to="/users/addUsers"
          className="w-auto px-5 py-1 bg-indigo-200 flex justify-center items-center rounded-lg shadow-sm"
        >
          Nuevo usuario
        </Link>
      </nav>
    </header>
  );
};

export default Nav;
