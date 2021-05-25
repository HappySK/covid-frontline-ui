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
              <Link to="/superadminlogin">
                Click here to login as Super Administrator
              </Link>
            </p>
            <p>
              <Link to="/adminlogin">
                {" "}
                Click here to login as Administrator
              </Link>
            </p>

   <p>
              <Link to="/volunteerlogin">
                {" "}
                Click here to login as Volunteer
              </Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
