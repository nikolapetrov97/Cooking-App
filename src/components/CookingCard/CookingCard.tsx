import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { Recipe } from "../../utils/interfaces";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import {
  Modal,
  Box,
  Grid,
  Typography,
  Backdrop,
  Fade,
  useMediaQuery,
} from "@mui/material";
import { useCallback, useState } from "react";
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
};

type Props = {
  recipe: Recipe;
};

const CookingCard = ({ recipe }: Props) => {
  const phoneMediaQuery = useMediaQuery("(max-width:700px)");
  const [modalInfo, setModalInfo] = useState<{
    open: boolean;
    info: { step: number; text: string }[];
  }>({
    open: false,
    info: [],
  });

  const handleOpen = useCallback(
    (info: { step: number; text: string }[]) =>
      setModalInfo({ open: true, info }),
    []
  );
  const handleClose = useCallback(
    () => setModalInfo({ open: false, info: [] }),
    []
  );

  return (
    <>
      <Modal
        data-testid="recipe-dialog"
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
          <Box
            sx={{
              ...style,
              ...(phoneMediaQuery && {
                overflow: "scroll",
                height: "90%",
                width: "80%",
              }),
            }}
          >
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
                      justifyContent="center"
                      key={preparationStep?.step}
                      sx={{ marginBottom: "24px", padding: "0 32px 0px 32px" }}
                    >
                      <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
                        <Avatar
                          sx={{
                            bgcolor: "#3593E9",
                            width: "32px",
                            height: "32px",
                          }}
                        >
                          {i}
                        </Avatar>
                      </Grid>
                      <Grid item xs={10} sm={11} md={11} lg={11} xl={11}>
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
        <CardHeader
          data-testid="card-header"
          sx={{ paddingBottom: 0 }}
          title={recipe?.title}
          subheader={recipe?.timeToPrepare}
        />
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
            aria-label="open recipe dialog"
            data-testid="modal-button"
          >
            <OpenInNewIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CookingCard;
