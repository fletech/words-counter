import React from "react";
import { daysBetween } from "../lib/utils";

const today = new Date();

const daysLastTime = daysBetween(new Date("2024-01-01"), today);

export default function Footer() {
  console.log(daysLastTime);
  return (
    <footer className="footer">
      <small>&copy; Copyright by Facundo</small>
      <small>Last checked: {daysLastTime} days ago</small>
    </footer>
  );
}
