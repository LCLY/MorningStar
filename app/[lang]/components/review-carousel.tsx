"use client";

import React from "react";
import Carousel from "react-material-ui-carousel";
import Rating from "@mui/material/Rating";

export default function CarouselComponent() {
  const items = [
    {
      star: 3,
      review:
        "Consectetur adipiscing elit, Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "James Smith",
    },
    {
      star: 4,
      review:
        "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur adipiscing elit, et dolore magna aliqua. Ut enim ad minim veniam",
      author: "David Jones",
    },
    {
      star: 5,
      review:
        "Adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      author: "William Charles",
    },
  ];

  return (
    <Carousel
      swipe
      duration={500}
      animation="slide"
      fullHeightHover
      navButtonsAlwaysVisible
      sx={{
        pt: 2,
        pb: 4,
        marginTop: "20px",
        borderTop: "1px solid #e2e2e2",
        borderBottom: "1px solid #e2e2e2",
        display: "flex", // Set the carousel container as a flex container
        flexDirection: "column", // Arrange items vertically
        alignItems: "center", // Center items horizontally
        justifyContent: "center", // Center items vertically
        // boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        // borderRadius: "15px",
      }}
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-center mt-2">
          <div className="w-full lg:w-5/12 p-4 text-center">
            <Rating name="read-only" value={item.star} readOnly />
            <p>&quot;{item.review}&quot;</p>
            <h2 className="mt-2">-{item.author}</h2>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
