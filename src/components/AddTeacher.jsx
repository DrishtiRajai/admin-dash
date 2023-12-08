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
import Navbar from "./Navbar";
import axios from "axios";

const AddTeacher = () => {
  //defining states for inputs
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [open, setOpen] = useState(false);

  //on submit for --api request

  const submitAddTeacherForm = async (e) => {
    e.preventDefault();
    const data = {
      id,
      email,
      first_name,
      last_name,
    };

    const response = await axios.post("http://localhost:3000/addteacher", data);
    if (response.status == 201) {
      setOpen(true);
    }
    console.log(response);
    clearData();
  };

  function handleClose() {
    setOpen(false);
  }

  const clearData = () => {
    setEmail("");
    setId("");
    setFirstName("");
    setLastName("");
  };
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Typography variant="h4" gutterBottom>
          Add Teacher
        </Typography>

        <form onSubmit={submitAddTeacherForm}>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField
                label="ID"
                name="id"
                variant="outlined"
                fullWidth
                value={id}
                required
                onChange={(e) => setId(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="E-mail"
                name="email"
                variant="outlined"
                fullWidth
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                name="f_name"
                variant="outlined"
                fullWidth
                value={first_name}
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                name="l_name"
                variant="outlined"
                fullWidth
                value={last_name}
                required
                onChange={(e) => setLastName(e.target.value)}
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
                  width: "150px",
                  padding: "10px",
                  backgroundColor: "#1E1D18",
                  color: "white",
                }}
              >
                Add Teacher
              </Button>
            </Grid>
          </Grid>
        </form>
        <Dialog
          open={open}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Success"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Teacher Added Successfully
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Okay</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default AddTeacher;
