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
        <div id='header'>
            <Link className="headerlogo" to={"/"} onClick={handleNavLinkClick}>
                UpDaily
            </Link>

            {/* Hamburger menu */}
            <div className={`hamburger ${isHamburgerOpen ? 'active' : ''}`} onClick={toggleHamburger}>
                <span className="hamburger__bar hamburger__bar--1"></span>
                <span className="hamburger__bar hamburger__bar--2"></span>
                <span className="hamburger__bar hamburger__bar--3"></span>
            </div>

            {/* Navbar */}
            <nav className={`navbar ${isHamburgerOpen ? 'active' : ''}`}>
                <ul className='navbar__list'>
                    <li className={`navbar__item navbar__item-1 navbar__item-1`}>
                        <NavLink to="/contact" className="navbar__link" onClick={handleNavLinkClick}>
                            <span className="navbar__link--first hidden-large">01</span>
                            <span className="navbar__link--second">Home</span>
                        </NavLink>
                    </li>
                    <li className="navbar__item">
                        <NavLink to="/projects/" className="navbar__link" onClick={handleNavLinkClick} >
                            <span className="navbar__link--first hidden-large">02</span>
                            <span className="navbar__link--second">Explore</span>
                        </NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to="/about" className="navbar__link" onClick={handleNavLinkClick} >
                            <span className="navbar__link--first hidden-large">03</span>
                            <span className="navbar__link--second">About</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Header;