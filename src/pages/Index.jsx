import { useLoaderData } from "react-router-dom"
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/Clientes";


export function loader() {
  const clientes = obtenerClientes()

  return clientes
}

const Index = () => {

  const clientes = useLoaderData();
  
  return (
    <div className="md:h-screen md:overflow-scroll">
      <h1 className='text-4xl text-blue-900 font-black'>Clients</h1>
      <p className='mt-3'>Manage your clients</p>

      {clientes.length > 0 ? (
        <table className="bg-white shadow w-full mt-5 ">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2"> Client</th>
              <th className="p-2"> Contact info</th>
              <th className="p-2"> Actions</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map( cliente => (
              <Cliente
                cliente={cliente}
                key={cliente.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">There are not any clientes yet</p>
      )}

    </div>
  )
}

export default Index
