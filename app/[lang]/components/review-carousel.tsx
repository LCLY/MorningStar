import React from "react";
import Carousel from "react-material-ui-carousel";
import Rating from "@mui/material/Rating";

export default function CarouselComponent() {
  const [value, setValue] = React.useState<number | null>(4);
  const items = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "James Smith",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "David Jones",
    },
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "William Charles",
    },
  ];

  return (
    <Carousel
      sx={{
        marginTop: "20px",
        display: "flex", // Set the carousel container as a flex container
        flexDirection: "column", // Arrange items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "15px",
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center mt-2">
          <div className="w-5/12 p-4 text-center">
            <Rating name="read-only" value={value} readOnly />
            <p>"{item.review}"</p>
            <h2 className="mt-2">-{item.author}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
