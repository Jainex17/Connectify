import { Card } from "@mui/material";

interface TeamCardProps {
    id: number;
    name: string;
    description: string;
    members: number[];
}

export const TeamCard = ({
    id,
    name,
    description,
    members
}: TeamCardProps) => {
  return <>
    <Card sx={{ maxWidth: 245, padding: 1, cursor: "pointer"}}>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{members.length} members</p>
        
    </Card>
  </>;
};
