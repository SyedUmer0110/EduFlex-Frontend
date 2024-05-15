import React, { useState } from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle,DialogActions, TextField, Typography } from "@mui/material";
import { IoIdCardOutline } from "react-icons/io5";
import { getDate } from "../../config/Constants";
import { FaStar } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import { addFeedback } from "../../api/lecture/LectureServices";
import { toast } from "react-toastify";

const LectureFeedbackCard = ({ data }) => {
  const token = localStorage.getItem("token");
  const decodedPayload = jwtDecode(token, { payload: true });
  console.log("decoded token", decodedPayload);
  const role = decodedPayload?.authorities?.[0]?.authority
  console.log("role", role);
  const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");
    const [selectedRating, setSelectedRating] = useState(0); 
  
    const handleOpenFeedbackDialog = () => {
      setIsFeedbackDialogOpen(true);
    };
    const handleRatingClick = (ratingValue) => {
        // Set the selected rating when a star is clicked
        setSelectedRating(ratingValue);
      };
  
    const handleCloseFeedbackDialog = () => {
      setIsFeedbackDialogOpen(false);
      setFeedbackText(""); 
      setSelectedRating(0);
    };
  
    const handleFeedbackSubmit = async() => {
        console.log("Submitting feedback:", feedbackText);
        console.log("Selected rating:", selectedRating);
      let obj = {
        feedback: feedbackText,
        rating: selectedRating
      }
        await addFeedback(data?.lect_id, obj);
       
      // Close the feedback dialog after submission
      handleCloseFeedbackDialog();
    }
    return (
        <Box
          sx={{
            border: "1px solid #dadce0",
            borderRadius: "8px",
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", columnGap: "1rem" }}>
            <Box
              sx={{
                background: "#1e8e3e",
                width: "max-content",
                borderRadius: "50%",
                width: "45px",
                height: "45px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoIdCardOutline
                style={{ width: "24px", height: "24px", color: "white" }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>

           <Typography
                sx={{
                color: "#000000",
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "10px",
                }}
            >
            {data?.topic}
         </Typography>
        
          <Typography
            sx={{
                color:"#000000",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {data?.content}
          </Typography>
          <Typography
            sx={{
              color: "#848a8c",
              fontSize: "12px",
              fontWeight: 600,
            }}
          >
            {getDate(data?.createdAt)}
          </Typography>
        
        {role === "Role_STUDENT" && (
            <Button sx={{marginTop:"10px"}} variant="outlined" onClick={handleOpenFeedbackDialog}>
            Give Feedback
          </Button>
        )}
          
          <Dialog  open={isFeedbackDialogOpen} onClose={handleCloseFeedbackDialog}>
            <DialogTitle >{data?.topic} - Feedback</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                label="Your Feedback"
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
              <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                {[1, 2, 3, 4, 5].map((rating) => (
                  <FaStar
                    key={rating}
                    size={30}
                    style={{ color: rating <= selectedRating ? "#ffc107" : "#e4e5e9", cursor: "pointer" }}
                    onClick={() => handleRatingClick(rating)}
                  />
                ))}
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseFeedbackDialog}>Cancel</Button>
              <Button onClick={handleFeedbackSubmit} variant="contained" color="primary">
                Submit Feedback
              </Button>
            </DialogActions>
          </Dialog>

     
            </Box>
          </Box>
        </Box>
      );
};

export default LectureFeedbackCard;
