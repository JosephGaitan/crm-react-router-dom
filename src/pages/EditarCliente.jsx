import { Form, useNavigate, useLoaderData } from "react-router-dom";
import { obtenerCliente } from "../data/clientes";
import Formulario from "../components/Formulario";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.clientId);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "404, No matching result",
    });
  }
  return cliente;
}

const EditarCliente = () => {
    const navigate = useNavigate()
    const cliente = useLoaderData()
    console.log(cliente)

  return (
    <div className="md:overflow-y-scroll md:max-h-screen">
      <h1 className="text-4xl text-blue-900 font-black">Editing a Client</h1>
      <p className="mt-3 text-2xl text-red-700">Bellow you will modify an existing client's information</p>

      <div className="flex justify-end">
        <button
          className="bg-blue-800 px-3 rounded-sm cursor-pointer hover:bg-blue-900  text-white py-1 font-bold uppercase mr-5"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className=" bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mb-20 mt-10">
        
        {/*error?.length &&error.map((error, i) => <Error key={i}>{error}</Error>)*/}

        <Form method="post">
          <Formulario 
          cliente={cliente}
          />

          <input
            type="submit"
            className="text-lg w-full mt-5 hover:bg-blue-800 cursor-pointer bg-blue-700 p-3 uppercase font-bold text-white rounded-sm"
            value="Register the client"
          />
        </Form>
      </div>
    </div>
  );
};

export default EditarCliente;
