import React from "react";
import { Button, Typography } from "@mui/material";

interface Props {
  onGenerate: (formData: any) => void;
}

const EventForm: React.FC<Props> = ({ onGenerate }) => {
  return (
    <>
      <Typography variant="body2">
        Invite people to your event.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: "green", width:"200px"}}
        fullWidth
        onClick={() => onGenerate({ /* your form data here */ })}
      >
        Sign up for free
      </Button>
    </>
  );
};

export default EventForm;
