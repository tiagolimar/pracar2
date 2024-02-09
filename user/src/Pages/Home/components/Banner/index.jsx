import PropTypes from 'prop-types';

import './style.css'

export const Banner = ({ dadosEvento }) => {
    return (
        <section className="banner">
            <div className="banner-bg-img">
                <img src={dadosEvento.backgroundImageUrl} alt="Background image" />
                <img src={dadosEvento.logoUrl} alt="Event logo" />
                <h2>{dadosEvento.eventName}</h2>
                <h3>{dadosEvento.location}</h3>
                <p>{dadosEvento.status}</p>
                <p>{dadosEvento.operatingHoursStart} a {dadosEvento.operatingHoursEnd}</p>
            </div>
        </section>
    );
};

Banner.propTypes = {
    dadosEvento: PropTypes.shape({
        backgroundImageUrl: PropTypes.string,
        logoUrl: PropTypes.string,
        eventName: PropTypes.string,
        location: PropTypes.string,
        status: PropTypes.string,
        operatingHoursStart: PropTypes.string,
        operatingHoursEnd: PropTypes.string
    }).isRequired,
};

