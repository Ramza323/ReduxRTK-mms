import React from "react";
import { SelectedPokemon, setSelectedPokemon } from "@/store/slices/pokemon";
import { useDispatch, useSelector } from "react-redux";

const DashboardComponent = () => {
  const { User }: any = useSelector((state) => state);
  const currentUser = User.user;
  const dispatch = useDispatch();
  const changePokemon = () => {
    dispatch(setSelectedPokemon({ pokemon: "Charizard" } as SelectedPokemon));
  };
  return (
    <div>
      <h2>Bienvenido {currentUser.name}</h2>
      <h2>Email {currentUser.email}</h2>
      <h2>Perfil {currentUser.role}</h2>
      <button onClick={changePokemon}>Cambiar a charizard</button>
    </div>
  );
};

export default DashboardComponent;
