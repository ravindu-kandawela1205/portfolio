import { navItems } from '../../constants/navItems.constant';

function Header() {
  return (
    <header className='header'>
      <div className="container flex items-center justify-between">
        {/* logo */}

        <a href="#" className='text-3xl font-semibold'>Ravindu</a>

        {/* mobile menu */}

        <nav className="lg:hidden absolute top-0 left-0 bg-secondary-clr/70 w-full backdrop-blur-2xl max-h-[500px] mt-20 flex items-center justify-center z-20">
          <ul className='text-center space-y-6 p-7 '>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.href} className='text-lg py-3 relative after:absolute after:bottom-0 after:left-0 after:bg-white after:w-full after:h-0.5'>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* lg menu */}

        <ul className='hidden lg:flex'>
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        {/* menu btn  */}

        <button className="lg:hidden">
            <span></span>
            <span></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
