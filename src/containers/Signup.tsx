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

interface IData {
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

interface Props {
  errors: any;
  success: any;
  loading: boolean;
  signupUser: (data: IData) => void;
  history: any;
}

const Signup: React.FC<Props> = ({
  errors,
  success,
  loading,
  signupUser,
  history,
}) => {
  const [serverErrors, setServerErrors] = useState<any>({
    username: [],
    first_name: [],
    last_name: [],
    email: [],
    password: [],
  });
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const signupSchema = Yup.object().shape({
    username: Yup.string()
      .required("You must type your user name")
      .max(150, "User name must be less than 150 characters")
      .matches(
        /^[\w.@+-]+$/,
        "Your username must be contain letters, digits or (@, ., +, -, _) only "
      ),
    first_name: Yup.string()
      .required("You must type your first name")
      .max(150, "First name must be less than 150 characters"),
    last_name: Yup.string()
      .required("You must type your last name")
      .max(150, "Last name must be less than 150 characters"),
    email: Yup.string()
      .required("You must type your email")
      .email("You must type a valid email address")
      .max(254, "Email must be less than 254 characters"),
    password: Yup.string()
      .required("You must type your password")
      .max(128, "Password must be less than 128 characters"),
    confirm_password: Yup.string()
      .required("You must retype your password")
      .oneOf([Yup.ref("password")], "Your passwords must be identical"),
  });

  useEffect(() => {
    // Success
    if (success.signup) history.push("/login");
    // Errors
    if (Object.keys(errors).length) {
      setServerErrors((s: any) => ({ ...s, ...errors }));
      console.log(inputsRef.current)
      inputsRef.current.reverse().map((inp) => inp.focus());
    }
  }, [success, history, errors]);

  const blurHandler = (e: any) => {
    if (e.target.value) e.target.classList.add("active");
    else e.target.classList.remove("active");
  };

  const resetServerErrors = () => {
    setServerErrors({
      username: [],
      first_name: [],
      last_name: [],
      email: [],
      password: [],
    });
  };

  return (
    <div className="Register">
      <Formik
        initialValues={{
          username: "",
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        onSubmit={({ confirm_password, ...data }) => signupUser(data)}
        validationSchema={signupSchema}
      >
        {() => (
          <Form className="Register__form">
            {loading ? (
              <Loading />
            ) : (
              <>
                <img src={Logo} alt="Logo" className="Register__form__logo" />
                <h1 className="Heading">Welcome to Deja vu</h1>
                <div className="Register__form__row">
                  <div className="Register__form__group Register__form__group--row">
                    <Field
                      id="first_name"
                      type="text"
                      name="first_name"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        inputsRef.current[0] = el
                      }
                    />
                    <label htmlFor="first_name">First name</label>
                    <ErrorMessage name="first_name">
                      {(msg) => (
                        <p className="Register__form__group__error">
                          <BsExclamationTriangleFill
                            color="#F7FFAE"
                            size={16}
                          />
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>
                  <div className="Register__form__group Register__form__group--row">
                    <Field
                      id="last_name"
                      type="text"
                      name="last_name"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        inputsRef.current[1] = el
                      }
                    />
                    <label htmlFor="last_name">Last name</label>
                    <ErrorMessage name="last_name">
                      {(msg) => (
                        <p className="Register__form__group__error">
                          <BsExclamationTriangleFill
                            color="#F7FFAE"
                            size={16}
                          />
                          {msg}
                        </p>
                      )}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="Register__form__group">
                  <Field
                    id="username"
                    type="text"
                    name="username"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                    innerRef={(el: HTMLInputElement) =>
                      inputsRef.current[2] = el
                    }
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
                    id="email"
                    type="email"
                    name="email"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                    innerRef={(el: HTMLInputElement) =>
                      inputsRef.current[3] = el
                    }
                  />
                  <label htmlFor="email">Email</label>
                  <ErrorMessage name="email">
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
                    innerRef={(el: HTMLInputElement) =>
                      inputsRef.current[4] = el
                    }
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
                <div className="Register__form__group">
                  <Field
                    id="confirm_password"
                    type="password"
                    name="confirm_password"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                    innerRef={(el: HTMLInputElement) =>
                      inputsRef.current[5] = el
                    }
                  />
                  <label htmlFor="confirm_password">Confirm password</label>
                  <ErrorMessage name="confirm_password">
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
                    Signup
                  </button>
                </div>
                <p className="Register__form__link">
                  Alreay have an account? <Link to="/login">Login</Link>
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
  success: state.user.success,
  loading: state.loading,
  errors: state.user.errors,
});

const mapDispatchToProps = (dispatch: any) => ({
  signupUser: (data: IData) =>
    dispatch({ type: actionTypes.SIGNUP_USER_SAGA, data }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
