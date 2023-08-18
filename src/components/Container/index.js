export default  function Container({children}) {
    const estilo = "flex justify-center flex-wrap gap-4 md:mb-0 mb-8"
    return ( 
        <section className={estilo}>
            {children}
        </section>
     );
}
