export default  function Container({children}) {
    const estilo = "flex justify-center flex-wrap gap-4"
    return ( 
        <section className={estilo}>
            {children}
        </section>
     );
}
