import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({user}) {
  return (
    <Card  sx={{ maxWidth: 345, margin: "2% 2% 2% 2%" }} key={user.id.value}>
      <CardMedia
        component="img"
        height="140"
        image={user.picture.medium}
        alt={user.image_alt}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {user.name.title}. {user.name.first} {user.name.last}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.gender}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
       
        <Typography variant="body2" color="text.secondary">
          {user.location.street.number}, {user.location.street.name},{" "}
          {user.location.city}, {user.location.state}, {user.location.country},{" "}
          {user.location.postcode}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.phone}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Contact</Button>
      </CardActions>
    </Card>
  );
}
