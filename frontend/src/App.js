import React from "react";
import { GoogleLogin } from "react-google-login";
import { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

export default function App() {
  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <div>
              <h1>Welcome to QR Code</h1>
              <p>Electronic "Check-In" and a "Contactless" solution</p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <div>
              {loginData ? (
                <div>Logged in </div>
              ) : (
                <GoogleLogin
                  clientId="46458689518-coahclcrakio8i4j56ldjhjrc7sm4drn.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  style={{ marginTop: "200px" }}
                  isSignIn={true}
                />
              )}
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
