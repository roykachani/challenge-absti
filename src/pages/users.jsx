import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../context/main';

function Users() {
  const { data, loading, error, getData } = useContext(MainContext);

  useEffect(() => {
    if (!data) getData();
  }, [data]);

  if (loading) {
    return (
      <>
        <div className="min-h-full w-full flex justify-center">
          <div className="w-80 flex flex-col items-center mt-12 gap-y-10">
            <h1 className="font-semibold text-3xl text-center">
              Usuarios Registrados
            </h1>
            <div className="w-80 flex justify-center">
              <h3>Cargando..</h3>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="min-h-full w-full flex justify-center">
          <div className="w-80 flex flex-col items-center mt-12 gap-y-10">
            <h1 className="font-semibold text-3xl text-center">
              Usuarios Registrados
            </h1>
            <div className="w-80 flex flex-col items-center justify-center gap-y-3">
              <h3>Hubo un error, intenta más tarde</h3>
              <Link
                to="/"
                className="w-auto px-5 py-1 bg-indigo-200 flex justify-center items-center rounded-lg shadow-sm md:transition-colors hover:bg-indigo-300"
              >
                inicio
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="min-h-full w-full flex justify-center mb-12">
        <div className="w-80 flex flex-col items-center mt-12 gap-y-10">
          <h1 className="font-semibold text-3xl text-center">
            Usuarios Registrados
          </h1>
          <div className="w-[350px] flex justify-center">
            {data.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Carrera</th>
                    <th>Edad</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((user, i) => (
                    <tr key={i}>
                      <td>{user.nombre}</td>
                      <td>{user.carrera}</td>
                      <td>{user.edad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h3>No hay datos para mostrar</h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
