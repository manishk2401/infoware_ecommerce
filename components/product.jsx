import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import style from "./style.module.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Product(props) {
  const { item } = props;
  // console.log(item);
  return (
    <div>
      <Card className={style.card}>
        <Link href={"/product/" + item.id}>
          <div className={style.productLink}>
            <div className={style.cardImg}>
              <img src={item.image} alt="" />
            </div>
            <CardContent style={{ paddingBottom: "0px" }}>
              <Typography gutterBottom variant="h6" component="div">
                {item.title.substring(0, 25)}...
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description.substring(0, 100)}...
              </Typography>
            </CardContent>
          </div>
        </Link>

        <CardActions className={style.cardAction}>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <AddShoppingCartIcon />
          </IconButton>
          <Link href={"/product/" + item.id}>
            <IconButton color="primary" aria-label="upload picture" component="span">
              <VisibilityIcon />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
