const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Name: </label>
                <input 
                    id="nombre"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Name of the client"
                    name="nombre"
                />
            </div>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Company: </label>
                <input 
                    id="empresa"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Company of the client"
                    name="empresa"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail: </label>
                <input 
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Email of the client"
                    name="email"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Phone: </label>
                <input 
                    id="telefono"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Phone of the client"
                    name="telefono"
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notes: </label>
                <textarea
                    as="textarea"
                    id="notas"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                    placeholder="Notes of the client"
                    name="notas"
                />
            </div>
        </>
    )
}

export default Formulario