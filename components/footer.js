import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-center md:p-8 dark:bg-gray-800">
      <div className="max-w-screen-2xl w-full md:flex md:items-center md:justify-between dark:bg-gray-800">
        <span className="text-base text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link href="/" className="hover:underline hover:text-[#695AA6]">
            Hamilton™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              target={"_blank"}
              href="https://hamiltonjr.dev/#about"
              className="mr-4 hover:underline md:mr-6 hover:text-[#695AA6]"
              rel="noreferrer"
            >
              About
            </a>
          </li>
          {/* <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </a>
        </li> */}
          {/* <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Licensing
          </a>
        </li> */}
          <li>
            <a
              target={"_blank"}
              href="https://hamiltonjr.dev/#contact"
              className="hover:underline hover:text-[#695AA6]"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
