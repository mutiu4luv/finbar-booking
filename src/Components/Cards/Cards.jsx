import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./Cards.css";

export default function MultiActionAreaCard({
  title,
  description,
  imageUrl,
  button,
}) {
  return (
    <Card sx={{ maxWidth: 320 }} className="card-main">
      <CardActionArea>
        <div className="box-shadow">
          <div className="card-pix">
            <CardMedia
              component="img"
              height="14"
              image={imageUrl}
              alt={title}
              className="card-img"
            />
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="title"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="description"
            >
              {description}
            </Typography>
          </CardContent>
        </div>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          {button}
        </Button>
      </CardActions>
    </Card>
  );
}
