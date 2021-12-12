import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StartingPageLayout } from "components/layouts/StartingPageLayout/StartingPageLayout";
import { Input } from "components/atoms/Input/Input";
import { Button } from "components/atoms/Button/Button";

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
  const [redBorder, setRedBorder] = useState(false);
  const [passwordWarningMessage, setPasswordWarningMessage] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    markRequiredFields();

    setDoPasswordsMatch(false);
    setPasswordWarningMessage("");

    const passwordsMatch = checkPasswordsMatch();

    if (!passwordsMatch) {
      return;
    }

    const passwordsMeetsRequirements = checkPasswordRequirements(password);

    if (!passwordsMeetsRequirements) {
      return;
    }

    const canSubmit = isAllInputsFilled();

    if (passwordsMatch && passwordsMeetsRequirements && canSubmit) {
      saveToSessionStorage();
      resetInputFields();
      navigate("../", { replace: true });
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
      setRedBorder(false);
      setShowPasswordAlert(false);
      return true;
    } else {
      setDoPasswordsMatch(false);
      setRedBorder(true);
      setShowPasswordAlert(true);
      return false;
    }
  };

  const checkPasswordRequirements = (pass) => {
    if (pass.length < 6) {
      setPasswordWarningMessage("Must be at least 6 characters long");
      setRedBorder(true);
      return false;
    } else if (pass.search(/\d/) === -1) {
      setPasswordWarningMessage("Must include a number");
      setRedBorder(true);
      return false;
    } else if (pass.search(/[a-z]/) === -1) {
      setPasswordWarningMessage("Must include a lowercase letter");
      setRedBorder(true);
      return false;
    } else if (pass.search(/[A-Z]/) === -1) {
      setPasswordWarningMessage("Must include an uppercase letter");
      setRedBorder(true);
      return false;
    }
    return true;
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
    setRedBorder(false);
    setPasswordWarningMessage("");
  };

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
    setRedBorder(false);
    setPasswordWarningMessage("");
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
    setRedBorder(false);
    setPasswordWarningMessage("");
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
    <div className="registration-page">
      <StartingPageLayout>
        <div className="registration-form-container">
          <form onSubmit={handleSubmit}>
            <div className="registration-form-container__fname-lname">
              <div className="registration-form-container__fname">
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
              <div className="registration-form-container__lname">
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
            <div className="registration-form-container__email">
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
            <div className="registration-form-container__passwords">
              <div className="registration-form-container__password">
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
                  redBorder={redBorder}
                />
              </div>
              <div className="registration-form-container__password-repeat">
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
                  redBorder={redBorder}
                  passwordWarningMessage={passwordWarningMessage}
                />
              </div>
            </div>
            <div className="registration-form-container__actions">
              <Button type="submit" label="register" isLarge={true} />
              <p className="registration-form-container__actions-text">
                Already have an account?&nbsp;
                <a
                  className="registration-form-container__actions-text-link"
                  href="/"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        </div>
      </StartingPageLayout>
    </div>
  );
};
