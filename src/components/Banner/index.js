export default function Banner({imagem}) {
    return ( 
        <div 
            className="w-100 h-24 bg-cover bg-no-repeat" 
            style={{ backgroundImage: `url(../../../images/banner-${imagem}.png)`}}
        ></div>
     );
}
