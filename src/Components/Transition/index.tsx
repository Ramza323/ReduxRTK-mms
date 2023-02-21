import React from "react";
import { useGetUserAuthQuery } from "@/services/userAuth";
import { useDispatch, useSelector } from "react-redux";
import { SelectedPokemon, setSelectedPokemon } from "@/store/slices/pokemon";

interface ITransition {
  token: string;
}

const Transition: React.FC<ITransition> = ({ token }) => {
  console.log("entre");
  const { data, error, isLoading } = useGetUserAuthQuery(token);

  const test = useSelector((state) => state);
  const dispatch = useDispatch();
  dispatch(setSelectedPokemon({ pokemon: "Mew" } as SelectedPokemon));

  return data;
};

export default Transition;
