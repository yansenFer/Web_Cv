/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react"
import backgroundFigure from "../../assets/backgroundFigure.png"

interface booleanProps {
  isAnimated: boolean
}

const IsiProfile = ({ isAnimated }: booleanProps) => {
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
              ? "animate__animated animate__flipInX animate__fast animate__delay-1s"
              : `animate__animated animate__flipOutX animate__fast`
          }  h-max-screen overflow-y-scroll rounded-[40px]`}
        >
          <div className="flex flex-col ml-10 mt-5">
            <div className="flex flex-row gap-2 relative">
              <img
                src={backgroundFigure.src}
                className="w-[4%] left-[110px] z-10 top-3 absolute"
                alt=""
              />
              <span className="font-[700] text-[#57C5B6] text-[30px]">
                About
              </span>
              <span className="font-[700] z-20 text-zinc-200 text-[30px]">
                Me
              </span>
            </div>
            <div className="flex flex-row gap-20">
              <span className="font-[500] w-[50%] text-[16px] text-zinc-200">
                my name is Yanson. I am a graduate of Bunda Mulia University
                majoring in Informatics. Currently, I have experience as a
                Frontend Developer. Some of the programming languages that I
                have mastered include TypeScript, Next.Js, React.JS, and React
                Native. As for CSS, I am proficient in using Tailwind CSS to
                create website user interfaces and Native Base for React Native
                (Mobile) projects.
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-2">
                  <span className="font-[500] text-[16px] text-[#57C5B6]">
                    Date / Place of birth
                  </span>
                  <span className="font-[500] text-[16px] text-zinc-200">
                    01 January 2000 | Jakarta
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-[500] text-[16px] text-[#57C5B6]">
                    Phone
                  </span>
                  <span className="font-[500] text-[16px] text-zinc-200">
                    +62 813-8400-4840
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-[500] text-[16px] text-[#57C5B6]">
                    Email
                  </span>
                  <span className="font-[500] text-[16px] text-zinc-200">
                    Yansenferdinand6@gmail.com
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-[500] text-[16px] text-[#57C5B6]">
                    Address
                  </span>
                  <span className="font-[500] text-[16px] text-zinc-200">
                    Palem Ganda Asri 3
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <span className="font-[500] text-[16px] text-[#57C5B6]">
                    Country
                  </span>
                  <span className="font-[500] text-[16px] text-zinc-200">
                    Indonesia
                  </span>
                </div>
              </div>
            </div>
            <div className="flex mt-10 flex-row relative">
              <img
                src={backgroundFigure.src}
                className="w-[4%] left-[110px] z-10 top-3 absolute"
                alt=""
              />
              <span className="font-[700] text-[#57C5B6] text-[30px]">
                Educa
              </span>
              <span className="font-[700] z-20 text-zinc-200 text-[30px]">
                tion
              </span>
            </div>
            <div className="flex flex-row gap-20">
              <div className="w-[50%]">
                <ol className="border-l border-neutral-300 dark:border-[#57C5B6]">
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[6px] animate-bounce mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                      <p className="text-sm text-zinc-200 font-[600]">
                        2018 - 2022 Universitas Bunda Mulia
                      </p>
                    </div>
                    <div className="mt-2 ml-4 mb-6">
                      <h4 className="mb-1.5 text-xl font-semibold"></h4>
                      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Bachelor of Science Degree in Information Technology
                        <br />
                        Tangerang Selatan
                        <br /> Grade: 3.58
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                      <p className="text-sm text-zinc-200 font-[600]">
                        2015 - 2018 SMK Yadika 4
                      </p>
                    </div>
                    <div className="mt-2 ml-4 mb-6">
                      <h4 className="mb-1.5 text-xl font-semibold"></h4>
                      <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                        Computer and Network Engineering
                        <br />
                        Kota Tangerang
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row  gap-2">
                  <span className="font-[700] text-[#57C5B6] text-[30px]">
                    Coding
                  </span>
                  <span className="font-[700] z-20 text-zinc-200 text-[30px]">
                    Skill
                  </span>
                </div>
                <div className="flex ml-7 items-center">
                  <ol className="dark:border-[#57C5B6]">
                    <li>
                      <div className="flex-start flex items-center">
                        <div className="-ml-[5px] mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                        <p className="text-sm text-zinc-200 font-[600]">
                          TypeScript
                        </p>
                      </div>
                      <div className="flex-start flex items-center pt-3">
                        <div className="-ml-[5px] mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                        <p className="text-sm text-zinc-200 font-[600]">
                          Next.JS
                        </p>
                      </div>
                      <div className="flex-start flex items-center pt-3">
                        <div className="-ml-[5px] mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                        <p className="text-sm text-zinc-200 font-[600]">
                          Tailwind CSS
                        </p>
                      </div>
                      <div className="flex-start flex items-center pt-3">
                        <div className="-ml-[5px] mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                        <p className="text-sm text-zinc-200 font-[600]">
                          React.JS
                        </p>
                      </div>
                      <div className="flex-start flex items-center pt-3">
                        <div className="-ml-[5px] mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                        <p className="text-sm text-zinc-200 font-[600]">
                          React Native
                        </p>
                      </div>
                      <div className="flex-start flex items-center pt-3">
                        <div className="-ml-[5px] mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                        <p className="text-sm text-zinc-200 font-[600]">
                          Native Base CSS
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="flex mt-10 flex-row relative">
              <img
                src={backgroundFigure.src}
                className="w-[4%] left-[110px] z-10 top-3 absolute"
                alt=""
              />
              <span className="font-[700] text-[#57C5B6] text-[30px]">
                Exper
              </span>
              <span className="font-[700] z-20 text-zinc-200 text-[30px]">
                ience
              </span>
            </div>
            <div className="flex flex-row">
              <div className="w-[57%]">
                <ol className="border-l border-neutral-300 dark:border-[#57C5B6]">
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[6px] animate-bounce mr-3 h-[11px] w-[11px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                      <p className="text-sm text-zinc-200 font-[600]">
                        November 2022 - Present
                      </p>
                    </div>
                    <div className="mt-2 ml-4 mb-6">
                      <h4 className="mb-1.5 text-xl font-semibold"></h4>
                      <p className="mb-1 text-zinc-200 font-bold">
                        PT. Kloverkres Solusi Integrasi
                      </p>
                      <p className="mb-1 text-zinc-200 font-normal">
                        FrontEnd Developer
                      </p>
                      <ol className="dark:border-[#57C5B6] ml-4">
                        <li>
                          <div className="flex-start flex items-center">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Implement Design From Figma to Mobile Application
                              and Website
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Creating a Website Dashboard Page based on JSON
                              Data from Backend
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              RestAPI Integration
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Using Responsive Design in Creating User
                              Interfaces for Websites or Applications
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Ensuring the Designed Program Interface is Aligned
                              with the Provided JSON Data Requirements
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                      <p className="text-sm text-zinc-200 font-[600]">
                        November 2019 - November 2022
                      </p>
                    </div>
                    <div className="mt-2 ml-4 mb-6">
                      <h4 className="mb-1.5 text-xl font-semibold"></h4>
                      <p className="mb-1 text-zinc-200 font-bold">
                        PT. Mayora Indah Tbk
                      </p>
                      <p className="mb-1 text-zinc-200 font-normal">
                        GL Accounting
                      </p>
                      <ol className="dark:border-[#57C5B6] ml-4">
                        <li>
                          <div className="flex-start flex items-center">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Create Financial Report
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Checking payment voucher documents
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Recon all account
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              process voucher payment Salary, BPJS, and
                              Jamsostek
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Make a letter of approval for SPT reporting
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Recon pph 21, 23, 4(2)
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Posting Journal
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </li>
                  <li>
                    <div className="flex-start flex items-center pt-3">
                      <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                      <p className="text-sm text-zinc-200 font-[600]">
                        September 2018 - September 2019
                      </p>
                    </div>
                    <div className="mt-2 ml-4 mb-6">
                      <h4 className="mb-1.5 text-xl font-semibold"></h4>
                      <p className="mb-1 text-zinc-200 font-bold">
                        PT. Solusindo Berkat Bersama
                      </p>
                      <p className="mb-1 text-zinc-200 font-normal">
                        Admin Consultant Accounting
                      </p>
                      <ol className="dark:border-[#57C5B6] ml-4">
                        <li>
                          <div className="flex-start flex items-center">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Create a company financial report
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Input data cash, bank, sales, purchase
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Recon (cash, bank, sales, purchase, debit, credit)
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Recon ppn and pph
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Salary recap
                            </p>
                          </div>
                          <div className="flex-start flex items-center pt-3">
                            <div className="-ml-[5px] mr-3 h-[5px] w-[5px] rounded-full bg-[#57C5B6] dark:bg-[#57C5B6]"></div>
                            <p className="text-sm text-zinc-200 font-[600]">
                              Posting journal
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </li>
                </ol>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <div className="bg-[#57C5B6] items-center h-min w-fit rounded-lg px-2 py-1">
                    <span className="font-[600] text-zinc-200 text-[14px]">
                      Communication
                    </span>
                  </div>
                  <div className="bg-[#57C5B6] items-center h-min w-fit rounded-lg px-2 py-1">
                    <span className="font-[600] text-zinc-200 text-[14px]">
                      Team Work
                    </span>
                  </div>
                  <div className="bg-[#57C5B6] items-center h-min  rounded-lg px-2 py-1">
                    <span className="font-[600] text-zinc-200 text-[14px]">
                      Time Management
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="bg-[#57C5B6] items-center h-min w-fit rounded-lg px-2 py-1">
                    <span className="font-[600] text-zinc-200 text-[14px]">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default IsiProfile
