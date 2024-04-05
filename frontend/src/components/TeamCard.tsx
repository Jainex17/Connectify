import { Avatar, Box, Card, Modal, Typography } from "@mui/material";
import React from "react";

interface TeamCardProps {
    id: number;
    name: string;
    description: string;
    membersdetails: number[];
}


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const TeamCard = ({
    name,
    description,
    membersdetails
}: TeamCardProps) => {
      const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return <>
    <Card sx={{ maxWidth: 245, padding: 1, cursor: "pointer"}} onClick={handleOpen}>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold", textAlign: "center" }}>
            {name}
        </Typography>
        <Typography variant="body2" sx={{ paddingTop: "10px", paddingX: "5px"}}>
            {description}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginY: 1, gap: 1 }}>
            {membersdetails &&
                membersdetails.map((member: any) => (
                    <Avatar key={member.id} sx={{ width: 60 }} src={member.avatar} />
                ))
            }
        </Box>
    </Card>
    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: "center"}}>
        Members
    </Typography>
    <Box id="modal-modal-description" sx={{ mt: 2, maxHeight: "50vh", overflowY: membersdetails.length > 3 ? "scroll" : undefined, scrollbarWidth: "thin" }}>
        {membersdetails &&
            membersdetails.map((member: any) => (
                    <Card key={member.id} sx={{ maxWidth: "95%", padding: 1, display: "flex", alignItems: "center", marginBottom: 1 }}>
                    <Avatar sx={{ width: 60 }} src={member.avatar} />
                    <Box component="div" sx={{ fontWeight: "bold" }}>
                        <Typography variant="subtitle1" component="div" >
                        {member.first_name} {member.last_name} ({member.gender})
                        </Typography>
                        <Typography variant="subtitle1" component="div" >
                        {member.email}
                        </Typography>
                        <Typography variant="subtitle1" component="div" >
                        {member.domain}
                        </Typography>
                    </Box>
                </Card>
            ))
        }
    </Box>
  </Box>
</Modal>
  </>;
};
