import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#F7F7F8] text-black py-10">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Tools Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Tools</h3>
            <ul className='flex flex-col gap-1'> 
              <li><a href="#" className="text-black hover:text-blue-600">Generate your palettes</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Explore popular palettes</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Extract palette from image</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Contrast checker</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Preview palettes on design</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Recolor your own design</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Color picker</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Browse free fonts</a></li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">More</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href="#" className="text-black hover:text-blue-600">List of colors</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Browse gradient</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Create a gradient</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Make a gradient palette</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Image converter</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Create a collage</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Font Generator</a></li>
            </ul>
          </div>

          {/* Apps Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Apps</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href="#" className="text-black hover:text-blue-600">iOS App</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Android App</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Instagram Page</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Chrome Extension</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Adobe Extension</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className='flex flex-col gap-1'>
              <li><a href="#" className="text-black hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">License</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="text-black hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-gray-600 mt-8">
        <p>&copy; colours by Anubhuti singh & Abhishek Shakya. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
