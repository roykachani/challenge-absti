function Home() {
  return (
    <>
      <div className="min-h-full w-full flex justify-center ">
        <div className="w-80 flex flex-col items-center mt-12 gap-y-10">
          <h1 className="font-semibold text-3xl text-center">
            Bienvenido al sistema de usuarios
          </h1>
          <div className="p-3 rounded-md border-2 border-slate-700">
            <p className="text-center text-slate-800">
              Ingrese en <b>Usuarios</b> para visualizar la lista o agregue un
              nuevo usuario en <b>Nuevos usuarios</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
