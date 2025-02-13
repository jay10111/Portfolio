import React from 'react'

function Nav() {
  return (
    <>
     <nav class="bg-black p-5">
        <div class="container mx-auto flex text-center justify-between">
            <a href="#" class="text-white text-xl font-bold text-left">JAYRAJ</a>
            <div class="hidden md:flex space-x-25 ">
                <a href="#" class="text-white hover:text-gray-200">Home</a>
                <a href="#about" class="text-white hover:text-gray-200">About</a>
                <a href="#work" class="text-white hover:text-gray-200">Work</a>
                <a href="#con" class="text-white hover:text-gray-200">Contact Me</a>
       
            </div>
            <button id="menu-btn" class="md:hidden text-white focus:outline-none">
                ☰
            </button>
        </div>
        <div id="mobile-menu" class="hidden md:hidden flex flex-col space-y-2 p-4">
            <a href="#" class="text-white hover:text-gray-200">Home</a>
            <a href="#" class="text-white hover:text-gray-200">About</a>
            <a href="#" class="text-white hover:text-gray-200">Services</a>
            <a href="#" class="text-white hover:text-gray-200">Contact</a>
        </div>
    </nav>
    </>
  )
}

export default Nav