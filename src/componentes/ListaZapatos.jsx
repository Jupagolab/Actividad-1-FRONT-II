import { useState } from "react";
import Modal from "./Modal";

const ListaZapatos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);

  const mostrarModal = () => {
    setModalAbierto(!modalAbierto);
  };

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
            <tr className='bg-morado-700 m-12 rounded-xl border-spacing-y-8'>
              <td className="px-9 py-2">1</td>
              <td className="px-9 py-2">Nike</td>
              <td className="px-9 py-2">Jordan</td>
              <td className="px-9 py-2">42</td>
              <td className="px-9 py-2">Azul</td>
              <td className="px-9 py-2">100</td>
              <td className="px-9 py-2">30$</td>
              <td className="px-9 py-2">E</td>
              <td className="px-9 py-2">X</td>
            </tr>
            <tr className='bg-morado-700 m-12 rounded-xl'>
              <td className="px-9 py-2">1</td>
              <td className="px-9 py-2">Nike</td>
              <td className="px-9 py-2">Air Force</td>
              <td className="px-9 py-2">39</td>
              <td className="px-9 py-2">Rojo</td>
              <td className="px-9 py-2">100</td>
              <td className="px-9 py-2">20$</td>
              <td className="px-9 py-2">E</td>
              <td className="px-9 py-2">X</td>
            </tr>
          </tbody>
        </table>
        <div>
          <button onClick={mostrarModal} className='bg-morado-700 rounded-xl px-10'>Agregar</button>
        </div>
      </div>
      <Modal 
        abierto={modalAbierto}
        cerrar={mostrarModal}
      />
    </>
  );
}

export default ListaZapatos;