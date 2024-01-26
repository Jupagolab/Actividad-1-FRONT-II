//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <header className='justify-center bg-morado-500 p-6 w-full h-28'>
        <a href='/' className="logo bg-morado-700 rounded-xl h-9/12 py-2.5 px-5">
          <h1>Zapateria La 0800</h1>
        </a>
      </header>
      <main className='mx-auto justify-center align-middle bg-morado-900 h-full p-14'>
        <div>
          <h2 className='text-morado-300 my-6'>¡Bienvenido a La 0800!</h2>

          {/*         ACCESOS DIRECTOS        */}
          <div className='bg-morado-700 rounded-md grid grid-cols-2 p-14'>
            <div className='flex m-auto align-middle justify-center'>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className='grid grid-cols-1 gap-7'>
              <div className='flex align-middle bg-morado-600 rounded-lg px-7 py-3 gap-3 cursor-pointer'>
                <img src="/vite.svg" alt="icono"/>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, velit.
                </p>
              </div>
              <div className='flex align-middle bg-morado-600 rounded-lg px-7 py-3 gap-3 cursor-pointer'>
                <img src="/vite.svg" alt="icono"/>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, enim?
                </p>
              </div>
              <div className='flex align-middle bg-morado-600 rounded-lg px-7 py-3 gap-3 cursor-pointer'>
                <img src="/vite.svg" alt="icono"/>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, perspiciatis.
                </p>
              </div>
            </div>
          </div>


        </div>
        { /*               LISTA DE ZAPATOS               */ }
        <div>
          <h2 className='text-morado-300 my-6'>Lista de Zapatos</h2>
          <div className='flex mx-auto justify-center align-middle bg-morado-800 rounded-md p-9 flex-col gap-12'>
            <table className='min-w-full text-morado-300'>
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
              <tbody className='bg-morado-700 m-12 rounded-xl'>
                <tr>
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
              </tbody>
            </table>
            <div>
              <button className='bg-morado-700 rounded-xl px-10'>Agregar</button>
            </div>
          </div>
        </div>

      </main>
      <footer className='flex justify-center align-middle p-6 bg-morado-500'>
        <div className='grid grid-cols-1 gap-6'>
          <p>Forma Parte de Zapateria La 0800</p>
          <p>la0800@correoFicticio.com</p>
          <div className='mx-auto flex gap-4'>
            <img src="/vite.svg" alt="icono" />
            <img src="/vite.svg" alt="icono" />
            <img src="/vite.svg" alt="icono" />
          </div>
          <p>&copy; 2023 Todos los derechos reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
