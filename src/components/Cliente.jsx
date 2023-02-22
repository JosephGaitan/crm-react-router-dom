import { useNavigate, Form, redirect } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";

export async function action({params}) {
    await eliminarCliente(params.clientId)
    return redirect('/')
}

function Cliente({ cliente }) {
  const navigate = useNavigate();

  const { nombre, empresa, telefono, id, email } = cliente;

  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td>
        <p className="text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}
        </p>
        <p className="text-gray-600">
          {" "}
          <span className="text-gray-800 uppercase font-bold">Phone:</span>{" "}
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer"
          type="button"
          onClick={() => navigate(`/clients/${id}/edit`)}
        >
          Edit
        </button>
        <Form
            method='post'
            action={`client/${id}/delete`}
        >
          <button
            className="text-xs text-red-600 hover:text-red-700 cursor-pointer"
            type="submit"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
}

export default Cliente;
