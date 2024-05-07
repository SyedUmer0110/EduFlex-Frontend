import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import VerticalLayout from "./VerticalLayout";

const Layout = ({ children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token){
      navigate("/signin")
    }
  },[])

  return (
    <div className="layout">
      <VerticalLayout children={children} />
    </div>
  );
};

export default Layout;
