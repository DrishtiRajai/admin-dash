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
const AddStudent = () => {
  //defining states for inputs
  const [email, setEmail] = useState("");
  const [prn, setPrn] = useState("");
  const [group, setGroup] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [open, setOpen] = useState(false);
  //on submit for --api request
  const submitAddStudentForm = async (e) => {
    e.preventDefault();
    const data = {
      prn,
      group,
      first_name,
      last_name,
      email,
    };

    const response = await axios.post("http://localhost:3000/addstudent", data);
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
    setGroup("");
    setFirstName("");
    setLastName("");
    setPrn("");
  };
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Typography variant="h4" gutterBottom>
          Add Student
        </Typography>

        <form onSubmit={submitAddStudentForm}>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField
                label="PRN Number"
                name="prn"
                variant="outlined"
                fullWidth
                value={prn}
                required
                onChange={(e) => setPrn(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Group"
                name="group"
                variant="outlined"
                fullWidth
                value={group}
                required
                onChange={(e) => setGroup(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: "10px" }}>
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
            <Grid item xs={4}>
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
                Add Student
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
              Student Added Successfully
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

export default AddStudent;
