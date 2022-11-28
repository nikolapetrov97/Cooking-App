/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../../store";
import { filterRecipes } from "../../utils/helpers";
import CookingCard from "../CookingCard/CookingCard";

const Recipes = () => {
  const recipes = useAppSelector((state) => state.recipesInfo?.recipes);
  const ingredientFilters = useAppSelector((state) => state.recipesInfo?.ingredientFilters);

  const filteredRecipes = useMemo(() => {
    // FILTER RECIPES IF THERE ARE INGREDIENT FILTERS FROM THE HEADER COMPONENT
    return filterRecipes(recipes, ingredientFilters);
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
        : (
          <Grid container justifyContent="center" alignItems="center" mt={3}>
            <Typography>No recipes</Typography>
          </Grid>
        )}
    </Grid>
  );
};

export default Recipes;
