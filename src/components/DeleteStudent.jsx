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

const DeleteStudent = () => {
  //defining states for inputs
  const [prn, setPrn] = useState("");
  const [open, setOpen] = useState(false);

  //on submit for --api request
  const submitDeleteStudentForm = async (e) => {
    e.preventDefault();

    const response = await axios.delete(
      `http://localhost:3000/deletestudent/${prn}`
    );
    console.log(response);
    if (response.statusText == "OK") {
      setOpen(true);
    }
    clearData();
  };

  const clearData = () => {
    setPrn("");
  };

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Typography variant="h4" gutterBottom>
          Remove Student
        </Typography>

        <form onSubmit={submitDeleteStudentForm}>
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
                  backgroundColor: "#1E1D18",
                  color: "white",
                }}
              >
                Remove Student
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
              Student Deleted Successfully
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

export default DeleteStudent;
