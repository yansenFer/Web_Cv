/* eslint-disable @next/next/no-img-element */
import { Home3, ProfileCircle, Bag2, Message } from "iconsax-react"
import { useCallback, useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Opening from "@/components/Opening"
import IsiHome from "@/components/IsiHome"
import IsiProfile from "@/components/IsiProfile"
// @ts-ignore
const foo = dynamic(import("tw-elements"), { ssr: false })
import "animate.css"
import { IsiProject } from "@/components/IsiProject"
import { IsiMessage } from "@/components/IsiMessage"
import type { Container, Engine } from "tsparticles-engine"
import Particles from "react-particles"
import { loadFull } from "tsparticles"

export default function Home() {
  const [isHome, setIsHome] = useState<string>("home")
  const [homePage, setHomePage] = useState(true)
  const [profilePage, setProfilePage] = useState(false)
  const [projectPage, setProjectPage] = useState(false)
  const [aboutPage, setAboutPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleChangePage = (menu: string) => {
    setTimeout(() => {
      setIsHome(menu)
    }, 0)
  }

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container)
    },
    []
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      switch (isHome) {
        case "home":
          setHomePage(true)
          setProfilePage(false)
          setProjectPage(false)
          setAboutPage(false)
          break
        case "profile":
          setHomePage(false)
          setProfilePage(true)
          setProjectPage(false)
          setAboutPage(false)
          break
        case "projects":
          setHomePage(false)
          setProfilePage(false)
          setProjectPage(true)
          setAboutPage(false)
          break
        case "message":
          setHomePage(false)
          setProfilePage(false)
          setProjectPage(false)
          setAboutPage(true)
          break
      }
    }, 600)
    return () => {
      clearTimeout(timeout)
    }
  }, [isHome])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1500)
    return () => {
      clearTimeout(timeout)
    }
  })

  return isLoading ? (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: "#4592AF",
        },
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#0A2647",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100,
            },
          },
          opacity: {
            value: 1,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 4,
              size_min: 0.3,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: "#0A2647",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "bubble",
            },
            onclick: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 250,
              size: 0,
              duration: 2,
              opacity: 0,
              speed: 3,
            },
            repulse: {
              distance: 400,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      }}
    />
  ) : (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: "#4592AF",
          },
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#0A2647",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 1,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#0A2647",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "bubble",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3,
              },
              repulse: {
                distance: 400,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div className="flex w-screen h-screen justify-center items-center">
        <div className="flex flex-row z-[1050] w-full h-[90%] justify-center gap-5">
          {/* menu untuk profile */}
          <div className="bg-[#205295] items-center justify-center rounded-full xl:w-[3%] xl:h-[30%] lg:w-[3%] lg:h-[25%] md:w-[3%] md:h-[20%] sm:w-[3%] sm:h-[15%] w-[3%] h-[20%] flex flex-col gap-5">
            <button
              data-te-toggle="tooltip"
              title="Home"
              className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              onClick={() => handleChangePage("home")}
            >
              <Home3
                className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                color="white"
              />
            </button>
            <button
              data-te-toggle="tooltip"
              title="Profile"
              className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              onClick={() => handleChangePage("profile")}
            >
              <ProfileCircle
                className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                color="white"
              />
            </button>
            <button
              data-te-toggle="tooltip"
              title="Projects"
              className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              onClick={() => handleChangePage("projects")}
            >
              <Bag2
                className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                color="white"
              />
            </button>
            <button
              data-te-toggle="tooltip"
              title="Contact"
              className="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              onClick={() => handleChangePage("message")}
            >
              <Message
                className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                color="white"
              />
            </button>
          </div>
          {/* isi profile */}
          <div className="bg-[#144272] self-center gap-1 flex items-center flex-col w-[60%] h-full rounded-[40px]">
            <Opening />
            {/* section isi cv */}
            {/* Home section */}
            {homePage && <IsiHome isAnimated={isHome === "home"} />}
            {profilePage && <IsiProfile isAnimated={isHome === "profile"} />}
            {projectPage && <IsiProject isAnimated={isHome === "projects"} />}
            {aboutPage && <IsiMessage isAnimated={isHome === "message"} />}
          </div>
        </div>
      </div>
    </>
  )
}
