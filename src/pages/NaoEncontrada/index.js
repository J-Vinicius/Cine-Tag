import Titulo from "components/Titulo";

export default function NaoEncontrada() {
    return ( 
        <section className="w-full h-[391px] grid place-items-center">
            <div class="flex items-center w-md max-w-9/12 p-4 rounded-lg shadow text-gray-400 bg-gray-800" role="alert">
                <div class="inline-flex mr-4 items-center justify-center flex-shrink-0 w-14 h-14 rounded-lg bg-orange-700 text-orange-200">
                    <svg class="w-10 h-10" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z"/>
                    </svg>
                </div>
                <div className="-space-y-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Ops!</h5>
                    <p class="font-normal text-gray-400">O conteúdo que você procura não foi encontrado</p>
                </div>
            </div>
        </section>
     );
}
