import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

interface ViewFilterProps {
  onClick: (view: number) => void;
  selected: number;
}

const viewType: number[] = [1, 2, 3];

export default function ViewFilter(props: ViewFilterProps) {
  const { onClick, selected } = props;
  return (
    <ButtonGroup
      variant="contained"
      aria-label="Basic button group"
      sx={{ mb: 2 }}
    >
      {viewType.map((type) => (
        <Button
          key={type}
          onClick={() => onClick(type)}
          color={selected === type ? "secondary" : "primary"}
        >
          {type}
        </Button>
      ))}
    </ButtonGroup>
  );
}
