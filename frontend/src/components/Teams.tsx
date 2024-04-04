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
    }, [dispatch]);

return <>
    <Container
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
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
        </>) : (
        <>
          <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}
        >
          {teams &&
            teams.map((team: any, index: number) => (
              <Grid item xs={3} sm={4} md={3} key={index}>
                <TeamCard
                  id={team.id}
                  name={team.name}
                  description={team.description}
                  members={team.members}
                />
              </Grid>
            ))}
          </Grid>
        </>)}
    </Container>
  </>;
};
