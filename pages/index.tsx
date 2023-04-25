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
  const [hideDiv, setHideDiv] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1441) {
        setHideDiv(true)
      } else {
        setHideDiv(false)
      }
    }
    window.addEventListener("resize", handleResize)

    // Check window width on initial load
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

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
      {!hideDiv ? (
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
            <div className="flex flex-row z-[1050] w-full xl:h-[90%] lg:h-full justify-center gap-5">
              <div
                className={`bg-[#205295] ${
                  hideDiv && "hidden"
                } items-center justify-center rounded-full xl:w-[3%] xl:h-[30%] lg:w-[3%] lg:h-[25%] md:w-[3%] md:h-[20%] sm:w-[3%] sm:h-[15%] w-[3%] h-[20%] flex flex-col gap-5`}
              >
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
              <div className="xl:bg-[#144272] lg:bg-none self-center gap-1 flex items-center flex-col xl:w-[60%] lg:w-full md:w-full sm:w-full w-full h-full rounded-[40px]">
                {!hideDiv && <Opening />}
                {/* section isi cv */}
                {/* Home section */}
                {homePage && <IsiHome isAnimated={isHome === "home"} />}
                {profilePage && (
                  <IsiProfile isAnimated={isHome === "profile"} />
                )}
                {projectPage && (
                  <IsiProject isAnimated={isHome === "projects"} />
                )}
                {aboutPage && <IsiMessage isAnimated={isHome === "message"} />}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex w-screen h-full justify-center items-center bg-[#0A2647]">
          {/* <!-- Sidenav --> */}
          <nav
            id="sidenav-1"
            className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
            data-te-sidenav-init
            data-te-sidenav-hidden="false"
            data-te-sidenav-position="absolute"
          >
            <ul
              onClick={() => handleChangePage("home")}
              className="relative m-0 list-none px-[0.2rem]"
              data-te-sidenav-menu-ref
            >
              <li className="relative">
                <a
                  className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <Home3
                        className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                        color="white"
                      />
                    </svg>
                  </span>
                  <span>Home</span>
                </a>
              </li>
            </ul>
            <ul
              onClick={() => handleChangePage("profile")}
              className="relative m-0 list-none px-[0.2rem]"
              data-te-sidenav-menu-ref
            >
              <li className="relative">
                <a
                  className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <ProfileCircle
                        className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                        color="white"
                      />
                    </svg>
                  </span>
                  <span>Profile</span>
                </a>
              </li>
            </ul>
            <ul
              onClick={() => handleChangePage("projects")}
              className="relative m-0 list-none px-[0.2rem]"
              data-te-sidenav-menu-ref
            >
              <li className="relative">
                <a
                  className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <Bag2
                        className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                        color="white"
                      />
                    </svg>
                  </span>
                  <span>My Projects</span>
                </a>
              </li>
            </ul>
            <ul
              onClick={() => handleChangePage("message")}
              className="relative m-0 list-none px-[0.2rem]"
              data-te-sidenav-menu-ref
            >
              <li className="relative">
                <a
                  className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-gray-600 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 dark:active:bg-white/10"
                  data-te-sidenav-link-ref
                >
                  <span className="mr-4 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:text-gray-400 dark:[&>svg]:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <Message
                        className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3"
                        color="white"
                      />
                    </svg>
                  </span>
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- Sidenav --> */}
          <button
            className="absolute right-0 top-0 z-30 inline-block rounded bg-[#205295] px-3 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            data-te-sidenav-toggle-ref
            data-te-target="#sidenav-1"
            aria-controls="#sidenav-1"
            aria-haspopup="true"
          >
            <span className="block [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>
          {!hideDiv && <Opening />}
          {/* section isi cv */}
          {/* Home section */}
          {homePage && <IsiHome isAnimated={isHome === "home"} />}
          {profilePage && <IsiProfile isAnimated={isHome === "profile"} />}
          {projectPage && <IsiProject isAnimated={isHome === "projects"} />}
          {aboutPage && <IsiMessage isAnimated={isHome === "message"} />}
        </div>
      )}
    </>
  )
}
