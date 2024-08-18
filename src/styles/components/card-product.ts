import { styled } from "..";

export const Card = styled("div", {
  display: "flex",
  gap: 10,
  width: "100%",
  margin: '24px 0'
});

export const ImageCard = styled("div", {
  width: '101px',
  height: '94px',
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const InfoProduct = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  fontSize: "$lg",
  gap:'10px',

  button: {
    marginTop: '5px',
    border: 0,
    background: 'transparent',
    fontSize: '$md',
    color: '$green500',
    cursor: 'pointer',

    '&:hover': {
      opacity: 0.8
    }
  }
});
