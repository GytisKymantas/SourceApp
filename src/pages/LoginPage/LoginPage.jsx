import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import { StartingPageLayout } from "components/layouts/StartingPageLayout/StartingPageLayout";
import { Input } from "components/atoms/Input/Input";
import { Button } from "components/atoms/Button/Button";

import "./login-page.scss";

export const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [isEmailFilled, setIsEmailFilled] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordFilled, setIsPasswordFilled] = useState(true);
  const [doCredentialsMatch, setDoCredentialsMatch] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    markRequiredFields();

    setIsSubmitted(false);
    setDoCredentialsMatch(false);

    const canSubmit = isAllInputsFilled();

    const { emailFromStorage, passwordFromStorage } =
      retrieveFromSessionStorage();

    if (
      canSubmit &&
      email === emailFromStorage &&
      password === passwordFromStorage
    ) {
      setIsLoggedIn(true);
      setIsSubmitted(true);
      setDoCredentialsMatch(true);
      resetInputFields();
      sessionStorage.setItem("loggedIn", "true");
      navigate("../dashboard/", { replace: true });
    }

    if (
      canSubmit &&
      (email !== emailFromStorage || password !== passwordFromStorage)
    ) {
      setIsSubmitted(true);
      setDoCredentialsMatch(false);
      sessionStorage.setItem("loggedIn", "false");
      return;
    }
  };

  const isAllInputsFilled = () => {
    if (email !== "" && password !== "") {
      return true;
    }
    return false;
  };

  const retrieveFromSessionStorage = () => {
    const emailFromStorage = sessionStorage.getItem("email");
    const passwordFromStorage = sessionStorage.getItem("password");

    return { emailFromStorage, passwordFromStorage };
  };

  const markRequiredFields = () => {
    if (email.trim() === "") {
      setIsEmailFilled(false);
    }

    if (password.trim() === "") {
      setIsPasswordFilled(false);
    }
  };

  const resetInputFields = () => {
    setEmail("");
    setIsEmailFilled(true);
    setPassword("");
    setIsPasswordFilled(true);
  };

  // EMAIL
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsSubmitted(false);
  };

  const handleEmailBlur = () => {
    if (email.trim() === "") {
      setIsEmailFilled(false);
    } else {
      setIsEmailFilled(true);
    }
  };

  const handleEmailFocus = () => setIsEmailFilled(true);

  // PASSWORD
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsSubmitted(false);
  };

  const handlePasswordBlur = () => {
    if (password.trim() === "") {
      setIsPasswordFilled(false);
    } else {
      setIsPasswordFilled(true);
    }
  };

  const handlePasswordFocus = () => setIsPasswordFilled(true);

  return (
    <div className="login-page">
      <StartingPageLayout
        title={"Login"}
        subtitle={"Welcome back, please login."}
      >
        <div className="login-form-container">
          <form onSubmit={handleSubmit}>
            <div className="login-form-container__inputs">
              <div className="login-form-container__input">
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
                  doCredentialsMatch={doCredentialsMatch}
                  isSubmitted={isSubmitted}
                />
              </div>
              <div className="login-form-container__input">
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
                  doCredentialsMatch={doCredentialsMatch}
                  isSubmitted={isSubmitted}
                />
              </div>
            </div>
            <div className="login-form-container__actions">
              <Button type="submit" label="login" isLarge={true} />
              <p className="login-form-container__actions-text">
                Don&apos;t have an account?&nbsp;
                <a
                  className="login-form-container__actions-text-link"
                  href="/registration"
                >
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>
      </StartingPageLayout>
    </div>
  );
};

LoginPage.propTypes = {
  setIsLoggedIn: PropTypes.func,
};
