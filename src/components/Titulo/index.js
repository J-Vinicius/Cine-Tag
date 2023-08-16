export default function Titulo({children}) {
    return ( 
        <div class="bg-gray-900 py-8 px-4 mx-auto max-w-screen text-center">
            <h2 className="text-xl text-gray-200 font-medium md:text-2xl">{children}</h2>
        </div>
     );
}
