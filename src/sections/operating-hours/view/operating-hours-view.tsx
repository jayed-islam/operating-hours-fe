"use client";

import React, { useState } from "react";
import { Box, Typography, Slider, Tooltip } from "@mui/material";
import deleteIcon from "../../../../public/assets/icons/delete_icon.svg";
import plusIcon from "../../../../public/assets/icons/plus_icon.svg";
import ActionButton from "../common/action-button";

const marks = [
  { value: 0, label: "12 AM" },
  { value: 2, label: "2 AM" },
  { value: 4, label: "4 AM" },
  { value: 6, label: "6 AM" },
  { value: 8, label: "8 AM" },
  { value: 10, label: "10 AM" },
  { value: 12, label: "12 PM" },
  { value: 14, label: "2 PM" },
  { value: 16, label: "4 PM" },
  { value: 18, label: "6 PM" },
  { value: 20, label: "8 PM" },
  { value: 22, label: "10 PM" },
  { value: 24, label: "12 AM" },
];
const formatTime = (value: number) => {
  const hours = Math.floor(value);
  const minutes = (value % 1) * 60;
  const period = hours < 12 || hours === 24 ? "AM" : "PM";
  const formattedHour =
    hours === 0 || hours === 12 || hours === 24 ? 12 : hours % 12;
  const formattedMinutes = minutes === 0 ? "00" : `${minutes}`.padStart(2, "0");
  return `${formattedHour}:${formattedMinutes} ${period}`;
};

