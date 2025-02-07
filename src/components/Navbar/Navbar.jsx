import React from 'react'
import DarkMode from './DarkMode';
import Logo from '../../assets/website/Vector.svg'
import ResponsiveMenu from './ResponsiveMenu';
import {HiMenuAlt3, HiMenuAlt1} from 'react-icons/hi'

export const MenuLinks = [
    {
      id: 1,
      name: "About",
      link: "/#about",
    },
    {
      id: 2,
      name: "Services",
      link: "/#services",
    },
    {
      id: 3,
      name: "Projects",
      link: "/#projects",
    },
  ];

const Navbar = () => {

    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };


  return (
    <>
        <nav className='bg-white dark:bg-gray-900 dark:text-white duration-300'>
            <div className='container py-3 md:py-2'>
                <div className='flex justify-between items-center'>
                    {/* logo section */}
                    <div>
                        <a href="#" className='flex items-center gap-3'>
                            <img src={Logo} alt="logo" className='w-5' />
                            <span className='text-2xl font-semibold sm:text-3xl'>
                                Digital Agency
                            </span>
                        </a>
                    </div>
                    {/* navbar links */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center gap-8'>
                            {MenuLinks.map(({ id, name, link })=>{
                                return (
                                    <li key={id} className='cursor-pointer py-4'>
                                        <a href="link" className='text-lg font-medium hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-all duration-300'>
                                            {name}
                                        </a>
                                    </li>
                                );
                            })}
                            <button className='btn-primary'>Get in Touch</button>
                            <DarkMode />
                        </ul>
                    </div>
                    {/* mobile view section */}
                    <div className='flex items-center gap-4 md:hidden'>
                        <DarkMode />
                        {showMenu ?
                            (<HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer text-2xl'/>):
                            (<HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer text-2xl'/>)
                        }
                    </div>
                </div>
            </div>
            {/* mobile menu section */}
            <ResponsiveMenu showMenu={showMenu}/>
        </nav>
    </>
  )
}

export default Navbar