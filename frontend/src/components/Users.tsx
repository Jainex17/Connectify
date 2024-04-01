import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  TextField,
} from "@mui/material";
import UserCard from "./Card";
import React from "react";

export const Users = () => {
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 15,
          marginBottom: 4,
        }}
      >
        <Box
          sx={{ marginBottom: 4, display: "flex", justifyContent: "center" }}
        >
          <TextField
            id="outlined-search"
            label="Search User"
            type="search"
            sx={{ width: "100%" }}
          />
          <Button
            variant="contained"
            sx={{ marginLeft: 2, padding: 2, paddingX: 4 }}
          >
            Search
          </Button>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={3} sm={4} md={3} key={index}>
              <UserCard />
            </Grid>
          ))}
        </Grid>

        <Stack spacing={2} sx={{ marginTop: 4 }}>
          <Pagination count={10} color="primary" page={page} onChange={handleChange} />
        </Stack>
      </Container>
    </>
  );
};
