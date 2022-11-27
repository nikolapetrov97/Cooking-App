import { Container } from "@mui/material";
import { useEffect } from "react";
import { getRecipiesInfo } from "./actions/recipies.actions";
import "./App.css";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getRecipiesInfo());
  }, [dispatch]);

  return (
    <div className="App">
      <Container maxWidth="lg">
        <Header />
        <Recipes />
      </Container>
    </div>
  );
}

export default App;
