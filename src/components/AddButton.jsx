import React from "react";
import { Box, Button } from "grommet";
import { Add } from "grommet-icons";
import { useNavigate } from "react-router-dom";

export default function AddButton(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Addrecord");
  }
  return (
    <Box round="full" overflow="hidden" background="neutral-1">
      <Button
        icon={<Add />}
        primary
        size="large"
        hoverIndicator
        onClick={handleClick}
      />
    </Box>
  );
}
