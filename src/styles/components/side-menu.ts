import { styled } from "..";

export const MenuContainer = styled("div", {
  position: "absolute",
  right: 0,
  zIndex: 10,
  padding: 50,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  maxHeight: "900px",
  height: "100%",
  width: 540,
  background: "$gray800",

  svg: {
    alignSelf: "end",
    fontWeight: "bold",
    cursor: "pointer",

    "&:hover": {
      opacity: 0.7,
    },
  },

  footer: {
    display: "flex",
    flexDirection: "column",
    fontSize: "$md",
    width: "100%",

    div: {
      margin: "32px 5px",

      p: {
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  overflowY: "auto",

  display: "flex",
  flexDirection: "column",
  gap: 10,

  h3: {
    fontSize: "$xl",
  },
});
