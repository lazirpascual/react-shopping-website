import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { useHistory } from "react-router-dom";
import AddToCart from "./AddToCart";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { Box } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import Link from "@material-ui/core/Link";
import useStyles from "./styles";
import Rating from "@material-ui/lab/Rating";

const ProductPreview = () => {
  const classes = useStyles();
  const { preview } = useContext(ProductContext);
  const history = useHistory();
  const [completeOrder, setCompleteOrder] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Container className="cart-bg">
      <Grid container direction="row" alignItems="flex-start" spacing={10}>
        <Grid item xs={6} md={6} lg={6}>
          <Button
            onClick={() => history.push(`/shop`)}
            size="large"
            variant="contained"
            color="primary"
          >
            Back To Shopping
          </Button>
          <Typography variant="h6" className={classes.productInfo}>
            Shop / {preview.category}
          </Typography>
          <Typography align="left" variant="h3" className={classes.productName}>
            {preview.name}
          </Typography>
          <Box
            className={classes.review}
            display="flex"
            justifyContent="left"
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Rating name="read-only" value={value} readOnly />
            <Typography>(0)</Typography>
            <Typography className={classes.textReview} variant="body1">
              <Link href="#">Write a review</Link>
            </Typography>
          </Box>
          <img
            className={classes.image}
            src={preview.productPreview}
            alt={preview.name}
          />
          <Typography align="left" variant="h5" className={classes.productName}>
            Customer Reviews
          </Typography>
        </Grid>
        <Grid item xs={6} md="auto" lg="auto" className={classes.price}>
          <Typography variant="h6">
            <Box letterSpacing={6}>CLOUD COMPUTERS</Box>
          </Typography>
          <Typography variant="h3" className={classes.productInfo}>
            ${preview.price}
          </Typography>
          <AddToCart preview={preview} setCompleteOrder={setCompleteOrder} />
          {completeOrder && (
            <Button
              onClick={() => history.push(`/cart`)}
              startIcon={<CheckCircleOutlineIcon />}
              size="large"
              variant="outlined"
              className={classes.productInfo}
              style={{
                width: 250,
                height: 70,
                color: "#C71585",
                fontSize: 17,
              }}
              color="inherit"
            >
              Complete Order
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPreview;