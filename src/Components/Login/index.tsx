import React from "react";
import "typeface-roboto";
import { useSelector } from "react-redux";
import LoginFormLayout from "@/Layouts/LoginFormLayout";
import LoginImageLayout from "@/Layouts/LoginImageLayout";
import GeneralLayout from "@/Layouts/GeneralLayout";
import FormTitle from "@/Layouts/LoginForm/FormTitle";
import FullWord from "@/Layouts/LoginForm/FullWord";
import FormLayout from "@/Layouts/LoginForm/FormLayout";
import { Box, Button, TextField } from "@mui/material";
import LoginGmail from "@/Components/LoginGmail";
import { useGetPokemonByNameQuery } from "@/services/pokemon";
import { Link } from "react-router-dom";

interface ILogin {
  posibleProp?: string;
}

const LoginComponent: React.FC<ILogin> = () => {
  const test = useSelector((state) => state);
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

  // console.log(data);
  return (
    <GeneralLayout>
      <LoginImageLayout />
      <LoginFormLayout>
        <FormTitle>
          ¡Bievenidos <FullWord>aca!</FullWord>
        </FormTitle>
        <FormLayout>
          <Box>
            <TextField label="Email o celular" fullWidth />
          </Box>

          <Box>
            <TextField
              className="top"
              label="contraseña"
              fullWidth
              type="password"
            />
          </Box>
          <Box>
            <Link to={"./dashboard"}>
              <Button id="boton-enviar" fullWidth variant="contained">
                Iniciar sesion
              </Button>
            </Link>
          </Box>

          <Box>
            <LoginGmail />
          </Box>
        </FormLayout>
      </LoginFormLayout>
    </GeneralLayout>
  );
};

export default LoginComponent;
