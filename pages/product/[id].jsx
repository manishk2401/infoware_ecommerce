import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import productlist from "../../assets/products.json";
import { useTheme } from "@mui/material/styles";
import { Button, Card, Grid } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import style from "./style.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";

export default function ProductDetails() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState([]);
  useEffect(() => {
    let getproduct = productlist.filter((el) => {
      return el.id == router.query.id;
    });

    setSelectedProduct(getproduct);
  }, [router.query.id]);

  console.log(selectedProduct[0]);
  const theme = useTheme();
  return (
    <Card style={{ padding: "20px", margin: "10px", background: "rgba(135, 235, 218, 0.54)" }}>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6} style={{ height: "100%", width: "100%" }}>
          <div className={style.cardPart} style={{ overflow: "hidden", textAlign: "center", padding: "20px" }}>
            {" "}
            <img style={{ height: "100%", margin: "auto" }} src={selectedProduct.length ? selectedProduct[0].image : ""} alt="" />
          </div>
        </Grid>
        <Grid item md={6} lg={6} style={{ height: "100%", width: "100%" }}>
          <div className={style.cardPart + " " + style.cardContent}>
            <h1 style={{ margin: "0px" }}> {selectedProduct.length ? selectedProduct[0].title : ""}</h1>
            <span className={style.rating}>
              {selectedProduct.length ? selectedProduct[0].rating.rate : ""} <StarIcon />
            </span>

            <h3>Price:&nbsp; &#36;{selectedProduct.length ? selectedProduct[0].price : ""}</h3>
            <div className={style.cartDesc}>
              <p>{selectedProduct.length ? selectedProduct[0].description : ""}</p>
            </div>

            <div className={style.cardAction}>
              <Button variant="outlined" color="error" startIcon={<AddShoppingCartIcon />}>
                Add Card
              </Button>
              <Button variant="outlined" color="warning" startIcon={<FlashOnIcon />}>
                Buy Now
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
