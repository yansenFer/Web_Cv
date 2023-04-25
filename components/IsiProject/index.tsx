/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react"
import backgroundFigure from "../../assets/backgroundFigure.png"
import dashboard_gh from "../../assets/dashboard_gh.png"
import dashboard_event from "../../assets/dashboard_event.png"
import mobile_guehadir from "../../assets/mobile_guehadir.png"
import frontendUMS from "../../assets/frontendUMS.png"

interface booleanProps {
  isAnimated: boolean
}

export const IsiProject = ({ isAnimated }: booleanProps) => {
  return (
    <>
      {/* modal dashboard tms */}
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="dashboardTMS"
        data-te-backdrop="static"
        data-te-keyboard="false"
        aria-labelledby="dashboardTMSLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-gray-900">
            {/* <!--Modal body--> */}
            <div data-te-modal-body-ref className="relative p-4">
              <img
                alt="profile"
                src={dashboard_gh.src}
                className="w-full h-full rounded-lg"
              />
            </div>

            {/* <!--Modal footer--> */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal dashboard gh */}
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="dashboardGH"
        data-te-backdrop="static"
        data-te-keyboard="false"
        aria-labelledby="dashboardGHLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-gray-900">
            {/* <!--Modal body--> */}
            <div data-te-modal-body-ref className="relative p-4">
              <img
                alt="profile"
                src={dashboard_event.src}
                className="w-full h-full rounded-lg"
              />
            </div>

            {/* <!--Modal footer--> */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal tenant mobile */}
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="tenantMobile"
        data-te-backdrop="static"
        data-te-keyboard="false"
        aria-labelledby="tenantMobileLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-gray-900">
            {/* <!--Modal body--> */}
            <div data-te-modal-body-ref className="relative p-4">
              <img
                alt="profile"
                src={mobile_guehadir.src}
                className="w-full h-full rounded-lg"
              />
            </div>

            {/* <!--Modal footer--> */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* modal fullstack */}
      <div
        data-te-modal-init
        className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        id="frontendUMS"
        data-te-backdrop="static"
        data-te-keyboard="false"
        aria-labelledby="frontendUMSLabel"
        aria-hidden="true"
      >
        <div
          data-te-modal-dialog-ref
          className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px] min-[992px]:max-w-[800px] min-[1200px]:max-w-[1140px]"
        >
          <div className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-gray-900">
            {/* <!--Modal body--> */}
            <div data-te-modal-body-ref className="relative p-4">
              <img
                alt="profile"
                src={frontendUMS.src}
                className="w-full h-full rounded-lg"
              />
            </div>

            {/* <!--Modal footer--> */}
            <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
              <button
                type="button"
                className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                data-te-modal-dismiss
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mt-10 h-screen w-full bg-[#0A2647] ${
          isAnimated
            ? "animate__animated animate__bounceInUp animate__fast animate__delay-1s"
            : `animate__animated animate__bounceOutDown animate__fast`
        }  h-max-screen overflow-y-scroll rounded-[40px]`}
      >
        <div className="flex flex-col ml-10 mt-5">
          <div className="flex flex-row gap-2 relative">
            <img
              src={backgroundFigure.src}
              className="w-[4%] left-[110px] z-10 top-3 absolute"
              alt=""
            />
            <span className="font-[700] text-[#57C5B6] text-[30px]">My</span>
            <span className="font-[700] z-20 text-zinc-200 text-[30px]">
              Projects
            </span>
          </div>
          {/* isi project */}
          <div className="mt-2 grid xl:grid-cols-3 gap-5 mr-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900">
              <button
                data-te-toggle="modal"
                data-te-target="#dashboardTMS"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt="profile"
                  src={dashboard_gh.src}
                  className="w-full h-[180px] rounded-lg"
                />
              </button>
              <div className="px-6 pt-2 pb-6">
                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  <text className="font-[700]">
                    Dashboard Ticket Management System
                  </text>
                </h5>
                <div className="border-2 mt-2 w-[53%] border-[#2C74B3] p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                  Frontend Developer
                </div>
                <div className="flex flex-row flex-wrap space-x-2">
                  <div className="mt-2 bg-red-600 basis-1/5 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Next.Js
                  </div>
                  <div className="mt-2 bg-green-600 basis-1/5 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Typescript
                  </div>
                  <div className="mt-2 bg-blue-600 basis-1/1 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Tailwind Css
                  </div>
                </div>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900">
              <button
                data-te-toggle="modal"
                data-te-target="#dashboardGH"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt="profile"
                  src={dashboard_event.src}
                  className="w-full h-[180px] rounded-lg"
                />
              </button>
              <div className="px-6 pt-2 pb-6">
                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  <text className="font-[700]">
                    Dashboard Event For Web Guehadir
                  </text>
                </h5>
                <div className="border-2 mt-2 w-[53%] border-[#2C74B3] p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                  Frontend Developer
                </div>
                <div className="flex flex-row flex-wrap space-x-2">
                  <div className="mt-2 bg-red-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    React.Js
                  </div>
                  <div className="mt-2 bg-green-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Typescript
                  </div>
                  <div className="mt-2 bg-blue-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Chackra UI
                  </div>
                </div>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900">
              <button
                data-te-toggle="modal"
                data-te-target="#tenantMobile"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt="profile"
                  src={mobile_guehadir.src}
                  className="w-full h-[180px] rounded-lg object-cover"
                />
              </button>
              <div className="px-6 pt-2 pb-6">
                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  <text className="font-[700]">
                    Mobile App Guehadir For Book Booth
                  </text>
                </h5>
                <div className="border-2 mt-2 w-[53%] border-[#2C74B3] p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                  Frontend Developer
                </div>
                <div className="flex flex-row space-x-2 flex-wrap">
                  <div className="mt-2 bg-red-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    React Native
                  </div>
                  <div className="mt-2 bg-green-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Typescript
                  </div>
                </div>
                <div className="flex flex-row space-x-2">
                  <div className="mt-2 bg-blue-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Native Base
                  </div>
                </div>
              </div>
            </div>
            <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900">
              <button
                data-te-toggle="modal"
                data-te-target="#frontendUMS"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                <img
                  alt="profile"
                  src={frontendUMS.src}
                  className="w-full h-[180px] rounded-lg object-cover"
                />
              </button>
              <div className="px-6 pt-2 pb-6">
                <h5 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  <text className="font-[700]">
                    Mobile App Master Data & Penjualan (learn)
                  </text>
                </h5>
                <div className="border-2 mt-2 w-[55%] border-[#2C74B3] p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                  FullStack Developer
                </div>
                <div className="flex flex-row space-x-2 flex-wrap">
                  <div className="mt-2 bg-red-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    React Native
                  </div>
                  <div className="mt-2 bg-green-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Typescript
                  </div>
                  <div className="mt-2 bg-gray-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Laravel
                  </div>
                  <div className="mt-2 bg-yellow-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    MySql
                  </div>
                  <div className="mt-2 bg-blue-600 p-1 px-2 flex items-center rounded-md font-[500] text-zinc-200">
                    Native Base
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={() =>
                  window.open("https://github.com/lnc23?tab=repositories")
                }
                type="button"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="inline-block self-center w-[50%] rounded bg-gray-900 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                See My Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
