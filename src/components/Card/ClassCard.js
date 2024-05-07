import React from "react";
import {
  Box,
  Typography,
  CardMedia,
  Card,
  CardActions,
  CardContent,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { RxExit } from "react-icons/rx";

import { privateAPI, publicAPI } from "../../config/Constants";


const ClassCard = ({ data, onClickFn }) => {
  const navigate = useNavigate();
  let resizedName = data?.className?.split("").splice(0, 16);
  resizedName =
    resizedName?.length > 15 ? `${resizedName.join("")}...` : resizedName;
    
  const getClasses = async () => {
    try {
      console.log('api hit')
      // const res = await publicAPI.get("/fyp/marks/getmid1/23KSE9322/1/aman.nadeem54");
      const res = await privateAPI.get("/fyp/classroom2");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <Card width>
    // <Card sx={{ minWidth: 300 }} onClick={() => getClasses()}>
    <Card sx={{ minWidth: 300, cursor: 'pointer' }} onClick={() => navigate('/classrooms/1234567')}>
      {/* <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          /> */}
      <CardContent sx={{ padding: "0" }}>
        <Box sx={{ padding: "16px", background: data?.bg }}>
          <Typography gutterBottom variant="h5" component="div">
            {resizedName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.owner}
          </Typography>
        </Box>
        <Box sx={{ height: "100px" }} />
      </CardContent>
      <CardActions
        sx={{
          padding: "8px 15px",
          borderTop: ".0625rem solid rgb(218,220,224)",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <IconButton
          size="medium"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ color: "#000000" }}
        >
          <RxExit />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ClassCard;