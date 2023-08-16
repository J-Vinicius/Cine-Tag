import iconeFavoritar from "./favoritar.svg"
import iconeDesfavoritar from "./desfavoritar.svg"

export default function Card({ capa, titulo, duracao, generos}) {
    return ( 
        <>
            <div className="max-w-[280px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="relative">
                    <div>
                        <img className="rounded-t-lg" src={capa} alt={titulo} />
                    </div>
                    <div className="absolute top-0 right-0 w-full">
                        <div className="flex items-center justify-end">
                            <img className="w-10 h-10 mr-4" src="https://observatoriodatv.uol.com.br/wp-content/uploads/2017/06/17796568_1412934622100308_3127437474611447633_n.png" alt="serviço de streaming" />
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900">
                        <div className="m-4 flex items-center justify-between">
                            <img className="w-9 h-9" src="https://logodownload.org/wp-content/uploads/2017/07/classificacao-18-anos-logo-1.png" alt="classificação indicativa" />
                            <img className="w-9 h-9" src={iconeFavoritar} alt="Favoritar" />
                        </div>
                    </div>
                </div>
                <div className="p-5">
                    <div>
                        <h5 className="mb-2 text-md font-bold text-gray-900 dark:text-white">{titulo}</h5>
                    </div>
                    <div className="w-full flex flex-wrap justify-between text-sm">
                        <div className="text-gray-900">{duracao}</div>
                        <ul className="flex items-center justify-start text-gray-900 font-sm">
                            <li>{generos}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
     );
}

