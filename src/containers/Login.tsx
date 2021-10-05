import React, { useEffect } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo.svg";
import { IStore } from "../storeTypes";
import { actionTypes } from "../actionTypes";
import Loading from "../components/Loading";
import WarningIcon from "../images/warning.svg";

interface Props {
  token: string;
  loading: boolean;
  loginUser: (data: { username: string; password: string }) => void;
  history: any;
}

const Login: React.FC<Props> = ({ token, loading, loginUser, history }) => {
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .required("You must type your user name")
      .max(150, "User name must be less than 150 characters"),
    password: Yup.string()
      .required("You must type your password")
      .max(128, "Password must be less than 128 characters"),
  });

  useEffect(() => {
    if (token) history.push("/");
  }, [token, history]);

  const blurHandler = (e: any) => {
    if(e.target.value) e.target.classList.add("active")
    else e.target.classList.remove("active")
  }

  return (
    <div className="Register">
      {loading ? (
        <Loading />
      ) : (
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(data) => loginUser(data)}
          validationSchema={loginSchema}
        >
          {() => (
            <Form className="Register__form">
              <img src={Logo} alt="Logo" className="Register__form__logo" />
              <h1 className="Heading">Welcome to Deja vu</h1>
              <div className="Register__form__group">
                <Field id="username" type="text" name="username" onBlur={blurHandler} />
                <label htmlFor="username">User name</label>
                <ErrorMessage name="username">
                  {(msg) => (
                    <p className="Register__form__group__error">
                      <img src={WarningIcon} alt="warning icon" />
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>
              <div className="Register__form__group">
                <Field id="password" type="password" name="password" onBlur={blurHandler} />
                <label htmlFor="password">Password</label>
                <ErrorMessage name="password">
                  {(msg) => (
                    <p className="Register__form__group__error">
                      <img src={WarningIcon} alt="warning icon" />
                      {msg}
                    </p>
                  )}
                </ErrorMessage>
              </div>
              <div className="Register__form__submit">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
                <Link to="/forget-password">Forgot your password?</Link>
              </div>

              <p className="Register__form__link">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  token: state.user.token,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (data: { username: string; password: string }) =>
    dispatch({ type: actionTypes.LOGIN_USER_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
