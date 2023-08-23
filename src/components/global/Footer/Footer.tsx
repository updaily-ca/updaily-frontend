import './Footer.scss';

// Graphql
import {useQuery} from "@apollo/client";
import { getFeaturedBusiness } from '../../../graphql/queries';

const Footer = () => {

    // Fetch Featured Business
    const {loading, error, data} = useQuery(getFeaturedBusiness);
    return (
        <div id="c-footer">

            <div className="footer-card footer-card--about">
                <ul className="footer-card__list">
                    <li className="footer_card__list-item">UpDaily helps connect Vancouver residents with local businesses and events!</li>
                </ul>
            </div>

            <section className="footer-card footer-card--updaily">
                <h3 className="footer-card__title">UpDaily</h3>
                <ul className="footer-card__list">
                    <li className="footer_card__list-item">Contact Us</li>
                    <li className="footer_card__list-item">Report a bug</li>
                    <li className="footer_card__list-item">Coming Soon</li>
                    <li className="footer_card__list-item">Log In</li>
                </ul>
            </section>

            <section className="footer-card footer-card--businesses">
                <h3 className="footer-card__title">Newest Businesses</h3>
                {
                    loading ? <p>Loading...</p> : (
                        <ul className="footer-card__list">
                            {
                                data?.businesses?.slice(0,4).map((business: {name: string, _typename: string}, index: number) => {
                                    return <li key={index} className="footer_card__list-item">{business.name}</li>
                                })
                            }
                        </ul>
                    )
                }
            </section>

            <section className="footer-card footer-card--events">
                <h3 className="footer-card__title">Newest Events</h3>
                <ul className="footer-card__list">
                    <li className="footer_card__list-item">Event 1</li>
                    <li className="footer_card__list-item">Event 2</li>
                    <li className="footer_card__list-item">Event 3</li>
                    <li className="footer_card__list-item">Event 4</li>
                </ul>
            </section>
        </div>
    )
}

export default Footer;