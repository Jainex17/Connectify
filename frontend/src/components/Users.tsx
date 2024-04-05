import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Pagination,
  Select,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import UserCard from "./Card";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { filterUser, getusers, searchuser } from "../redux/actions/userAction";
import { toast } from "react-toastify";
import { style } from "./Card";
import { createTeam, getallteams } from "../redux/actions/teamActions";

export const Users = () => {
  const { users, loading, isupdated } = useSelector(
    (state: RootState) => state.user
  );
  const { isTeamCreated = false, error } = useSelector((state: RootState) => state.team);
  const dispatch: AppDispatch = useDispatch();
  const [usersValues, setusersValues] = React.useState([] as any);
  const [searchText, setSearchText] = React.useState("" as string);

  const [gender, setGender] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [availability, setAvailability] = React.useState("");

  const [page, setPage] = React.useState(1);
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    dispatch(getusers({ page }));
  }, [page, isupdated]);


  useEffect(() => {
    dispatch(getallteams());
  }, []);

  useEffect(() => {
    setusersValues(users);
  }, [users]);

  const searchbtnhandler = () => {
    if (searchText === "") return dispatch(getusers({ page }));
    dispatch(searchuser(searchText));
  };

  const handleChangegender = (event: any) => {
    dispatch(
      filterUser({
        gender: event.target.value,
        domain: "default",
        availability: "default",
      })
    );
    setGender(event.target.value);
  };
  const handleChangedomain = (event: any) => {
    dispatch(
      filterUser({
        gender: "default",
        domain: event.target.value,
        availability: "default",
      })
    );
    setDomain(event.target.value);
  };
  const handleChangeavailability = (event: any) => {
    dispatch(
      filterUser({
        gender: "default",
        domain: "default",
        availability: event.target.value,
      })
    );
    setAvailability(event.target.value);
  };

  const [selectedUsers, setSelectedUsers] = React.useState(new Set<number>());

  const [teamName, setTeamName] = React.useState("" as string);
  const [teamdesc, setTeamDesc] = React.useState("" as string);
  const [createTeamOpen, setCreateTeamOpen] = React.useState(false);
  const handleCreateTeamOpen = () => {
    if (selectedUsers.size <= 0) {
      toast("Select atleast 2 users to create a team");
      return;
    }
    setCreateTeamOpen(true);
  }
  const handleCreateTeamClose = () => setCreateTeamOpen(false);

  const CreareTeamHandle = () => {
    let team = Array.from(selectedUsers);
    if (team.length < 2) {
      toast("Select atleast 2 users to create a team");
      return;
    }
    if(teamName === "" || teamdesc === "") {
      toast("Please fill all the fields");
      return;
    }
    dispatch(createTeam({ name: teamName, description: teamdesc, members: team }));
    setSelectedUsers(new Set<number>());
    setCreateTeamOpen(false);
    setTeamName("");
    setTeamDesc("");
  };

  useEffect(() => {
    console.log(isTeamCreated);
    
    if (isTeamCreated) {
      toast.success("Team created successfully");
      dispatch({ type: "clearSuccessMsg" });
    }
  }, [isTeamCreated]);

  useEffect(() => {
    if(error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
  }, [error]);

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

        <Box sx={{ width: "100%", display: "flex", gap: 5, marginBottom: 5 }}>
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
              <MenuItem value={"Agender"}>Agender</MenuItem>
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
              <MenuItem value={"Business Development"}>
                Business Development
              </MenuItem>
              <MenuItem value={"UI Designing"}>UI Designing</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ display: "flex", width: "15%" }}>
            <InputLabel id="demo-simple-select-label">
              Select Availability
            </InputLabel>
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
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto", padding: 2, marginRight: 4 }}
            onClick={handleCreateTeamOpen}
          >
            Make A Team
          </Button>
        </Box>

        <Modal
          open={createTeamOpen}
          onClose={handleCreateTeamClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center" }}
            >
              Create Team
            </Typography>

            <Box id="modal-modal-description" sx={{ mt: 2 }}>
              <FormControl fullWidth sx={{ gap: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Team Name"
                  variant="outlined"
                  value={teamName}
                  onChange={(e: any) => setTeamName(e.target.value)}
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Team Description"
                  multiline
                  rows={4}
                  value={teamdesc}
                  onChange={(e: any) => setTeamDesc(e.target.value)}
                />
              </FormControl>
            </Box>

            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{ textAlign: "center", mt: 2 }}
            >
              <Button variant="contained" onClick={CreareTeamHandle}>
                Create
              </Button>
            </Typography>
          </Box>
        </Modal>

        {loading ? (
          <>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 5,
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Skeleton variant="rectangular" width={270} height={300} />
              <Skeleton variant="rectangular" width={270} height={300} />
              <Skeleton variant="rectangular" width={270} height={300} />
              <Skeleton variant="rectangular" width={270} height={300} />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: 5,
                alignItems: "center",
                height: "50vh",
              }}
            >
              <Skeleton variant="rectangular" width={270} height={300} />
              <Skeleton variant="rectangular" width={270} height={300} />
              <Skeleton variant="rectangular" width={270} height={300} />
              <Skeleton variant="rectangular" width={270} height={300} />
            </Box>
          </>
        ) : (
          <>
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
                      isupdated={isupdated}
                      selectedUsers={selectedUsers}
                      isselected={selectedUsers.has(user.id)}
                    />
                  </Grid>
                ))}
            </Grid>
          </>
        )}

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
