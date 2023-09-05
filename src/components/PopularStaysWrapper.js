import VideoCardForm from "./VideoCardForm";
import styles from "./PopularStaysWrapper.module.css";
const PopularStaysWrapper = () => {
  return (
    <div className={styles.popularStays}>
      <div className={styles.popularStaysHeader}>
        <b className={styles.popularStays1}>Popular Stays</b>
        <button className={styles.viewAllStaysButton}>
          <div className={styles.viewAllStays}>View all stays</div>
          <img
            className={styles.arrowRightIcon}
            alt=""
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div className={styles.hotelCards}>
        <div className={styles.hotelCard1}>
          <div className={styles.hotelCard}>
            <img
              className={styles.matterhornSuitesImage}
              alt=""
              src="/unsplashrlwe8f8anoc@2x.png"
            />
            <div className={styles.stayDetails}>
              <div className={styles.stayDetailsRows}>
                <div className={styles.entireBungalow}>Entire bungalow</div>
                <b className={styles.matterhornSuites}>Matterhorn Suites</b>
                <div className={styles.night}>$575/night</div>
              </div>
              <VideoCardForm />
            </div>
            <div className={styles.rating}>
              <div className={styles.reviews}>(60 reviews)</div>
              <div className={styles.parent}>
                <div className={styles.div}>4.9</div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <button className={styles.moreDetailsButton}>
              <div className={styles.button}>More details</div>
            </button>
          </div>
        </div>
        <div className={styles.hotelCard1}>
          <div className={styles.hotelCard}>
            <img
              className={styles.matterhornSuitesImage}
              alt=""
              src="/unsplashtsn8bpopveo@2x.png"
            />
            <div className={styles.stayDetails1}>
              <div className={styles.stayDetailsRows}>
                <div className={styles.entireBungalow}>
                  2-Story beachfront suite
                </div>
                <b className={styles.matterhornSuites}>Discovery Shores</b>
                <div className={styles.night}>$360/night</div>
              </div>
              <VideoCardForm />
            </div>
            <div className={styles.rating}>
              <div className={styles.reviews}>(116 reviews)</div>
              <div className={styles.parent}>
                <div className={styles.div}>4.8</div>
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </div>
            </div>
            <button className={styles.moreDetailsButton}>
              <div className={styles.button}>More details</div>
            </button>
          </div>
        </div>
        <div className={styles.hotelCard1}>
          <div className={styles.hotelCard4}>
            <img
              className={styles.matterhornSuitesImage}
              alt=""
              src="/unsplashrlwe8f8anoc1@2x.png"
            />
            <div className={styles.stayDetails2}>
              <div className={styles.stayDetailsRows}>
                <div className={styles.entireBungalow}>Single deluxe hut</div>
                <b className={styles.arcticHut}>{`Arctic Hut `}</b>
                <div className={styles.night}>$420/night</div>
              </div>
              <VideoCardForm />
            </div>
            <div className={styles.rating}>
              <div className={styles.reviews2}>(78 reviews)</div>
              <div className={styles.parent}>
                <div className={styles.div}>4.7</div>
                <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
              </div>
            </div>
            <button className={styles.moreDetailsButton}>
              <div className={styles.button}>More details</div>
            </button>
          </div>
        </div>
        <div className={styles.hotelCard41}>
          <div className={styles.hotelCard5}>
            <img
              className={styles.matterhornSuitesImage}
              alt=""
              src="/unsplashyqrybvxug5q@2x.png"
            />
            <div className={styles.stayDetails}>
              <div className={styles.stayDetailsRows}>
                <div className={styles.entireBungalow}>Deluxe King Room</div>
                <b className={styles.arcticHut}>Lake Louise Inn</b>
                <div className={styles.night}>$244/night</div>
              </div>
              <VideoCardForm />
            </div>
            <div className={styles.rating}>
              <div className={styles.reviews}>(63 reviews)</div>
              <div className={styles.parent}>
                <div className={styles.div}>4.6</div>
                <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
              </div>
            </div>
            <button className={styles.moreDetailsButton}>
              <div className={styles.button}>More details</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mobileViewAllStays}>
        <div className={styles.viewAllStays1}>View all stays</div>
        <img className={styles.arrowRightIcon} alt="" src="/arrowright5.svg" />
      </div>
    </div>
  );
};

export default PopularStaysWrapper;
