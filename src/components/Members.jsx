
function Members(){
    const miembros = [
  { referencia: "./public/images/womenTeam1.png", color: "#fcd759", nombre: "Lily Gomez", rol: "Founder" },
  { referencia: "./public/images/menTeam1.png", color: "#00715d", nombre: "Dm Lincoln", rol: "Co-Founder" },
  { referencia: "./public/images/womenTeam2.png", color: "#fcd759", nombre: "Serena Mei", rol: "Manager" },
  { referencia: "./public/images/menTeam2.png", color: "#00715d", nombre: "Abdul Latif", rol: "Supervisor" },
];
    return (
    <>
    <div className="flex gap-10 w-full">
      {miembros.map((miembro, index) => (
        <div key={index} className="flex flex-wrap items-center justify-center w-[25%] cursor-pointer">
          <div
            className="w-55 h-55 rounded-full relative mx-auto mt-20 hover:-translate-y-3 duration-300"
            style={{ backgroundColor: miembro.color }}
          >
            <img
              className="object-top w-full h-80 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-25 object-cover"
              src={miembro.referencia}
              alt={miembro.nombre}
            />
          </div>

          <div>
            <h2 className="font-bold text-xl">{miembro.nombre}</h2>
            <p className="text-sm text-center text-[#4a4a4a]">{miembro.rol}</p>
          </div>
        </div>
      ))}
    </div>
         

    </>
  );
};

export default Members;