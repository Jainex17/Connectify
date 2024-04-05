import { Box, Container, Grid, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { TeamCard } from "./TeamCard";
import { getallteams } from "../redux/actions/teamActions";
import { useEffect } from "react";

export const Teams = () => {

    const { teams, teamloading } = useSelector((state: RootState) => state.team);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getallteams());
    }, []);
    
return <>
    <Container
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
        }}
    >
        
        {teamloading ? (<>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            alignItems: "center",
            height: "50vh",
          }}
        >
          <Grid container spacing={3}>
            {[0, 1, 2, 3].map((index) => (
              <Grid item xs={3} key={index}>
                <Skeleton variant="rectangular" width={210} height={118} />
                
              </Grid>
            ))}
          </Grid>
        </Box>
        </>) : (
        <>
          <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}
        >
          {teams &&
            teams.length <= 0 ? (
              <h1>No teams found</h1>
            ) :
            teams.map((team: any, index: number) => (
              <Grid item xs={3} sm={4} md={3} key={index}>
                <TeamCard
                  id={team.id}
                  name={team.name}
                  description={team.description}
                  membersdetails={team.members}
                  />
              </Grid>
            ))}
          </Grid>
        </>)}
    </Container>
  </>;
};
