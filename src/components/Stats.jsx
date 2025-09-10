import CountUp from "react-countup";

function Stats() {

  const stats = [
    { label: "Donations Received", value: 985, suffix: "+", icon: "/icons/charity.png" },
    { label: "Money Donated", value: 10, prefix: "$", suffix: "M", icon: "/icons/donation.png" },
    { label: "Active Campaigns", value: 12, suffix: "+", icon: "/icons/megaphone.png" },
    { label: "Charity in Last Year", value: 60, prefix: "$", suffix: "M", icon: "/icons/peace.png" },
  ];

  return (
    <section className="bg-[url('/images/fondoStats.png')] bg-cover bg-no-repeat bg-center py-15">     

        {/* Recorremos el array de informacion de stats */}
        <div className="max-w-[85%] mx-auto flex justify-between gap-8">
            {stats.map((stat, index) => (
                <div key={index} className="text-center text-white flex gap-5">

                    <img
                      src={stat.icon}
                      alt={stat.label}
                      className="w-16 h-16 invert"
                    />

                    <div className="flex flex-col items-center">
                      <p className="text-3xl font-bold mb-2">
                        <CountUp
                            end={stat.value}
                            duration={3}
                            prefix={stat.prefix}
                            suffix={stat.suffix}
                            enableScrollSpy
                        />
                      </p>
                      <p className="text-sm opacity-90">{stat.label}</p>            
                    </div>

                  </div>
              ))}
        </div>

    </section>
    
  )
}

export default Stats
