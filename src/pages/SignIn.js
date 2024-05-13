import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Paper,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo  from "../assets/EduFlexConnect.png";
import { publicAPI } from "../config/Constants";
import { studentLogin } from "../api/auth/AuthServices";
import Notification from "../components/CustomNotification/Notification";

const SignIn = () => {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate(-1);
    }
  }, []);

  const authLogin = async (payload) => {
    await studentLogin(payload, navigate);
    // navigate
  };

  const handleSubmit = (event) => {
    const payload = {
      id: studentId,
      login_password: password,
    };
    authLogin(payload);
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          
          backgroundImage: "url(https://img.freepik.com/free-photo/front-view-stacked-books-graduation-cap-open-book-education-day_23-2149241017.jpg?t=st=1715591386~exp=1715594986~hmac=9448f2e21f4442a25af2566aa5ffe651fe163c47ca1534e5a339835225a02f21&w=740)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{width: 350, height: 350, bgcolor: 'primary.main'}}>
            <img src={logo} alt="Avatar"/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            // component="form"
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setStudentId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: '#004AAD' }}
              onClick={() => handleSubmit()}
            >
              Sign In
            </Button>
            <Notification />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignIn;
