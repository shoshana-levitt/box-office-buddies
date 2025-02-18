import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ShowCard({ show }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={show.showImageUrl}
        title={show.showName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {show.showName}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {show.tier}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {show.format}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
