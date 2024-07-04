import React from "react";
import "./Loader.css";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  loading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ size = "md", loading }) => {
  if (!loading) return null;

  return <div className={`loader loader-${size}`}></div>;
};

export default Loader;
