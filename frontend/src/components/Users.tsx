import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import UserCard from "./Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { filterUser, getusers, searchuser } from "../redux/actions/userAction";

export const Users = () => {
  const { users } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const [usersValues, setusersValues] = React.useState([] as any);
  const [searchText, setSearchText] = React.useState("" as string);

  const [gender, setGender] = React.useState('');
  const [domain, setDomain] = React.useState('');
  const [availability, setAvailability] = React.useState('');

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

  const searchbtnhandler = () => {
    dispatch(searchuser(searchText));
  };

  const handleChangegender = (event: any) => {
    dispatch(filterUser({ gender: event.target.value, domain: undefined, availability: undefined}));
    setGender(event.target.value);
  };
  const handleChangedomain = (event: any) => {
    dispatch(filterUser({ gender: undefined, domain: event.target.value, availability: undefined}));
    setDomain(event.target.value);
  };
  const handleChangeavailability = (event: any) => {
    dispatch(filterUser({ gender: undefined, domain: undefined, availability: event.target.value}));
    setAvailability(event.target.value);
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
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{ marginLeft: 2, padding: 2, paddingX: 4 }}
            onClick={searchbtnhandler}
          >
            Search
          </Button>
        </Box>

        <Box sx={{width: "100%", display: "flex", gap: 5, marginBottom: 5}}>
          <FormControl sx={{ display: "flex", width: "15%" }}>
            <InputLabel id="demo-simple-select-label">Select Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Select Gender"
              onChange={handleChangegender}
            >
              <MenuItem value={"undefined"}>Select Gender</MenuItem>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
              <MenuItem value={"Bigender"}>Bigender</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ display: "flex", width: "15%" }}>
            <InputLabel id="demo-simple-select-label">Select Domain</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={domain}
              label="Select Domain"
              onChange={handleChangedomain}
            >
              <MenuItem value={"undefined"}>Select Domain</MenuItem>
              <MenuItem value={"Finance"}>Finance</MenuItem>
              <MenuItem value={"Marketing"}>Marketing</MenuItem>
              <MenuItem value={"Management"}>Management</MenuItem>
              <MenuItem value={"IT"}>IT</MenuItem>
              <MenuItem value={"Sales"}>Sales</MenuItem>
              <MenuItem value={"Business Development"}>Business Development</MenuItem>
              <MenuItem value={"UI Designing"}>UI Designing</MenuItem>
            </Select>
          </FormControl>
          
          <FormControl sx={{ display: "flex", width: "15%" }}>
            <InputLabel id="demo-simple-select-label">Select Availability</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={availability}
              label="Select Availability"
              onChange={handleChangeavailability}
            >
              <MenuItem value={"undefined"}>Select Availability</MenuItem>
              <MenuItem value={"True"}>True</MenuItem>
              <MenuItem value={"False"}>False</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}
        >
          {usersValues &&
            usersValues.map((user: any, index: number) => (
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
          <Pagination
            count={10}
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Container>
    </>
  );
};
