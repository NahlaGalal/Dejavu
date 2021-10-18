import React, { useEffect, useRef, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { BsExclamationTriangleFill } from "react-icons/bs";
import ReactTags from "react-tag-autocomplete";
import Loading from "../Loading";

interface Props {
  loading: boolean;
  success: any;
  errors: any;
  history: any;
  onClose: () => void;
}

const CreateGang: React.FC<Props> = ({
  loading,
  success,
  errors,
  history,
  onClose,
}) => {
  const [serverErrors, setServerErrors] = useState<any>({
    name: [],
    description: [],
  });
  const reactTagsRef = useRef<any>();
  const [users, setUsers] = useState<{ id: string | number; name: string }[]>(
    []
  );
  const [allUsers, setAllUsers] = useState<
    { id: string | number; name: string }[]
  >([]);

  const createGangSchema = Yup.object().shape({
    name: Yup.string()
      .required("You must type gang name")
      .max(100, "Gang name must be less than 100 characters"),
    description: Yup.string().required("You must type gang description"),
    users: Yup.array().min(1, "Fwefw"),
  });

  useEffect(() => {
    setAllUsers([
      { id: 1, name: "nahlagalal" },
      { id: 2, name: "elsaeed" },
      { id: 3, name: "string" },
      { id: 4, name: "nahlaahmed" },
    ]);
  }, []);

  useEffect(() => {
    // Success
    if (success.createGang) history.push("/gangs");
    // Errors
    if (JSON.stringify(errors))
      setServerErrors((s: any) => ({ ...s, ...errors }));
  }, [success, history, errors]);

  const blurHandler = (e: any) => {
    if (e.target.value) e.target.classList.add("active");
    else e.target.classList.remove("active");
  };

  const resetServerErrors = () => {
    setServerErrors({
      name: [],
      description: [],
    });
  };

  return (
    <div onClick={onClose} className="Popup">
      <div
        onClick={(e) => e.stopPropagation()}
        className="Popup__container Create_gang"
      >
        <h2 className="Create_gang__header">Create your gang now</h2>
        <Formik
          initialValues={{ name: "", description: "", users: [] }}
          onSubmit={(values) => console.log(values)}
          validationSchema={createGangSchema}
        >
          {({ setFieldValue }) =>
            loading ? (
              <Loading />
            ) : (
              <Form>
                <div className="Register__form__group">
                  <Field
                    id="name"
                    type="text"
                    name="name"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                  />
                  <label htmlFor="name">Name</label>
                  <ErrorMessage name="name">
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
                    id="description"
                    type="text"
                    name="description"
                    onBlur={blurHandler}
                    onInput={resetServerErrors}
                    as="textarea"
                  />
                  <label htmlFor="description">Description</label>
                  <ErrorMessage name="description">
                    {(msg) => (
                      <p className="Register__form__group__error">
                        <BsExclamationTriangleFill color="#F7FFAE" size={16} />
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
                </div>
                {/* Users */}
                <ReactTags
                  ref={reactTagsRef}
                  tags={users}
                  suggestions={allUsers}
                  onDelete={(i) => {
                    const newUsers = [...users];
                    newUsers.splice(i, 1);
                    setFieldValue("users", newUsers);
                    setUsers(newUsers);
                  }}
                  onAddition={(user) => {
                    if (
                      users.find(
                        (u) => u.name === user.name && u.id === user.id
                      )
                    )
                      return;
                    setFieldValue("users", [...users, user]);
                    return setUsers([...users, user]);
                  }}
                  placeholderText="Users, choose at least one user"
                  removeButtonText="Click to remove user"
                  classNames={{
                    searchInput: "Register__form__group__input",
                    root: "",
                    rootFocused: "",
                    search: "Register__form__group",
                    selected:
                      "Register__form__group Register__form__group--selected",
                    selectedTag: "Register__form__group--selected__btn",
                    selectedTagName: "",
                    suggestionActive:
                      "Register__form__group__suggestions__active",
                    suggestionDisabled: "",
                    suggestions: "Register__form__group__suggestions",
                  }}
                />
                {/* Server errors */}
                <div className="Register__form__server-errors">
                  <ErrorMessage name="users">
                    {(msg) => (
                      <p className="Register__form__group__error">
                        <BsExclamationTriangleFill color="#F7FFAE" size={16} />
                        {msg}
                      </p>
                    )}
                  </ErrorMessage>
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
                    Create gang
                  </button>
                </div>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  );
};

export default CreateGang;