const OperatingHoursView = () => {
  const [value, setValue] = useState<number[]>([7, 5]);
  const [hovered, setHovered] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const minDistance = 1.5;

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  function valuetext(value: number) {
    return `${value}°C`;
  }
  // const handleDelete = () => {
  //   setDeleted(true); // Remove the line
  // };
  const handleDelete = () => {
    setValue([0, 0]);
    setShowDelete(false);
  };

  const handleAddLine = () => {
    setDeleted(false);
    setValue([12, 5]);
  };

  const getTrackMidpoint = () => {
    const trackRange = value[1] - value[0];
    const trackMidpoint = value[0] + trackRange / 2;
    return `${(trackMidpoint / 24) * 100}%`;
  };

  const isShowDeleteButton = value[1] > 0 || value[0] > 0;

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h5">Operating hours</Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 1,
          mb: 2,
        }}
      >
        Set a schedule when you are available to receive new messages. It will
        automatically change your online/offline status.
      </Typography>

      <div
        className="relative w-full mt-7 group"
        onMouseEnter={() => setShowDelete(true)}
        onMouseLeave={() => setShowDelete(false)}
      >
        <Slider
          value={value}
          min={0}
          max={24}
          marks={marks}
          step={0.5}
          onChange={handleChange}
          getAriaValueText={valuetext}
          disableSwap
          sx={{
            color: "#a946ba",
            padding: 0,
            margin: 0,
            width: "100%",
            "& .MuiSlider-track": {
              position: "relative",
              height: "8px",
            },
            // "& .MuiSlider-track": {
            //   color: "#000",
            //   height: "8px",
            //   position: "relative",
            //   "&::after": {
            //     content: '""',
            //     display: "block",
            //     width: "100%",
            //     height: "50px",
            //     bgcolor: "green",
            //   },
            // },
            "& .MuiSlider-rail": {
              color: "#f1f4f5",
              opacity: 1,
              height: "8px",
              width: "100%",
            },
            "& .MuiSlider-thumb": {
              height: 24,
              width: 24,
              display: isShowDeleteButton ? "flex" : "none",
              backgroundColor: "#fff",
              border: "2px solid #A946BA",
              "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
                boxShadow: "inherit",
              },
              "&::before": {
                display: "none",
              },
              "&::after": {
                content: '""',
                display: "block",
                width: "12px",
                height: "0",
                border: "1px solid #a946ba",
                transform: "rotate(90deg)",
                transformOrigin: "bottom left",
                marginTop: "9px",
              },
            },
            "& .MuiSlider-markLabel": {
              fontSize: "12px",
              color: "#A946BA",
              fontWeight: "bold",
              mt: 5,
              display: "none",
            },
            "& .MuiSlider-valueLabel": {
              fontSize: "13px",
              color: "#425066",
              backgroundColor: "#fff",
              lineHeight: 1,
            },
          }}
          valueLabelDisplay="on"
          valueLabelFormat={(v) => formatTime(v)}
        />
        {/* <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          marginTop={2}
        >
          {[...Array(48)].map((_, index) => (
            <div
              className="h-3 border-[#e2e6e9] border-[2px] "
              key={index}
            ></div>
          ))}
        </Box> */}
        <div className="w-full flex justify-between mt-[0.29rem] group">
          {[...Array(48)].map((_, index) => (
            <div
              className="h-[0.5rem] w-2 bg-[#e2e6e9] group-hover:bg-gray-500"
              key={index}
              style={{
                marginRight: index === 48 ? "" : "2%",
                // marginRight: "2%",
                // marginLeft: "1%"
              }}
            ></div>
          ))}
        </div>

        <div className="mt-[0.44rem] flex justify-between w-full group-hover:opacity-100 opacity-0 transition-all duration-300">
          {marks.map((item, index) => (
            <Typography
              key={index}
              sx={{
                fontSize: "0.6875rem",
                fontWeight: 400,
                lineHeight: "1rem",
                color: "#425066",
              }}
            >
              {item.label}
            </Typography>
          ))}
        </div>

        {/* {showDelete && isShowDeleteButton && (
          <div
            style={{
              position: "absolute",
              top: "75%",
              left: getTrackMidpoint(),
              transform: "translate(-50%, -50%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: showDelete ? 1 : 0,
              transition: "opacity 1s ease",
              zIndex: 9999,
            }}
            className="transition-all duration-500"
          >
            <ActionButton imagePath={deleteIcon} onClick={handleDelete} />
          </div>
        )} */}
        <Tooltip title="Delete this time period" arrow>
          <div
            style={{
              position: "absolute",
              top: "75%",
              left: getTrackMidpoint(),
              transform: "translate(-50%, -50%)",
              // transform: showDelete
              //   ? "translate(-20%, 10px)"
              //   : "translate(-20%, -10px)",
              display: isShowDeleteButton ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              opacity: showDelete ? 1 : 0,
              transition: "opacity 0.3s ease",
              zIndex: 9999,
              cursor: "pointer",
            }}
            className="transition-all translate-y-2"
          >
            <ActionButton imagePath={deleteIcon} onClick={handleDelete} />
          </div>
        </Tooltip>
        <Tooltip title="Add new time period" arrow>
          <div
            style={{
              position: "absolute",
              top: "75%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              // transform: showDelete
              //   ? "translate(-20%, 10px)"
              //   : "translate(-20%, -10px)",
              display: !isShowDeleteButton ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              opacity: showDelete ? 1 : 0,
              transition: "opacity 0.3s ease",
              zIndex: 9999,
              cursor: "pointer",
            }}
            className="transition-all translate-y-2"
          >
            <ActionButton imagePath={plusIcon} onClick={handleAddLine} />
          </div>
        </Tooltip>

        {/* {hovered && !deleted && (
          <div
            style={{
              position: "relative",
              top: "-30px",
              display: "flex",
              justifyContent: "center",
              opacity: hovered ? 1 : 0,
              transform: hovered ? "translateY(0)" : "translateY(10px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <ActionButton onClick={handleDelete} imagePath={deleteIcon} />
          </div>
        )} */}

        {/* {deleted && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <ActionButton onClick={handleAddLine} imagePath={plusIcon} />
          </div>
        )} */}

        {/* <div className="flex items-center gap-5">
          <ActionButton imagePath={deleteIcon} />
          <ActionButton imagePath={plusIcon} />
        </div> */}
      </div>
    </Box>
  );
};

export default OperatingHoursView;
