import {
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email == "drishti@gmail.com" && password == "1234567") {
      navigate("/add-student");
    } else {
      setOpen(true);
      console.log("wrong");
    }
  };

  function handleClose() {
    setOpen(false);
  }
  return (
    <Container
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4" gutterBottom marginTop={"40px"}>
        Admin Login
      </Typography>

      <form onSubmit={handleLogin}>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label="Username/Email"
              name="email"
              variant="outlined"
              fullWidth
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              fullWidth
              value={password}
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "30px" }}>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              type="submit"
              variant="contained"
              style={{
                width: "200px",
                padding: "10px",
                backgroundColor: "#B99470",
                color: "white",
              }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <Grid container spacing={2} style={{ marginTop: "150px" }}>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Button
            type="submit"
            variant="contained"
            style={{
              width: "200px",
              padding: "10px",
              backgroundColor: "#B99470",
              color: "white",
            }}
            onClick={() => (window.location.href = "http://localhost:5174")}
          >
            Back to Application
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Wrong Credentials"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            wrong email or password
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Login;
