import React, { useEffect } from "react";
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

const Home: React.FC<Props> = ({ token, loading, errors, sliders, getSliders }) => {
  // useEffect(() => {
  //   getSliders();
  // }, [getSliders]);

  return <div>
    <Navbar auth={!!token}/>
  </div>;
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
