import { useState } from 'react'
import useAppContext from '../context/appContext';
import { IoClose } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi";
import { menuItems } from './Sidebar';
import ResponsiveSizes from './ResponsiveSizes';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { setModuleActive } = useAppContext()

  const handleShowMenu = (mobile: boolean) => {
    if (mobile) setShowMenu(!showMenu);
  }

  return (
    <nav className="w-auto px-0 h-12 fixed top-0 right-0 left-0 z-10 p-3 mt-0 bg-custom-blue md:invisible lg:h-0">
      <div className="w-full flex justify-end px-6">
        <ResponsiveSizes />
        <div className='flex justify-end py-0 px-2'>
          <div className="ml-4">
            {showMenu ?
              <IoClose size={30} color='#ffff' onClick={() => handleShowMenu(true)} />
              :
              <GiHamburgerMenu size={30} color='#ffff' onClick={() => handleShowMenu(true)} />
            }
          </div>
        </div>
      </div>

      {showMenu &&
        <div className="w-full flex flex-col items-start py-4 px-6 bg-custom-blue-light 1sm:items-end">

          {menuItems.map((data, i) => (
            
              <div 
                className="w-full text-base text-end text-white py-2 hover:text-blue-300"
                onClick={() => [setModuleActive(i), setShowMenu(false)]}
              >
                { data.text }
              </div>
            
          ))}
        </div>
      }
    </nav>
  )
}

export default NavbarMobile