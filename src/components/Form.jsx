import { Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const Form = ({ headingText }) => {
  const submitForm = async () => {};
  return (
    <Container>
      <Typography variant='h4' gutterBottom>
        {headingText}
      </Typography>

      <form onSubmit={submitForm}>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item xs={6}>
            <TextField
              label='Id'
              name='country'
              inputProps={{ readOnly: true }}
              variant='outlined'
              fullWidth
              value={locationData.country_code}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label='State'
              name='state'
              inputProps={{ readOnly: true }}
              variant='outlined'
              fullWidth
              value={locationData.state}
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
