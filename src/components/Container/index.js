export default  function Container({children}) {
    return ( 
        <section className="max-w-full md:max-w-[50%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
            {children}
        </section>
     );
}
