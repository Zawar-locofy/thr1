import styles from "./RecentSearchesContainer.module.css";
const RecentSearchesContainer = () => {
  return (
    <div className={styles.upcomingFlightSection}>
      <div className={styles.upcomingFlightSection1}>
        <b className={styles.recentSearches}>Recent Searches</b>
        <div className={styles.flightDetails}>
          <div className={styles.recentSearches1}>
            <div className={styles.flightMainContainer}>
              <div className={styles.toAndFrom}>
                <b className={styles.sin}>SIN</b>
                <img
                  className={styles.flightIcons}
                  alt=""
                  src="/flight-icons.svg"
                />
                <b className={styles.lax}>LAX</b>
              </div>
              <div className={styles.departOn7Container}>
                <b>{`Depart on: `}</b>
                <span>7 Sep 2021</span>
              </div>
            </div>
            <div className={styles.flightMainContainer}>
              <div className={styles.toAndFrom}>
                <b className={styles.sin}>MY</b>
                <img
                  className={styles.flightIcons}
                  alt=""
                  src="/flight-icons1.svg"
                />
                <b className={styles.lax}>DUB</b>
              </div>
              <div className={styles.departOn7Container}>
                <b>Depart on:</b>
                <span> 9 Sep 2021</span>
              </div>
            </div>
          </div>
          <div className={styles.prepareMenu}>
            <div className={styles.recentSearches}>Prepare for your trip</div>
            <div className={styles.tripMenus}>
              <button className={styles.hotel}>
                <img
                  className={styles.hotelIcon}
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div className={styles.hotel1}>Hotel</div>
              </button>
              <button className={styles.hotel}>
                <img
                  className={styles.attractionsIcon}
                  alt=""
                  src="/attractions-icon.svg"
                />
                <div className={styles.attractions1}>Attractions</div>
              </button>
              <button className={styles.hotel}>
                <img className={styles.hotelIcon} alt="" src="/eats-icon.svg" />
                <div className={styles.attractions1}>Eats</div>
              </button>
              <button className={styles.hotel}>
                <img
                  className={styles.attractionsIcon}
                  alt=""
                  src="/commute-icon.svg"
                />
                <div className={styles.attractions1}>Commute</div>
              </button>
              <button className={styles.hotel}>
                <img className={styles.taxiIcon} alt="" src="/taxi-icon.svg" />
                <div className={styles.taxi1}>Taxi</div>
              </button>
              <button className={styles.hotel}>
                <img
                  className={styles.attractionsIcon}
                  alt=""
                  src="/movies-icon.svg"
                />
                <div className={styles.attractions1}>Movies</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
