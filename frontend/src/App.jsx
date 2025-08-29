import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailed from "./pages/NoteDetailPage.jsx";
import { toast } from "react-hot-toast";

const App = () => {
  return (
    <div>
       <button onClick={() =>toast.success("success")}>Click me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailed />} />
      </Routes>
    </div>
  );
};

export default App;
