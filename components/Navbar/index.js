import React from 'react'
import { Navbar as NavbarFlowbite } from 'flowbite-react';

function Navbar() {
  return (
    <NavbarFlowbite
    
    rounded
  >
    <NavbarFlowbite.Brand
      href="https://flowbite-react.com"
    >
      <img
        alt="Flowbite React Logo"
        className="mr-3 h-6 sm:h-9"
        src="/image/logo.svg"
        width={0}
        height={0}
        sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
      />
    </NavbarFlowbite.Brand>
    <NavbarFlowbite.Toggle />
    <NavbarFlowbite.Collapse>
      <NavbarFlowbite.Link
        active
        href="#"
      >
        <p>
          Home
        </p>
      </NavbarFlowbite.Link>
      <NavbarFlowbite.Link
        href="#"
      >
        <p>
          Project
        </p>
      </NavbarFlowbite.Link>
      <NavbarFlowbite.Link href="#">
        Order
      </NavbarFlowbite.Link>
      <NavbarFlowbite.Link href="#">
        Blog
      </NavbarFlowbite.Link>
    </NavbarFlowbite.Collapse>
  </NavbarFlowbite>
  )
}

export default Navbar
