import { Link } from "react-router-dom";

export default function CabecalhoLink({children , url}) {
    return ( 
        <Link to={url} className="block py-2 pl-3 pr-4 text-white bg-gray-900 rounded border-0 hover:text-blue-400 md:p-0">
            {children}
        </Link>
     );
}
