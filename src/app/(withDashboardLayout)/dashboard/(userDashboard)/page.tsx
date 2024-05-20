import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
  title: "user Dashboard",
  description: "Book your next adventure with Apollo Gears.",
};

export default function page() {


  return (
    <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="128" height="128">
    <circle cx="12" cy="12" r="10" fill="#263238"/>
    <circle cx="12" cy="12" r="5" fill="#C792EA"/>
    <text x="50%" y="50%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="6" fill="#ffffff">mVs</text>
  </svg>
  </div>
  )
}
