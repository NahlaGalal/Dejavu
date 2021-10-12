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
  getSliders: () => void;
}

const Home: React.FC<Props> = ({
  token,
  loading,
  errors,
  sliders,
  getSliders,
}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  useEffect(() => {
    getSliders();
  }, [getSliders]);

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
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  token: state.user.token,
  loading: state.loading,
  errors: state.home.errors,
  sliders: state.home.sliders,
});

const mapDispatchToProps = (dispatch: any) => ({
  getSliders: () => dispatch({ type: actionTypes.GET_SLIDERES_SAGA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
