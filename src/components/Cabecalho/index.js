import CabecalhoLink from "../../components/CabecalhoLink";

export default function Cabecalho() {
  return (  
    <nav className="border-gray-200 border-b-2 bg-gray-900">
        <div className="max-w-screen-md flex flex-wrap items-center justify-between mx-auto p-4 border-0">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="./images/logo.png" className="h-8 mr-3" alt="Logo do Cine Tag" />
                <span className="hidden self-center text-2xl font-semibold whitespace-nowrap text-white">Cine Tag</span>
            </a>
            <div className="w-auto">
                <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <CabecalhoLink url="./">Home</CabecalhoLink>
                    </li>
                    <li>
                        <CabecalhoLink url="./Favoritos">Favoritos</CabecalhoLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
