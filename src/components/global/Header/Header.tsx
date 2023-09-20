import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import { useToggleClass } from '../../../utils/functions';

const Header = () => {
    const [isHamburgerOpen, toggleHamburger] = useToggleClass(false);

    const handleNavLinkClick = () => {
        if (isHamburgerOpen) {
            toggleHamburger();
        }
    };

    return (
        <header className='header'>

            <div className="header__group">
                <Link className="header__logo" to={"/"} onClick={handleNavLinkClick}>
                    UpDaily
                </Link>

                {/* Hamburger menu */}
                <div className={`hamburger ${isHamburgerOpen ? 'active' : ''}`} onClick={toggleHamburger}>
                    <span className="hamburger__bar hamburger__bar--1"></span>
                    <span className="hamburger__bar hamburger__bar--2"></span>
                    <span className="hamburger__bar hamburger__bar--3"></span>
                </div>
            </div>


            {/* Navbar */}
            <nav className={`navbar ${isHamburgerOpen ? 'active' : ''}`}>
                <ul className='navbar__list'>
                    <li className={`navbar__item`}>
                        <NavLink to="/" className="navbar__link" onClick={handleNavLinkClick}>
                            <span className="navbar__link--first hidden-tablet">01</span>
                            <span className="navbar__link--second">Home</span>
                        </NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/explore" className="navbar__link" onClick={handleNavLinkClick} >
                            <span className="navbar__link--first hidden-tablet">02</span>
                            <span className="navbar__link--second">Explore</span>
                        </NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to="/about" className="navbar__link" onClick={handleNavLinkClick} >
                            <span className="navbar__link--first hidden-tablet">03</span>
                            <span className="navbar__link--second">About</span>
                        </NavLink>
                    </li>

                    <li className='navbar__item'>
                        <NavLink to="/register" className="navbar__link navbar__link--register" onClick={handleNavLinkClick} >
                            Register Business
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;