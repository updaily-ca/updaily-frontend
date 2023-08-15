import { useDocumentTitle } from "../../utils/functions";
import { useState } from "react";

import './HomePage.scss';

import searchIcon from '../../asset/home/search-icon.png';

const HomePage = () => {
    useDocumentTitle("Home Page")

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [prevSearchTerm, setPrevSearchTerm] = useState<string>('');

    const performSearch = () => {


        if (searchTerm.trim() === '') {
            console.log('Enter a search term');
            return;
        }

        if (searchTerm === prevSearchTerm) {
            console.log('Search something new');
            return;
        }

        if (searchTerm.trim() !== '') {
            console.log(`Searching: ${searchTerm}`);

            setPrevSearchTerm(searchTerm);
        }

        else {
            console.log('Search error');
        }

    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    };

    return (
        <div id="p-home-page">

            <section className="home-hero">
                <h1 className="home-hero__title">We make exploring Vancouver quick and easy!</h1>
                <p className="home-hero__description">Search for restaurants, events or businesses in Vancouver.</p>

                <div className="home-search">
                    <input
                        type="text"
                        className="home-search__input"
                        placeholder=""
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <div className="home-search__btn" onClick={performSearch}>
                        <img className="home-search__btn--icon" src={searchIcon} />
                        <span className="home-search__btn--search">Search</span></div>

                </div>
            </section>

        </div>
    )
}

export default HomePage;
