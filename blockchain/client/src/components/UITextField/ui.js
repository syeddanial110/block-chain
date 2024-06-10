import { styled } from "@mui/system";
import { Box, Switch, TextField } from "@mui/material";

export const UIStyledOutlinedField = styled(TextField)(({ theme }) => ({
  backgroundColor: "transparent",
  color: "#ffffff",
  // padding: "10px 0px !important",
  borderRadius: "0.5rem !important",

  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },
  "& .MuiInputBase-root": {
    "> input": {
      color: "#000000",
      padding: "12px 14px 12px 14px",
    },
  },
  "&": {
    borderRadius: "16px !important",
  },
  "& > div": {
    borderRadius: "16px !important",
  },
  "& * > fieldset": {
    borderRadius: "16px !important",
  },
}));

export const UIStyledContainedField = styled(TextField)(({ theme }) => ({
  //   boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  backgroundColor: "#1c1c1c",
  borderRadius: "0.5rem !important",
  "&": {
    borderRadius: "16px !important",
  },
  "& > div": {
    borderRadius: "16px !important",
  },
  "& * > fieldset": {
    borderRadius: "16px !important",
  },
  "& .MuiInputBase-root": {
    "> input": {
      color: "#000000",
      padding: "12px 14px 12px 14px",
      "&::placeholder": {
        color: "white !important",
      },
    },
  },
}));
