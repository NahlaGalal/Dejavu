import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import * as Yup from "yup";
import { BsExclamationTriangleFill } from "react-icons/bs";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";

type Props = {
  loading: boolean;
  errors: any;
  success: any;
  editProfile: (data: any) => void;
  history: any;
  defaultData: {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    avatar: string;
    bio: string;
    cover: string;
  };
};

const EditProfile: React.FC<Props> = ({
  loading,
  // errors,
  // success,
  // editProfile,
  // history,
  defaultData = {
    first_name: "Nahla",
    last_name: "Galal",
    email: "nahlaglal@gmail.com",
    username: "nahlaglla",
    avatar: "https://eibrahim95.pythonanywhere.com//media/images/avatar.png",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper at tellus integer ac gravida. Sed urna sed auctor pellentesque. Eu non sit amet, sed adipiscing cursus rhoncus velit in. Vivamus dolor porttitor sit arcu luctus id. Cursus sollicitudin pulvinar sagittis posuere quam lectus nibh cursus. Amet, pharetra, et, proin aliquet bibendum. Nulla aenean sit in mattis.",
    cover: "https://eibrahim95.pythonanywhere.com//media/images/avatar.png",
  },
}) => {
  const [serverErrors, setServerErrors] = useState<any>({
    username: [],
    first_name: [],
    last_name: [],
    email: [],
    password: [],
  });
  const [avatar, setAvatar] = useState<{ file: File | null; url: string }>({
    file: null,
    url: "",
  });
  const [cover, setCover] = useState<{ file: File | null; url: string }>({
    file: null,
    url: "",
  });
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const editProfileSchema = Yup.object().shape({
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
    bio: Yup.string().required("You must type your bio"),
  });

  const focusHandler = () => {
    inputsRef.current.reverse().map((inp) => inp.focus());
  };

  useEffect(() => {
    focusHandler();
  }, []);

  // useEffect(() => {
  //   // Success
  //   if (success.signup) history.push("/login");
  //   // Errors
  //   if (Object.keys(errors).length) {
  //     setServerErrors((s: any) => ({ ...s, ...errors }));
  //     console.log(inputsRef.current);
  //     inputsRef.current.reverse().map((inp) => inp.focus());
  //   }
  // }, [success, history, errors]);

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

  const changeFileHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: "avatar" | "cover"
  ) => {
    if (e.currentTarget.files) {
      let reader = new FileReader();
      let file = e.currentTarget.files[0];
      reader.onloadend = () => {
        if (name === "avatar") {
          setAvatar({
            file,
            url: reader.result as string,
          });
        } else {
          setCover({
            file,
            url: reader.result as string,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="Edit-profile">
      <Navbar />

      <Formik
        initialValues={{
          username: defaultData.username,
          first_name: defaultData.first_name,
          last_name: defaultData.last_name,
          email: defaultData.email,
          avatar: defaultData.avatar,
          bio: defaultData.bio,
          cover: defaultData.cover,
        }}
        onSubmit={(data) => console.log(data)}
        validationSchema={editProfileSchema}
      >
        {({ setFieldValue }) => (
          <div className="Register Edit-profile__form">
            <Form className="Register__form">
              {loading ? (
                <Loading />
              ) : (
                <>
                  <h1 className="Heading Edit-profile__form__heading">
                    Edit your profile
                  </h1>

                  {/* Avatar */}
                  <div className="Register__form__group Edit-profile__form__avatar">
                    <Field name="avatar">
                      {({ field }: { field: any }) => (
                        <>
                          <span>
                            <img src={avatar.url || field.value} alt="Avatar" />
                          </span>
                          <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            hidden
                            accept="image/*"
                            onChange={(e) => changeFileHandler(e, "avatar")}
                          />
                          <label htmlFor="avatar">+</label>
                        </>
                      )}
                    </Field>
                  </div>

                  {/* First name */}
                  <div className="Register__form__group">
                    <Field
                      id="first_name"
                      type="text"
                      name="first_name"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        (inputsRef.current[0] = el)
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

                  {/* Last name */}
                  <div className="Register__form__group">
                    <Field
                      id="last_name"
                      type="text"
                      name="last_name"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        (inputsRef.current[1] = el)
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

                  {/* User name */}
                  <div className="Register__form__group">
                    <Field
                      id="username"
                      type="text"
                      name="username"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        (inputsRef.current[2] = el)
                      }
                    />
                    <label htmlFor="username">User name</label>
                    <ErrorMessage name="username">
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

                  {/* Email */}
                  <div className="Register__form__group">
                    <Field
                      id="email"
                      type="text"
                      name="email"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        (inputsRef.current[3] = el)
                      }
                    />
                    <label htmlFor="email">Email</label>
                    <ErrorMessage name="email">
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

                  {/* Bio */}
                  <div className="Register__form__group">
                    <Field
                      id="bio"
                      type="text"
                      name="bio"
                      onBlur={blurHandler}
                      onInput={resetServerErrors}
                      innerRef={(el: HTMLInputElement) =>
                        (inputsRef.current[4] = el)
                      }
                      as="textarea"
                    />
                    <label htmlFor="bio">Bio</label>
                    <ErrorMessage name="bio">
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

                  {/* Cover phote */}
                  <div className="Register__form__group Edit-profile__form__cover">
                    <Field name="cover">
                      {({ field }: { field: any }) => (
                        <>
                          <p>Cover photo</p>
                          <div className="Edit-profile__form__cover__img">
                            <span>
                              <img src={cover.url || field.value} alt="Cover" />
                            </span>
                            <input
                              type="file"
                              name="cover"
                              id="cover"
                              hidden
                              accept="image/*"
                              onChange={(e) => changeFileHandler(e, "cover")}
                            />
                            <label htmlFor="cover">Click to change photo</label>
                          </div>
                        </>
                      )}
                    </Field>
                  </div>

                  {/* Server errors */}
                  <div className="Register__form__server-errors">
                    {Object.keys(serverErrors)
                      .filter((key) => serverErrors[key].length)
                      .map((key) => (
                        <p className="Register__form__group__error" key={key}>
                          <BsExclamationTriangleFill
                            color="#F7FFAE"
                            size={16}
                          />
                          {serverErrors[key][0]}
                        </p>
                      ))}
                  </div>

                  {/* Save */}
                  <div className="Register__form__submit Edit-profile__form__submit">
                    <button className="btn btn-primary" type="submit">
                      Save
                    </button>
                  </div>
                </>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default EditProfile;
