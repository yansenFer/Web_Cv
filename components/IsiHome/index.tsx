import { useEffect, useState } from "react"

interface booleanProps {
  isAnimated: boolean
}

const IsiHome = ({ isAnimated }: booleanProps) => {
  const [isHidden, setIsHidden] = useState(false)
  useEffect(() => {
    if (!isAnimated) {
      const timeout = setTimeout(() => {
        setIsHidden(true)
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    } else {
      const timeout = setTimeout(() => {
        setIsHidden(false)
      }, 1000)

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [isAnimated])

  return (
    <>
      {isHidden ? null : (
        <div
          className={`mt-10 h-screen w-full bg-[#0A2647] ${
            isAnimated
              ? "animate__animated animate__fadeInUp animate__fast animate__delay-1s"
              : `animate__animated animate__fadeOutUp animate__fast`
          } h-max-screen overflow-y-scroll rounded-[40px]`}
        >
          <div className="flex flex-col w-full h-full justify-center items-center">
            <span className="font-[600] text-[30px] text-zinc-200">
              Yanson Ferdinand Kurniadi
            </span>
            <div className="flex flex-row gap-2 self-center justify-center">
              <span className="font-[600] text-[24px] animate__animated animate__bounce animate__delay-3s text-[#57C5B6]">
                Frontend
              </span>
              <span className="font-[600] text-[24px] animate__animated animate__bounce animate__delay-3s text-zinc-200">
                Developer
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default IsiHome
