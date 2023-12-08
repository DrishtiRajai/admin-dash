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

const DeleteTeacher = () => {
  //defining states for inputs
  const [id, setId] = useState("");
  const [open, setOpen] = useState(false);

  //on submit for --api request
  const submitDeleteTeacherForm = async (e) => {
    e.preventDefault();

    const response = await axios.delete(
      `http://localhost:3000/deleteteacher/${id}`
    );
    console.log(response);
    if (response.statusText == "OK") {
      setOpen(true);
    }
    clearData();
  };

  const clearData = () => {
    setId("");
  };

  function handleClose() {
    setOpen(false);
  }
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "100px" }}>
        <Typography variant="h4" gutterBottom>
          Remove Teacher
        </Typography>

        <form onSubmit={submitDeleteTeacherForm}>
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
                Remove Teacher
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
              Teacher Deleted Successfully
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

export default DeleteTeacher;
