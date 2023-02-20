import { useRouteError } from "react-router-dom";
 
export default function ErrorPage() {
    
    const error = useRouteError()

    return (
        <div className="space-y-8">
            <h2 className="text-center font-extrabold mt-20 text-blue-900 text-6xl"> 
            CRM - Clients
            </h2>
            <p className="text-center">
                There was an Error 
            </p>
            <p className="text-center">
                {error.message}
            </p>
            <p className="text-center">
                Please contact us to inform about it: Email@email.com
            </p>

        </div>
    )
}