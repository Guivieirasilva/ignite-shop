import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1080px) / 2))",
  marginLeft: "auto",
  marginTop: 'auto',
  marginBottom: 'auto',
  minHeight: "565px",
});

export const Product = styled("div", {
  background: "linear-gradient(100deg, #1ea483 0%,#7465d4 100% )",
  borderRadius: "8px",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    div: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      strong: {
        fontSize: "$lg",
        color: "$gray100",
      },
      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },

    button: {
      zIndex: 1000,
      background: "$green500",
      border: 0,
      borderRadius: "8px",
      padding: "12px",
      cursor: "pointer",

      svg: {
        color: "$white",
      },

      "&:hover": {
        opacity: 0.8,
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
