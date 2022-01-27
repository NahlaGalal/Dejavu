import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { actionTypes } from "../actionTypes";
import Navbar from "../components/Navbar";
import { IHome, IStore } from "../storeTypes";

interface Props {
  token: string;
  loading: boolean;
  errors: any;
  sliders: IHome["sliders"];
  aboutSections: IHome["about"];
  getSliders: () => void;
  getAbout: () => void;
}

const Home: React.FC<Props> = ({
  token,
  loading,
  errors,
  sliders,
  getSliders,
  getAbout,
  aboutSections
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    getSliders();
    getAbout();
  }, [getSliders, getAbout]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(activeSlide >= sliders.length - 1 ? 0 : activeSlide + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeSlide, sliders.length]);

  return (
    <div className="Home">
      <header className="Home__header">
        <Navbar auth={!!token} />
        {sliders.map((slider, i) => (
          <div
            className={`Home__header__slide ${
              activeSlide === i ? "active" : ""
            }`}
            key={slider.id}
            style={{ backgroundImage: `url(${slider.background})` }}
            onClick={() => setActiveSlide(i)}
          >
            <h2>{slider.title}</h2>
            {slider.description && <p>{slider.description}</p>}
          </div>
        ))}
      </header>

      <main className="Home__main">
        {aboutSections.map(sec => (
          <section key={sec.title} className="Home__about">
            <img src={sec.image} alt="Illustrated about" className="Home__about__img"/>
            <div className="Home__about__data">
              <h2 className="Home__about__data__title">{sec.title}</h2>
              <p className="Home__about__data__desc">{sec.description}</p>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  token: state.user.token,
  loading: state.loading,
  errors: state.home.errors,
  sliders: state.home.sliders,
  aboutSections: state.home.about
});

const mapDispatchToProps = (dispatch: any) => ({
  getSliders: () => dispatch({ type: actionTypes.GET_SLIDERES_SAGA }),
  getAbout: () => dispatch({ type: actionTypes.GET_ABOUT_SAGA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
