import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CurrentUser, setCurrentUser } from "@/store/slices/user";

const LoginGmail = () => {
  const [user, setUser]: any = useState([]);
  const [call, setCall]: any = useState(false);
  const [profile, setProfile]: any = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (call) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res: any) => {
          setProfile(res.data);
          dispatch(
            setCurrentUser({
              user: {
                name: res.data.name,
                email: res.data.email,
                role: "USER",
              },
            } as CurrentUser)
          );
          navigate("/dashboard");
        })
        .catch((err: any) => console.log(err));
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      setCall(true);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <div>
      {profile.email}
      <Button
        onClick={() => login()}
        id="boton-iniciar-google"
        fullWidth
        variant="outlined"
      >
        <GoogleIcon sx={{ paddingRight: "10px" }} />
        iniciar sesion con google
      </Button>
    </div>
  );
};

export default LoginGmail;
