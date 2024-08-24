import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,
  gap: 10,

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  h1: {
    margin: '20px 0 5px 0',
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
    lineHeight: 1.4,
  },

  a: {
    marginTop: "2rem",
    display: "block",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 140,
  height: 140,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
  borderRadius: 9999,
  padding: "0.25rem",
  margin: "0rem -1.5rem",

  display: "flex",
  flex: "none",
  order: 1,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,

  img: {
    objectFit: "cover",
  },
});
