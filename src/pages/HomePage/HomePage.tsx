import { useDocumentTitle } from "../../utils/functions";


import './HomePage.scss';

import searchIcon from '../../asset/home/search-icon.png';

const HomePage = () => {
    useDocumentTitle("Home Page")

    return (
        <div id="p-home-page">

            <section className="home-hero">
                <h1 className="home-hero__title">We make exploring Vancouver quick and easy!</h1>
                <p className="home-hero__description">Search for restaurants, events or businesses in Vancouver.</p>

                <div className="home-search">
                    <input type="text" className="home-search__input" placeholder="Search...">
                    </input>
                    <img className="home-search__icon" src={searchIcon} />
                </div>
            </section>

        </div>
    )
}

export default HomePage;
