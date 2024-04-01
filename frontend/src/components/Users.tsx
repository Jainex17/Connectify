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
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { getusers } from "../redux/actions/userAction";

export const Users = () => {

  const { users } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [usersValues, setusersValues] = React.useState([] as any);

  const [page, setPage] = React.useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getusers({ page }));
  }, [page]);

  useEffect(() => {
    setusersValues(users);
  }, [users]);

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
          {usersValues && usersValues.map((user: any, index: number) => (
            <Grid item xs={3} sm={4} md={3} key={index}>
              <UserCard
                id={user.id}
                first_name={user.first_name}
                last_name={user.last_name}
                email={user.email}
                avatar={user.avatar}
                gender={user.gender}
                domain={user.domain}
                available={user.available}
              />
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
