import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import { HomeContainer } from "./Home-style";
import Task from "../Task/Task";
import Addtask from "../Addtask/Addtask";

const Home = () => {
  const [taskChange, setTaskChange] = useState(false);
  return (
    <HomeContainer>
      <Navigation />
      <Task taskChange={taskChange} />
      <Addtask setTaskChange ={setTaskChange}/>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
