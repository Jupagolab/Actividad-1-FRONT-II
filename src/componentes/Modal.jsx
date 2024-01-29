import { useState } from "react";

const Modal = ({ abierto, cerrar, agregarZapatos }) => {
  const [nuevoZapato, setNuevoZapato] = useState({
    id: "",
    marca: "",
    modelo: "",
    talla: "",
    color: "",
    cantidad: "",
    precio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoZapato((prevZapato) => ({
      ...prevZapato,
      [name]: value,
    }));
  };

  const handleAgregar = () => {
    agregarZapatos(nuevoZapato);
    // Limpieza de los datos después de agregarlos al localStorage
    setNuevoZapato({
      id: "",
      marca: "",
      modelo: "",
      talla: "",
      color: "",
      cantidad: "",
      precio: "",
    });
    cerrar();
  };

  return (
    <>
      <div className={`fixed inset-0 bg-morado-300 bg-opacity-75 ${abierto ? 'animate-in fade-in duration-300' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen">
          <div className='bg-morado-700 rounded-md grid grid-cols-2 grid-rows-4 grid-flow-row p-14 shadow'>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">ID</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="number"
                name="id"
                id="id"
                value={nuevoZapato.id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">Marca</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="text"
                name="marca"
                id="marca"
                value={nuevoZapato.marca}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">Modelo</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="text"
                name="modelo"
                id="modelo"
                value={nuevoZapato.modelo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">Talla</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="number"
                name="talla"
                id="talla"
                value={nuevoZapato.talla}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">Color</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="text"
                name="color"
                id="color"
                value={nuevoZapato.color}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">Cantidad</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="number"
                name="cantidad"
                id="cantidad"
                value={nuevoZapato.cantidad}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className="ml-2.5">Precio</h4>
              <input
                className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1"
                type="text"
                name="precio"
                id="precio"
                value={nuevoZapato.precio}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center justify-center m-auto text-center p-3">
              <img className="w-1/2 cursor-pointer" src="/check-circle.png" alt="Agregar" onClick={handleAgregar} />
            </div>
            <button onClick={cerrar}>Cerrar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;


