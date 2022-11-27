import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Recipe } from "../../utils/interfaces";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Modal, Box, Grid, Typography, Backdrop, Fade, useMediaQuery } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 611,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type Props = {
  recipe: Recipe;
};

const CookingCard = ({ recipe }: Props) => {
  const phoneMediaQuery = useMediaQuery("(max-width:600px)");
  const [modalInfo, setModalInfo] = useState<{
    open: boolean;
    info: { step: number; text: string }[];
  }>({
    open: false,
    info: [],
  });

  const handleOpen = (info: { step: number; text: string }[]) => setModalInfo({ open: true, info });
  const handleClose = () => setModalInfo({ open: false, info: [] });

  return (
    <>
      <Modal
        open={modalInfo?.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalInfo?.open}>
          <Box sx={{ ...style, width: phoneMediaQuery ? "80%": "70%", ...(phoneMediaQuery && {overflow: "scroll", height: "100%"}) }}>
            <Grid container justifyContent="flex-end" alignItems="center">
              <IconButton
                aria-label="close"
                onClick={() => setModalInfo({ open: false, info: [] })}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            {modalInfo?.info?.length > 0
              ? modalInfo?.info?.map((preparationStep, i) => {
                  return (
                    <Grid
                      container
                      key={preparationStep?.step}
                      sx={{ marginBottom: "20px" }}
                    >
                      <Grid item xs={3}>
                        <Avatar sx={{ bgcolor: "#3593E9" }}>{i}</Avatar>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography>{preparationStep?.text}</Typography>
                      </Grid>
                    </Grid>
                  );
                })
              : null}
          </Box>
        </Fade>
      </Modal>
      <Card>
        <CardHeader title={recipe?.title} subheader={recipe?.timeToPrepare} />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          {recipe?.ingredients?.length > 0
            ? recipe?.ingredients?.map((ingredient, i) => {
                return (
                  <li key={i} style={{ textAlign: "left", padding: "4px 0" }}>
                    {ingredient}
                  </li>
                );
              })
            : null}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            onClick={() => handleOpen(recipe?.preparationMethod)}
            aria-label="add to favorites"
          >
            <OpenInNewIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CookingCard;
