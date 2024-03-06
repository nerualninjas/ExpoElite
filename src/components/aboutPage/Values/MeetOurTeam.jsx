import Image from "next/image";

const MeetOurTeam = () => {
    const teamMembers = [
        {
            name: "Hosneara Popy",
            email: "husnearaa99@gmail.com",
            imageSrc: "https://i.ibb.co/37T8nVg/popyApu.jpg",
        },
        {
            name: "Tahsin Tarannum Chy",
            email: "chytahsin.2210@gmail.com",
            imageSrc: "https://i.ibb.co/QFcpQ5Y/Tashin-Tarannum-Chy-Dpt-CSE.jpg",
        },
        {
            name: "Adnan al-emran ontor",
            email: "adnanalemran@hotmail.com",
            imageSrc: "https://i.ibb.co/mq937CG/Adnan.png",
        },
        {
            name: "Sabrina Rashid",
            email: "sabrina.rashid.sara@gmail.com",
            imageSrc: "https://i.ibb.co/RvJtjZD/429823336-448305350855105-1214185624739971414-n.png",
        },
        {
            name: "Ashek Mahmud Ashik",
            email: "aashekmahmud@gmail.com",
            imageSrc: "https://i.ibb.co/wwHtB0v/a-SHIQ-IMAGE.png",
        },
        {
            name: "Rayhan Al Mim",
            email: "rayhanalmim1@gmail.com",
            imageSrc: "https://i.ibb.co/D82rzvJ/rayhanalmim.webp",
        },

    ];
    return (
        <div>
            <div className=" px-4 py-8 mb-20">
            <div className="  w-24 border border-[#FF385D]  "></div>
      <h2 className="text-4xl pb-16 pt-8 font-semibold  text-[#54595F]">
      Meet Our Team
      </h2>
              
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6  p-5 gap-3 justify-center mx-auto rounded-md">
                    {/* <div className="text-center space-y-1">
                        <Image
                            className="mx-auto rounded-full object-cover h-32 w-32"
                            src="https://i.ibb.co/WpqdFH7/istockphoto-1419898772-170667a.webp"
                            alt="My Image"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-xl font-semibold">John Smith</h2>
                        <p className="font-medium">Founder & CEO</p>
                    </div> */}
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center space-y-1">
                            <Image
                                className="mx-auto rounded-full object-cover h-32 w-32"
                                src={member.imageSrc}
                                alt={`${member.name} Image`}
                                width={300}
                                height={300}
                            />
                            <h2 className="text-lg font-semibold">{member.name}</h2>
                            <p className="text-sm">{member.email}</p>
                        </div>
                    ))}
                   

                   <div>
           
        </div>
                </div>
                
            </div>
        </div>
    );
};

export default MeetOurTeam;