import { useContext, useEffect, useState } from 'react';
import { MainContext } from '../context/main';

function AddUsers() {
  const { data, loading, error, getData, addUser } = useContext(MainContext);
  const [Obj, setObj] = useState(null);

  const handleUser = (e) => {
    e.preventDefault();
    let newObj = {
      nombre: e.target['nombre'].value,
      carrera: e.target['carrera'].value,
      edad: e.target['edad'].value,
    };
    setObj(newObj);
    addUser(newObj);
    e.target.reset();
  };

  return (
    <>
      <div className="min-h-full w-full flex justify-center">
        <div className="w-[390px] flex flex-col items-center mt-12 gap-y-10">
          <h1 className="font-semibold text-3xl text-center">
            Agregar usuario nuevo
          </h1>
          <div className="w-[350px] h-[350px] rounded-md bg-indigo-600 flex justify-center items-center  [&_label]:text-indigo-200  ">
            <form
              onSubmit={handleUser}
              className=" w-[250px] h-[300px] flex flex-col justify-around  [&_input]:pl-1 [&_input]:rounded-md [&_label]:font-medium"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" placeholder="ej: Carla" />
                <label htmlFor="carrera">Carrera</label>
                <input type="text" name="carrera" placeholder="ej: Médica " />
                <label htmlFor="edad">Edad</label>
                <input type="number" name="edad" placeholder="ej: 28" />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[150px] px-5 py-1 bg-indigo-200 sm:hover:bg-indigo-300 font-medium flex justify-center items-center rounded-lg shadow-sm"
                >
                  Crear usuario
                </button>
              </div>
            </form>
          </div>
          {!!Obj && (
            <div
              className={
                !!Obj
                  ? 'transition-colors duration-2000 text-slate-800'
                  : 'text-white'
              }
            >
              <h3 className="font-semibold text-2xl text-center">
                Nuevo ingreso
              </h3>
              <div className="flex gap-x-2 text-base justify-center mt-3">
                <span>
                  Nombre: <b>{Obj.nombre}</b>
                </span>
                <span>
                  Carrera: <b>{Obj.carrera}</b>
                </span>
                <span>
                  Edad: <b>{Obj.edad}</b>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AddUsers;
