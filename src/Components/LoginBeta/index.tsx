import React from "react";
import { useState } from "react";
import "./index.css";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";

function LoginBetaComponent() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div id="todo">
        <div id="img-fondo"></div>

        <div id="login">
          <div id="titulo">
            <p>
              <h1>
                ¡Bienvenidos a <br />
                hogares <span className="fondo">inteligentes!</span>
              </h1>
            </p>
          </div>
          <p className="ingresa-cuenta-texto">ingresa tu cuenta :</p>
          <div>
            <div id="input-correo">
              <Box width={500}>
                <TextField label="Email o celular" fullWidth />
              </Box>

              <Box width={500}>
                <TextField
                  className="top"
                  label="contraseña"
                  fullWidth
                  type="password"
                />
              </Box>
              <Box width={300}>
                <Button id="boton-enviar" fullWidth variant="contained">
                  Iniciar sesion
                </Button>
              </Box>

              <Box width={300}>
                <Button id="boton-iniciar-google" fullWidth variant="outlined">
                  iniciar sesion con google
                </Button>
              </Box>

              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <p className="pregunta">
                <a href="#">
                  ¿ aun no tienes un hogar inteligente ?{" "}
                  <div>
                    <a>quiero registrarme</a>
                  </div>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginBetaComponent;
