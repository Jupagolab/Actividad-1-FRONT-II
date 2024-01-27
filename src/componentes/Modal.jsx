const Modal = ({ abierto, cerrar }) => {
  return (
    <>
      {console.log(abierto)}
      <div className={`fixed inset-0 bg-morado-300 bg-opacity-75 ${abierto ? '' : 'hidden'}`}>
        <div className="flex items-center justify-center h-screen">
          <div className='bg-morado-700 rounded-md grid grid-cols-2 grid-rows-4 grid-flow-row p-14 shadow'>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4 className=" ml-2.5">ID</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="number" name="id" id="id" required/>
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4>Marca</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="text" name="marca" id="marca" required/>
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4>Modelo</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="text" name="modelo" id="modelo" required/>
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4>Talla</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="number" name="talla" id="talla" />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4>Color</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="text" name="color" id="color" />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4>Cantidad</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="number" name="cantidad" id="cantidad" />
            </div>
            <div className="flex flex-col text-left p-3 gap-2.5">
              <h4>Precio</h4>
              <input className="bg-morado-700 rounded-sm border-2 border-morado-600 px-2.5 py-1" type="text" name="precio" id="precio" />
            </div>
            <div className="flex flex-col text-center p-3">
              <button>Agregar</button>          
            </div>
            <button onClick={cerrar}>Cerrar</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;