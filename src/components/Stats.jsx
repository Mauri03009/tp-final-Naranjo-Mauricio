function Stats() {
  const stats = [
    { number: "985+", label: "Donation Received", icon: "./public/icons/charity.png" },
    { number: "$10 M", label: "Money Donated", icon: "./public/icons/donation.png" },
    { number: "12+", label: "Active Campaigns", icon: "./public/icons/megaphone.png" },
    { number: "$60 M", label: "Charity in last Year", icon: "./public/icons/peace.png" },
  ]

  return (
    <section className="bg-[#00715d] py-15">
        {/* Manchitas del div de fondo */}
        <div className="absolute inset-x-10 top-[100%] left-[30%] w-16 h-14 bg-[#0b6051] rounded-b-full"></div>
        <div className="absolute inset-x-10 top-[100%] left-[78%] w-16 h-14 bg-[#0b6051] rounded-b-full"></div>
        <div className="absolute inset-x-10 top-[119.5%] left-[5%] w-16 h-14 bg-[#0b6051] rounded-t-full"></div> 
        <div className="absolute inset-x-10 top-[119.5%] left-[53%] w-16 h-14 bg-[#0b6051] rounded-t-full"></div>
        

        {/* Recorremos el array de informacion de stats */}
        <div className="max-w-[85%] mx-auto flex justify-between gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="text-center text-white flex gap-5">
                    <img src={stat.icon} alt={stat.label} className="w-16 h-16 invert"/>
                    <div className="flex flex-col items-center">
                      <p className="text-3xl font-bold mb-2">{stat.number}</p>
                      <p className="text-sm opacity-90">{stat.label}</p>            
                    </div>
                  </div>
              ))}
        </div>
    </section>
    
  )
}

export default Stats
