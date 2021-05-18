import React, { useState } from "react";
import axios from "axios";
import { Link, Route, useParams, Redirect, useHistory } from "react-router-dom";

function Login() {
  const [User, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const { email, password } = User;

  const handleChange = (email) => (event) => {
    setUser({ ...User, [email]: event.target.value });
  };

  console.log(email, password);

  const Lo = () => {
    axios
      .post("https://api.covidfrontline.net/superadmin/superadminlogin", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);

        sessionStorage.setItem("user", JSON.stringify(res.data));

        history.push("/dashboard");
      });

    // setUser({
    //   isLoggedin : true,
    //   googleID : response.googleId,
    //   name : response.profileObj.name,
    //   email : response.profileObj.email,
    //   accesstoken : response.accessToken,
    //   picture : response.profileObj.imageUrl,
    //   didredirect : true
    // })
  };

  return (
    <div>
      <div className="h-100 w-100 bg-color">
        <div className="login-box">
          <div className="login-logo">
            <span>
              <strong style={{ fontSize: "20px" }}>COVID HELP</strong>
            </span>
          </div>

          <div className="form-group mt-3 mb-0">
            <p>
              If you want to login as Super Admin ?{" "}
              <a href="/superadminlogin">Super Admin Login</a>
            </p>
            <p>
              If you want to login as Admin ?{" "}
              <a href="/adminlogin"> Admin Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
