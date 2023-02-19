    function Cliente({cliente}) {

        const {nombre, empresa, telefono, id, email} = cliente

    return (
        <tr className="border-b">
            <td className="p-6 space-y-2">
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>
            <td>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email:</span> {email}</p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Phone:</span> {telefono}</p>
            </td>
            <td className="p-6 flex gap-3">
                <button 
                className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer"
                type="button"
                >
                Edit
                </button> 
                <button 
                className="text-xs text-red-700 hover:text-red-800 cursor-pointer"
                type="button"
                >
                Delete
                </button> 
            </td>
        </tr>
    );
    }

    export default Cliente;
