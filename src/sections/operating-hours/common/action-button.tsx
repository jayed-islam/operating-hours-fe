import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  imagePath: string;
  onClick: () => void;
}

const ActionButton = ({ imagePath, onClick }: Props) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        height: "1.75rem",
        width: "1.75rem",
        bgcolor: "#fff",
        // padding: "0.25rem 0.625rem",
        borderRadius: "0.375rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow:
          "0px 1px 4px 0px rgba(169, 171, 177, 0.25), 0px 5px 8px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <Image
        src={imagePath}
        alt="deleteIcon"
        style={{
          height: "1.25rem",
          width: "1.25rem",
        }}
      />
    </Box>
  );
};

export default ActionButton;
