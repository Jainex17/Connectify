import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { deleteuser } from "../redux/actions/userAction";

interface userSchema {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
}

export default function UserCard({
  id,
  first_name,
  last_name,
  email,
  avatar,
  gender,
  domain,
  available,
}: userSchema) {

  const dispatch: AppDispatch = useDispatch();

  const deletebtnhandler = () => {
    dispatch(deleteuser(id));
  }

  return (
    <Card sx={{ maxWidth: 245, padding: 1 }}>
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
            {available ? (<>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            <span>Not-Available</span>
            </>
            )}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button variant="contained" size="small">
          Update
        </Button>
        <Button variant="outlined" size="small" color="error" onClick={deletebtnhandler}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
