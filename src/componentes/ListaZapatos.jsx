// ListaZapatos.js
import { useState, useEffect } from "react";
import Modal from "./Modal";
import AlertModal from "./AlertModal";

const ListaZapatos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [zapatos, setZapatos] = useState([]);
  const [alerta, setAlerta] = useState(null);

  useEffect(() => {
    const storedZapatos = JSON.parse(localStorage.getItem("zapatos")) || [];
    setZapatos(storedZapatos);
  }, []);

  const mostrarModal = () => {
    setModalAbierto(!modalAbierto);
  };

  const agregarZapatos = (nuevoZapato) => {
    setZapatos((prevZapatos) => [...prevZapatos, nuevoZapato]);
    mostrarAlerta("Zapato agregado correctamente");
  };

  const eliminarZapatos = (index) => {
    const updatedZapatos = [...zapatos];
    updatedZapatos.splice(index, 1);
    setZapatos(updatedZapatos);
    mostrarAlerta("Zapato eliminado correctamente");
  };

  const mostrarAlerta = (mensaje) => {
    setAlerta(mensaje);
    setTimeout(() => {
      setAlerta(null);
    }, 3000);
  };

  useEffect(() => {
    localStorage.setItem("zapatos", JSON.stringify(zapatos));
  }, [zapatos]);

  return (
    <>
      <div className='flex mx-auto justify-center align-middle bg-morado-800 rounded-md p-9 flex-col gap-12'>
        <table className='min-w-full text-morado-300 border-collapse'>
          <thead>
            <tr className='p-6'>
              <th className="px-9 py-2">ID</th>
              <th className="px-9 py-2">Marca</th>
              <th className="px-9 py-2">Modelo</th>
              <th className="px-9 py-2">Talla</th>
              <th className="px-9 py-2">Color</th>
              <th className="px-9 py-2">Cantidad</th>
              <th className="px-9 py-2">Precio</th>
              <th className='w-1/12'></th>
              <th className='w-1/12'></th>
            </tr>
          </thead>
          <tbody>
            {zapatos.map((zapato, index) => (
              <tr key={index} className='bg-morado-700 m-12 rounded-xl border-spacing-y-8'>
                <td className="px-9 py-2">{zapato.id}</td>
                <td className="px-9 py-2">{zapato.marca}</td>
                <td className="px-9 py-2">{zapato.modelo}</td>
                <td className="px-9 py-2">{zapato.talla}</td>
                <td className="px-9 py-2">{zapato.color}</td>
                <td className="px-9 py-2">{zapato.cantidad}</td>
                <td className="px-9 py-2">{zapato.precio}</td>
                <td className="px-9 py-2">
                  <button onClick={() => eliminarZapatos(index)}>Eliminar</button>
                </td>
                <td className="px-9 py-2">X</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={mostrarModal} className='bg-morado-700 rounded-xl px-10'>Agregar</button>
        </div>
      </div>
      <Modal 
        abierto={modalAbierto}
        cerrar={mostrarModal}
        agregarZapatos={agregarZapatos}
      />

      {alerta && <AlertModal message={alerta} onClose={() => setAlerta(null)} />}
    </>
  );
}

export default ListaZapatos;
