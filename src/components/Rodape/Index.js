export default function Rodape({children}) {
    return ( 
        <footer className="shadow bg-gray-900">
            <div className="w-full mx-auto max-w-screen-md p-4 flex items-center justify-center">
                <span className="text-md text-gray-200 text-center">
                    {children}
                </span>
            </div>
        </footer>
     );
}
