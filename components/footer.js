import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link href="/" className="hover:underline">
          Hamilton™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            target={"_blank"}
            href="https://hamiltonjr.dev/#about"
            className="mr-4 hover:underline md:mr-6 "
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
            className="hover:underline"
            rel="noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer