import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Logo from "../images/logo2.svg";
import { IStore } from "../storeTypes";
import { actionTypes } from "../actionTypes";
import Loading from "../components/Loading";
import { BsExclamationTriangleFill } from "react-icons/bs";

interface Props {
  token: string;
  loading: boolean;
  errors: any;
  loginUser: (data: { username: string; password: string }) => void;
  history: any;
}

const Login: React.FC<Props> = ({
  token,
  loading,
  errors,
  loginUser,
  history,
}) => {
  const [serverErrors, setServerErrors] = useState<any>({
    username: [],
    password: [],
  });
  const inputNameRef = useRef<HTMLInputElement>();
  const inputPasswordRef = useRef<HTMLInputElement>();

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .required("You must type your user name")
      .max(150, "User name must be less than 150 characters")
      .matches(
        /^[\w.@+-]+$/,
        "Your username must be contain letters, digits or (@, ., +, -, _) only "
      ),
    password: Yup.string()
      .required("You must type your password")
      .max(128, "Password must be less than 128 characters"),
  });

  useEffect(() => {
    // Success
    if (token) history.push("/");
    // Errors
    if (Object.keys(errors).length) {
      setServerErrors((s: any) => ({ ...s, ...errors }));
      inputPasswordRef.current?.focus();
      inputNameRef.current?.focus();
    }
  }, [token, history, errors]);

  const blurHandler = (e: any) => {
    if (e.target.value) e.target.classList.add("active");
    else e.target.classList.remove("active");
  };

  const resetServerErrors = () => {
    setServerErrors({
      username: [],
      password: [],
    });
  };

  return (
    <div className="Register">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(data) => loginUser(data)}
        validationSchema={loginSchema}
      >
        {() => (
          <Form className="Register__form">
            {loading ? (
              <Loading />
            ) : (
              <>
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" className="Register__form__logo" />
                </Link>
                <h1 className="Heading">Welcome to Deja vu</h1>
                <div className="Register__form__group">
                  <Field
                    id="username"
                    type="text"
                    name="username"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                    innerRef={inputNameRef}
                  />
                  <label htmlFor="username">User name</label>
                  <ErrorMessage name="username">
                    {(msg) => (
                      <p className="Register__form__group__error">
                        <BsExclamationTriangleFill color="#F7FFAE" size={16} />
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                <div className="Register__form__group">
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                    innerRef={inputPasswordRef}
                  />
                  <label htmlFor="password">Password</label>
                  <ErrorMessage name="password">
                    {(msg) => (
                      <p className="Register__form__group__error">
                        <BsExclamationTriangleFill color="#F7FFAE" size={16} />
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                {/* Server errors */}
                <div className="Register__form__server-errors">
                  {Object.keys(serverErrors)
                    .filter((key) => serverErrors[key].length)
                    .map((key) => (
                      <p className="Register__form__group__error" key={key}>
                        <BsExclamationTriangleFill color="#F7FFAE" size={16} />
                        {serverErrors[key][0]}
                      </p>
                    ))}
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
              </>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state: IStore) => ({
  token: state.user.token,
  loading: state.loading,
  errors: state.user.errors,
});

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (data: { username: string; password: string }) =>
    dispatch({ type: actionTypes.LOGIN_USER_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
