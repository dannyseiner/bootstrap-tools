import React, { useState, useEffect } from "react";
import API from "../../controllers/api";
import Input from "../../components/Input";
import Button from "../../components/Button";
function Login() {
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  return (
    <div className="component-container login-container">
      <h2>Login</h2>

      <Input
        type="email"
        label="Email"
        value={userEmail}
        onChange={setUserEmail}
      />

      <Input
        type="password"
        label="Password"
        value={userPassword}
        onChange={setUserPassword}
      />

      <Button title="Log In" onClick={() => console.log("clicked")} />
    </div>
  );
}

export default Login;
