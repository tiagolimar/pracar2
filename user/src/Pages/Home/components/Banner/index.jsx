import PropTypes from 'prop-types';


import './style.css'

export const Banner = ({ dadosEvento }) => {
    const img = dadosEvento.backgroundImageUrl? dadosEvento.backgroundImageUrl:img_bg
    return (
        <section className="banner position-relative">
            <img src={img} alt="Background image"/>
            <div className="banner-fg position-absolute">
                <div className="banner-info d-flex flex-column align-items-center">
                    <img src={dadosEvento.logoUrl} alt="Event logo" />
                    <h2>{dadosEvento.eventName}</h2>
                    <h3>{dadosEvento.location}</h3>
                    <p>{dadosEvento.status}</p>
                    <p>{dadosEvento.operatingHoursStart} a {dadosEvento.operatingHoursEnd}</p>

                </div>
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

