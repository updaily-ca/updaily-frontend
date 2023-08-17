import './Footer.scss';

const Footer = () => {
    return (
        <div id="c-footer">

            <div className="footer-card">
                <ul className="footer-card__list">
                    <li className="footer_card__list-item">UpDaily helps connect Vancouver residents with local businesses and events!</li>
                </ul>
            </div>

            <section className="footer-card">
                <h3 className="footer-card__title">UpDaily</h3>
                <ul className="footer-card__list">
                    <li className="footer_card__list-item">Contact Us</li>
                    <li className="footer_card__list-item">Report a bug</li>
                    <li className="footer_card__list-item">Coming Soon</li>
                    <li className="footer_card__list-item">Log In</li>
                </ul>
            </section>

            <section className="footer-card">
                <h3 className="footer-card__title">Newest Businesses</h3>
                <ul className="footer-card__list">
                    <li className="footer_card__list-item">Business 1</li>
                    <li className="footer_card__list-item">Business 2</li>
                    <li className="footer_card__list-item">Business 3</li>
                    <li className="footer_card__list-item">Business 4</li>
                </ul>
            </section>

            <section className="footer-card">
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