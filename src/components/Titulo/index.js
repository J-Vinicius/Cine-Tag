export default function Titulo({children}) {
    return ( 
        <div class="py-8 px-4 mx-auto max-w-screen text-center">
            <h2 className="text-xl text-gray-900 font-medium md:text-2xl">{children}</h2>
        </div>
     );
}
