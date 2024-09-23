"use client";

import { Box, Typography } from "@mui/material";
import OperatingHoursSlider from "../common/operation-hour-slider";

const OperatingHoursView = () => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "100%",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          px: "1.12rem",
          py: "0.69rem",
          borderBottom: "1px solid #DAE0E4",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.125rem",
            fontWeight: 500,
            lineHeight: "1.625rem",
            color: "#232F40",
          }}
        >
          Business Hours
        </Typography>
      </Box>

      <Box p="1.5rem" width="100%">
        <Box
          sx={{
            border: "1px solid #ECECF2",
            borderRadius: "0.625rem",
            p: "1.5rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: "1.25rem",
              color: "#232F40",
            }}
          >
            Custom Business Hours
          </Typography>
          {/* main content goes there */}
          <Box
            mt="2.5rem"
            // sx={{
            //   whiteSpace: "nowrap",
            // }}
            width="100%"
          >
            {weekDays.map((weekday, index) => (
              <OperatingHoursSlider
                weekday={weekday}
                key={index}
                index={index}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OperatingHoursView;
