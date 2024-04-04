import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { deleteuser, updateUser } from "../redux/actions/userAction";
import React, { useEffect } from "react";

interface userSchema {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
  isupdated?: boolean;
  selectedUsers?: Set<number>;
  isselected?: boolean;
}

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function UserCard({
  id,
  first_name,
  last_name,
  email,
  avatar,
  gender,
  domain,
  available,
  isupdated,
  selectedUsers,
  isselected
}: userSchema) {
  const dispatch: AppDispatch = useDispatch();

  const deletebtnhandler = () => {
    dispatch(deleteuser(id));
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstNameVal, setFirstNameVal] = React.useState(first_name);
  const [lastNameVal, setLastNameVal] = React.useState(last_name);
  const [emailVal, setEmailVal] = React.useState(email);
  const [genderVal, setGenderVal] = React.useState(gender);
  const [domainVal, setDomainVal] = React.useState(domain);
  const [availableVal, setAvailableVal] = React.useState(available);
  const [isselectedVal, setIsselectedVal] = React.useState(isselected);

  const updatebtnhandler = () => {
    if(firstNameVal === "" || lastNameVal === "" || emailVal === "" || genderVal === "" || domainVal === ""){
      alert("Please fill all the fields");
      return;
    }
    const updatedUser = {
      first_name: firstNameVal,
      last_name: lastNameVal,
      email: emailVal,
      gender: genderVal,
      domain: domainVal,
      available: availableVal
    };

    dispatch(updateUser(id, updatedUser));
  };

  useEffect(() => {
    setOpen(false);
  }, [isupdated]);

  const handleCardClick = () => {
    if(isselectedVal){
      selectedUsers?.delete(id);
    } else{
      selectedUsers?.add(id);
    }
    setIsselectedVal(!isselectedVal);

    console.log(selectedUsers);
  }

  useEffect(() => {
    if(selectedUsers?.size === 0){
      setIsselectedVal(false);
    }
  }, [selectedUsers]);


  return (
    <Card sx={{ maxWidth: 245, padding: 1, cursor: "pointer", backgroundColor: isselectedVal ? "#16002a" : undefined }} onClick={handleCardClick}>
      <Checkbox checked={isselectedVal} />
      <Avatar
        alt="Remy Sharp"
        src={avatar}
        sx={{
          width: 80,
          height: 80,
          margin: "auto",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {first_name} {last_name}
        </Typography>

        <Stack direction="column" spacing={2} sx={{ marginTop: 2 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: "row",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>{email}</span>
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: "row",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{gender}</span>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: "row",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>

            <span>{domain}</span>
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: "row",
            }}
          >
            {available ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Available</span>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                <span>Not-Available</span>
              </>
            )}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" size="small" onClick={handleOpen}>
          Update
        </Button>
        <Button
          variant="outlined"
          size="small"
          color="error"
          onClick={deletebtnhandler}
        >
          Delete
        </Button>
      </CardActions>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ backdropFilter: "blur(3px)" }}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center" }}
          >
            Update User
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <FormControl fullWidth sx={{ gap: 2 }}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={firstNameVal}
                onChange={(e: any) => setFirstNameVal(e.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                value={lastNameVal}
                onChange={(e: any) => setLastNameVal(e.target.value)}
              />
              <TextField id="outlined-basic" label="Email" variant="outlined"
                value={emailVal}
                onChange={(e: any) => setEmailVal(e.target.value)}
              />
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={genderVal}
                  label="Age"
                  onChange={(e: any) => setGenderVal(e.target.value)}
                >
                  <MenuItem value={"Male"}>Male</MenuItem>
                  <MenuItem value={"Female"}>Female</MenuItem>
                  <MenuItem value={"Bigender"}>Bigender</MenuItem>
                  <MenuItem value={"Agender"}>Agender</MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="outlined-basic"
                label="Domain"
                variant="outlined"
                value={domainVal}
                onChange={(e: any) => setDomainVal(e.target.value)}
              />
              <FormControl component="fieldset">
                <RadioGroup
                  row
                  aria-label="position"
                  name="position"
                  defaultValue="top"
                  sx={{display: "flex"}}
                >
                  <FormControlLabel
                    value="True"
                    control={<Radio color="primary" />}
                    label="Available"
                    checked={availableVal}
                    onChange={(e: any) => setAvailableVal(e.target.checked)}
                  />
                  <FormControlLabel
                    value="False"
                    control={<Radio color="primary" />}
                    label="Not-Available"
                    checked={!availableVal}
                    onChange={(e: any) => setAvailableVal(!e.target.checked)}
                  />
                </RadioGroup>
            </FormControl>
            </FormControl>

          </Typography>

          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ textAlign: "center", mt: 2 }}
          >
            <Button variant="contained" onClick={updatebtnhandler}>Update</Button>
          </Typography>
        </Box>
      </Modal>
    </Card>
  );
}
