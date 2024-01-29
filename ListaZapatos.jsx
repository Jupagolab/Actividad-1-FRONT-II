import { useState, useEffect } from "react";
import Modal from "./Modal";
import AlertModal from "./AlertModal";

const ListaZapatos = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [zapatos, setZapatos] = useState([]);
  const [alerta, setAlerta] = useState(null);
  const [zapatoSeleccionado, setZapatoSeleccionado] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const storedZapatos = JSON.parse(localStorage.getItem("zapatos")) || [];
    setZapatos(storedZapatos);
  }, []);

  useEffect(() => {
    // Guardar en localStorage antes de cerrar la página o actualizar
    const handleBeforeUnload = () => {
      localStorage.setItem("zapatos", JSON.stringify(zapatos));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [zapatos]);

  const mostrarModal = () => {
    setModalAbierto(!modalAbierto);
  };

  const agregarZapatos = (nuevoZapato) => {
    if (zapatoSeleccionado) {
      const nuevosZapatos = zapatos.map((zapato) =>
        zapato.id === zapatoSeleccionado.id ? nuevoZapato : zapato
      );
      setZapatos(nuevosZapatos);
      setZapatoSeleccionado(null);
      mostrarAlerta("Zapato Editado Correctamente");
    } else {
      setZapatos((prevZapatos) => [...prevZapatos, nuevoZapato]);
      mostrarAlerta("Zapato Agregado Correctamente");
    }
  };

  const eliminarZapatos = (index) => {
    const updatedZapatos = [...zapatos];
    const deletedZapato = updatedZapatos.splice(index, 1)[0];
    setZapatos(updatedZapatos);
    mostrarAlerta(`Zapato ${deletedZapato.modelo} Eliminado Correctamente`);
  };

  const mostrarAlerta = (mensaje) => {
    setAlerta(mensaje);
    setTimeout(() => {
      setAlerta(null);
    }, 3000); // Cerrar la alerta después de 3 segundos
  };

  // Filtrar los zapatos basados en la búsqueda
  const zapatosFiltrados = zapatos.filter((zapato) =>
    Object.values(zapato).some((valor) =>
      String(valor).toLowerCase().includes(busqueda.toLowerCase())
    )
  );

  return (
    <>
      <div className='flex flex-wrap mx-auto justify-center align-middle bg-morado-800 rounded-md p-9 flex-col gap-12'>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar por modelo, marca, etc."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="p-2 border border-morado-600 rounded-md"
          />
        </div>
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
            {zapatosFiltrados.map((zapato, index) => (
              <tr key={index} className='bg-morado-700 m-12 rounded-xl'>
                <td className="px-9 py-2">{zapato.id}</td>
                <td className="px-9 py-2">{zapato.marca}</td>
                <td className="px-9 py-2 w-auto">{zapato.modelo}</td>
                <td className="px-9 py-2">{zapato.talla}</td>
                <td className="px-9 py-2 w-auto">{zapato.color}</td>
                <td className="px-9 py-2">{zapato.cantidad}</td>
                <td className="px-9 py-2">{zapato.precio}</td>
                <td className="relative px-4 py-2">
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="/pencil.svg"
                    alt="Icono Editar"
                    onClick={() => { setZapatoSeleccionado(zapato); mostrarModal(); }}
                  />
                </td>
                <td className="px-4 py-2">
                  <img
                    className="cursor-pointer w-7 h-7"
                    src="/x.svg"
                    alt="Icono Eliminar"
                    onClick={() => eliminarZapatos(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <button onClick={mostrarModal} className='bg-morado-700 rounded-xl px-10'>
            Agregar
          </button>
        </div>
      </div>
      <Modal
        abierto={modalAbierto}
        cerrar={mostrarModal}
        agregarZapatos={agregarZapatos}
        zapatoSeleccionado={zapatoSeleccionado}
      />

      {alerta && <AlertModal message={alerta} onClose={() => setAlerta(null)} />}
    </>
  );
};

export default ListaZapatos;



