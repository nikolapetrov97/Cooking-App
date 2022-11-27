/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../../store";
import CookingCard from "../CookingCard/CookingCard";

const Recipes = () => {
  const recipes = useAppSelector((state) => state.recipesInfo?.recipes);
  const ingredientFilters = useAppSelector((state) => state.recipesInfo?.ingredientFilters);

  const filteredRecipes = useMemo(() => {
    if (ingredientFilters?.length === 0) {
      return recipes;
    }
    return recipes?.filter((recipe) => {
      if (ingredientFilters?.some((ingredient) => recipe?.ingredients?.some((filter) => filter?.includes(ingredient)))) {
        return true;
      }
      return false;
    });
  }, [recipes, ingredientFilters]);

  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={2}
      sx={{ marginTop: "20px" }}
    >
      {filteredRecipes?.length > 0
        ? filteredRecipes?.map((recipe) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={recipe?.id}>
                <CookingCard recipe={recipe} />
              </Grid>
            );
          })
        : null}
    </Grid>
  );
};

export default Recipes;
