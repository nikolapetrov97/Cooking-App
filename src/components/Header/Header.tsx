/* eslint-disable react-hooks/exhaustive-deps */
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Autocomplete,
  TextField,
  Checkbox,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { addFilterIngredient, removeFilterIngredient } from "../../actions/recipies.actions";
import { useAppDispatch, useAppSelector } from "../../store";
import { capitalize } from '@mui/material';

const Header = () => {
  const dispatch = useAppDispatch();
  const ingredients = useAppSelector((state) => state?.recipesInfo?.ingredients);
  const ingredientFilters = useAppSelector((state) => state?.recipesInfo?.ingredientFilters);
  const phoneMediaQuery = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          color: "black",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <Toolbar sx={{ display: 'flex', flexDirection: phoneMediaQuery ? "column" : "row" }}>
          <Box sx={{ display: "flex", flexGrow: 1 }}>
            <img src="/Vector-overlay.png" alt="" />
            <Box sx={{ marginLeft: "15px", textAlign: "start" }}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: 400, lineHeight: "20px" }}
              >
                CookWell
              </Typography>
              <Typography
                sx={{ fontSize: "12px", fontWeight: 300, lineHeight: "16px" }}
              >
                by Devexperts
              </Typography>
            </Box>
          </Box>
          <Box>
            {ingredients?.length > 0 && (
              <Autocomplete
                sx={{ minWidth: "328px", ...(phoneMediaQuery && { marginTop: "10px", minWidth: "200px", maxWidth: "250px" })}}
                getOptionLabel={(option: any) => option?.name || ""}
                id="combo-box-demo"
                options={ingredients}
                disableCloseOnSelect
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Filter ingridients"
                    placeholder="Search..."
                    variant="outlined"
                  />
                )}
                renderOption={(props: React.HTMLAttributes<HTMLLIElement>, option: any) => {
                  return (
                    <li
                      {...props}
                      key={option?.id}
                      onClick={() => {
                        if (ingredientFilters?.some((filter) => filter === option?.name)) {
                          dispatch(removeFilterIngredient(option?.name));
                        } else {
                          dispatch(addFilterIngredient(option?.name));
                        }
                      }}
                    >
                      <Grid container justifyContent="space-evenly" alignItems="center">
                        <Grid item xs={3} sm={2} md={2} lg={2} xl={2}>
                          <Checkbox 
                            checked={ingredientFilters?.some((filter) => filter === option?.name)}
                            sx={{
                              '&.Mui-checked': {
                                color: "#F60257",
                              },
                            }}
                          />
                        </Grid>
                        <Grid item xs={9} sm={10} md={10} lg={10} xl={10}>
                          <Typography
                            sx={{
                              fontSize: "16px",
                              fontWeight: "400",
                            }}
                          >
                            {capitalize(option?.name)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </li>
                  );
                }}
              />
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
