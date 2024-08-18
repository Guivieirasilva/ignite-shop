import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignContent: "flex-start",
  minHeight: "100vh",
  justifyContent: "center",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  button: {
    background: "$gray800",
    border: "none",
    padding: "0.725rem",
    borderRadius: "6px",

    "&:hover": {
      opacity: 0.7,
    },
    svg: {
      color: "$gray100",
      weight: "bold",
    },
  },
});

export const Button = styled("button", {
  marginTop: "auto",
  backgroundColor: "$green500",
  border: 0,
  color: "$white",
  borderRadius: 8,
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "medium",

  "&:hover": {
    backgroundColor: "$green300",
  },

  "&:not(:disabled):disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },
});
