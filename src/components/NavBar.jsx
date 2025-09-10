
function NavBar({referencia}) {

  // Declaramos dos arrays de objetos para la navegación y las redes sociales
  // para poder re utilizar el componente NavBar en diferentes contextos
  const navegacion = [
    {name: "About Us", link: "#about-us"},
    {name: "Campaign", link: "#comunidad"},
    {name: "Contact Us", link: "#donate"},
  ]
  const redes = [
    {name: "Youtube", link: "https://www.youtube.com/"},
    {name: "Instagram", link: "https://www.instagram.com/"},
    {name: "Facebook", link: "https://www.facebook.com/"},
  ]

  // Seleccionamos el array adecuado según el parámetro recibido en 'referencia'
  const etiquetas = referencia === "redes" ? redes : navegacion;

  return(    
            
    <nav className= "flex gap-15 font-bold">        
      <a className="hover:scale-110 duration-300" href={etiquetas[0].link} onClick={referencia === "nav" ? (e) => {
        e.preventDefault();
        document.querySelector(etiquetas[0].link)?.scrollIntoView({ behavior: 'smooth' });
      } : undefined}>{etiquetas[0].name}</a>
      <p className="text-red-800">·</p>
      <a className="hover:scale-110 duration-300" href={etiquetas[1].link} onClick={referencia === "nav" ? (e) => {
        e.preventDefault();
        document.querySelector(etiquetas[1].link)?.scrollIntoView({ behavior: 'smooth' });
      } : undefined}>{etiquetas[1].name}</a>
      <p className="text-red-800">·</p>
      <a className="hover:scale-110 duration-300" href={etiquetas[2].link} onClick={referencia === "nav" ? (e) => {
        e.preventDefault();
        document.querySelector(etiquetas[2].link)?.scrollIntoView({ behavior: 'smooth' });
      } : undefined}>{etiquetas[2].name}</a>    
    </nav>

  )
}


export default NavBar;