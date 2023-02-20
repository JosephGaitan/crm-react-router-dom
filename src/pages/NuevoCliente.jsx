import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { agregarCliente } from "../data/clientes";

export async function action({request}) {
  const formData = await request.formData()
  const datos = Object.fromEntries(formData)

  const error = []
  //validando
  if(Object.values(datos).includes('')){
    error.push('all fields are mandatory')
  }

  /**let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
  if(!regex.test(email)) {
    error.push('The email is not valid')
  }/** */

  // retornar en caso de error
  if(Object.keys(error).length){
    return error
  }

  await agregarCliente(datos)
  return redirect('/')

}



const NuevoCliente = () => {

  const error = useActionData()
console.log(error)
  const navigate = useNavigate()

  return (
    <div className="md:overflow-y-scroll md:max-h-screen">
      <h1 className="text-4xl text-blue-900 font-black">New Client</h1>
      <p className="mt-3">Please complete all the fields to add a new client</p>

      <div className="flex justify-end">
        <button 
        className="bg-blue-800 px-3 rounded-sm cursor-pointer hover:bg-blue-900  text-white py-1 font-bold uppercase mr-5"
        onClick={() => navigate('/')}
        >
          Back
        </button>

        
      </div>

      <div className=" bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mb-20 mt-10">
        
        {error?.length && error.map((error, i)=> 
        <Error key={i}>
          {error}
        </Error>)}

        <Form
          method='post'
        >
          <Formulario />
          
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

export default NuevoCliente;
