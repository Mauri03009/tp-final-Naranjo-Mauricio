
function Prueba(){
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-white from-50% to-yellow-400 to-50%">
        <div className="w-[90%] mx-auto min-h-screen flex">
          <div className="flex-1 bg-white flex items-center justify-center">
                <div className="text-center p-8">
                  <h1 className="text-4xl font-bold text-gray-800 mb-4">Sección Izquierda</h1>
                  <p className="text-lg text-gray-600">Este es el contenido del div blanco a la izquierda</p>
                </div>
            </div>

          <div className="flex-1 bg-yellow-900 flex items-center justify-center">
            <div className="text-center p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Sección Derecha</h1>
              <p className="text-lg text-gray-800">Este es el contenido del div amarillo a la derecha</p>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Prueba;