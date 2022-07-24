import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactList from "../components/ContactList";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/list"} element={<PrivateRouter />}>
          <Route path="" element={<ContactList />} />
        </Route>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
