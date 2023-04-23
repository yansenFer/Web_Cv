import { useEffect, useState } from "react"

interface booleanProps {
  isAnimated: boolean
}

export const IsiMessage = ({ isAnimated }: booleanProps) => {
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
              ? "animate__animated animate__rotateInDownLeft animate__fast animate__delay-1s"
              : `animate__animated animate__rotateOutDownLeft animate__fast`
          } h-max-screen overflow-y-scroll rounded-[40px]`}
        >
          <div className="flex flex-col w-full h-full justify-center items-center">
            <span className="font-[600] text-[30px] text-zinc-200">
              Under Maintenance
            </span>
          </div>
        </div>
      )}
    </>
  )
}
