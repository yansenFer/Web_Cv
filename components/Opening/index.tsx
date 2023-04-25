/* eslint-disable @next/next/no-img-element */
import { Instagram, Facebook, Whatsapp } from "iconsax-react"
import profile from "../../assets/profile.jpg"

const Opening = () => {
  const handleExternallink = (link: string) => {
    window.open(link, "_blank")
  }

  const handleleWhatsappLink = (number: string) => {
    window.open(`https://wa.me/${number}`, "_blank")
  }
  return (
    <>
      <img
        alt="profile"
        src={profile.src}
        className="rounded-full mt-10 w-[130px] h-[130px] object-cover"
      />
      <span className="text-zinc-200 font-[600] text-[25px] font-mono">
        Yanson Ferdinand Kurniadi
      </span>
      <div className="border-2 border-[#2C74B3] p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
        Frontend Developer
      </div>
      <div className="flex flex-row mt-2 gap-4 items-center">
        <button
          onClick={() =>
            handleExternallink("https://www.instagram.com/___yansen/")
          }
        >
          <Instagram size={24} color="white" />
        </button>
        <button
          onClick={() => handleExternallink("https://www.facebook.com/GVIXER/")}
        >
          <Facebook size={24} color="white" />
        </button>
        <button onClick={() => handleleWhatsappLink("+6281384004840")}>
          <Whatsapp size={24} color="white" />
        </button>
      </div>
    </>
  )
}

export default Opening
