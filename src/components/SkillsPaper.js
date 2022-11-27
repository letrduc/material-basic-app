import React from "react";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const ListItem = styled("span")(() => ({
  margin: "1px",
}));

function SkillsPaper({ skills }) {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
        boxShadow: 0,
        backgroundColor: "rgb(145,72,0)",
      }}
      component="span"
    >
      {skills?.map((skill) => (
        <ListItem key={skill}>
          <Chip
            size="small"
            color="primary"
            label={skill}
            sx={{ paddingBottom: "2px", backgroundColor: "rgb(222,57,16)" }}
          />
        </ListItem>
      ))}
    </Paper>
  );
}

export default SkillsPaper;
