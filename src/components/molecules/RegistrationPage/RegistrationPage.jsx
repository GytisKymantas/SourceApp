import React, { useState } from "react";
import { StartingPageLayout } from "components/layouts/StartingPageLayout/StartingPageLayout";
import { Input } from "components/atoms/Input/Input";

import "./registration-page.scss";

export const RegistrationPage = () => {
  const [firstName, setFirstName] = useState("");
  const [isFirstNameFilled, setIsFirstNameFilled] = useState(true);
  const [lastName, setLastName] = useState("");
  const [isLastNameFilled, setIsLastNameFilled] = useState(true);
  const [email, setEmail] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordFilled, setIsPasswordFilled] = useState(true);
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [isPasswordRepeatFilled, setIsPasswordRepeatFilled] = useState(true);
  const [doPasswordsMatch, setDoPasswordsMatch] = useState(false);
  const [showPasswordAlert, setShowPasswordAlert] = useState(false);
  const [warningInput, setWarningInput] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    markRequiredFields();

    setDoPasswordsMatch(false);

    const passwordsMatch = checkPasswordsMatch();
    const canSubmit = isAllInputsFilled();

    // console.log("passwordsMatch", passwordsMatch);
    // console.log("canSubmit", canSubmit);

    if (passwordsMatch && canSubmit) {
      saveToSessionStorage();
      // console.log("Saved");
      resetInputFields();
    } else {
      // console.log("Not saved");
    }
  };

  const isAllInputsFilled = () => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      email !== "" &&
      password !== "" &&
      passwordRepeat !== ""
    ) {
      return true;
    }
    return false;
  };

  const saveToSessionStorage = () => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
  };

  const markRequiredFields = () => {
    if (firstName.trim() === "") {
      setIsFirstNameFilled(false);
    }

    if (lastName.trim() === "") {
      setIsLastNameFilled(false);
    }

    if (email.trim() === "") {
      setIsEmailFilled(false);
    }

    if (password.trim() === "") {
      setIsPasswordFilled(false);
    }

    if (passwordRepeat.trim() === "") {
      setIsPasswordRepeatFilled(false);
    }
  };

  const checkPasswordsMatch = () => {
    if (
      password === passwordRepeat &&
      password !== "" &&
      passwordRepeat !== ""
    ) {
      setDoPasswordsMatch(true);
      setWarningInput(false);
      setShowPasswordAlert(false);
      return true;
    } else {
      setDoPasswordsMatch(false);
      setWarningInput(true);
      setShowPasswordAlert(true);
      return false;
    }
  };

  const resetInputFields = () => {
    setFirstName("");
    setIsFirstNameFilled(true);
    setLastName("");
    setIsLastNameFilled(true);
    setEmail("");
    setIsEmailFilled(true);
    setPassword("");
    setIsPasswordFilled(true);
    setPasswordRepeat("");
    setIsPasswordRepeatFilled(true);
    setDoPasswordsMatch(false);
    setShowPasswordAlert(false);
    setWarningInput(false);
  };

  // const handleGetData = () => {
  //   const emailFromSessionStorage = sessionStorage.getItem("email");
  //   const passwordFromSessionStorage = sessionStorage.getItem("password");

  //   const data = {
  //     email: emailFromSessionStorage,
  //     password: passwordFromSessionStorage,
  //   };

  //   console.log(data);
  // };

  // FIRST NAME
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleFirstNameBlur = () => {
    if (firstName.trim() === "") {
      setIsFirstNameFilled(false);
    } else {
      setIsFirstNameFilled(true);
    }
  };

  const handleFirstNameFocus = () => {
    setIsFirstNameFilled(true);
  };

  // LAST NAME
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleLastNameBlur = () => {
    if (lastName.trim() === "") {
      setIsLastNameFilled(false);
    } else {
      setIsLastNameFilled(true);
    }
  };

  const handleLastNameFocus = () => {
    setIsLastNameFilled(true);
  };

  // EMAIL
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setIsEmailFilled(false);
    } else {
      setIsEmailFilled(true);
    }
  };

  const handleEmailFocus = () => {
    setIsEmailFilled(true);
  };

  // PASSWORD
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowPasswordAlert(false);
    setWarningInput(false);
  };

  const handlePasswordBlur = () => {
    if (password.trim() === "") {
      setIsPasswordFilled(false);
    } else {
      setIsPasswordFilled(true);
    }
  };

  const handlePasswordFocus = () => {
    setIsPasswordFilled(true);
  };

  // PASSWORD REPEAT
  const handlePasswordRepeatChange = (e) => {
    setPasswordRepeat(e.target.value);
    setShowPasswordAlert(false);
    setWarningInput(false);
  };

  const handlePasswordRepeatBlur = () => {
    if (passwordRepeat.trim() === "") {
      setIsPasswordRepeatFilled(false);
    } else {
      setIsPasswordRepeatFilled(true);
    }
  };

  const handlePasswordRepeatFocus = () => {
    setIsPasswordRepeatFilled(true);
  };

  return (
    <div>
      <StartingPageLayout>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-container__fname-lname">
              <div className="form-container__fname">
                <Input
                  name="fName"
                  labelText="First name"
                  placeholder="First name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  onBlur={handleFirstNameBlur}
                  onFocus={handleFirstNameFocus}
                  isFilled={isFirstNameFilled}
                />
              </div>
              <div className="form-container__lname">
                <Input
                  name="lName"
                  labelText="Last name"
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  onBlur={handleLastNameBlur}
                  onFocus={handleLastNameFocus}
                  isFilled={isLastNameFilled}
                />
              </div>
            </div>
            <div className="form-container__email">
              <Input
                type="email"
                name="email"
                labelText="Email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                onFocus={handleEmailFocus}
                isFilled={isEmailFilled}
              />
            </div>
            <div className="form-container__passwords">
              <div className="form-container__password">
                <Input
                  type="password"
                  name="password"
                  labelText="Password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={handlePasswordBlur}
                  onFocus={handlePasswordFocus}
                  isFilled={isPasswordFilled}
                  isPasswordField={true}
                  passwordsMatch={doPasswordsMatch}
                  warningInput={warningInput}
                />
              </div>
              <div className="form-container__password-repeat">
                <Input
                  type="password"
                  name="passwordRepeat"
                  labelText="Repeat password"
                  placeholder="Repeat password"
                  value={passwordRepeat}
                  onChange={handlePasswordRepeatChange}
                  onBlur={handlePasswordRepeatBlur}
                  onFocus={handlePasswordRepeatFocus}
                  isFilled={isPasswordRepeatFilled}
                  isPasswordField={true}
                  passwordsMatch={doPasswordsMatch}
                  showPasswordAlert={showPasswordAlert}
                  warningInput={warningInput}
                />
              </div>
            </div>
            <div className="form-container__actions">
              <button type="submit" className="form-container__actions-button">
                Submit
              </button>
              <p className="form-container__actions-text">
                Already have an account?{" "}
                <a className="form-container__actions-text-link" href="/log-in">
                  Sign in
                </a>
              </p>
            </div>
          </form>
          {/* <button onClick={handleGetData}>Get Data</button> */}
        </div>
      </StartingPageLayout>
    </div>
  );
};
