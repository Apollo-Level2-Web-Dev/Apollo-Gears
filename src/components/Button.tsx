"use client"
import React from 'react'

const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("Buy Now");
      }}
    >
      Client COmponent
    </button>
  );
}

export default Button