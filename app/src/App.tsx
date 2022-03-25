import React, { useReducer } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import './App.css';

import Locations from "./components/Locations/Locations";
import InventoryContext, { initialState } from "./context";
import locationReducer from "./components/Locations/reducer";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(locationReducer, initialState);
  const value = { state, dispatch };
  return (
    // <InventoryContext.Provider value={value}>
    <InventoryContext.Provider value={value}>
      <Navbar >
        <Nav>
          <Nav.Link href="#dashboard">Dashboard</Nav.Link>
          <Nav.Link href="#locations">Locations</Nav.Link>
          <Nav.Link href="#accounts">Accounts</Nav.Link>
        </Nav>
      </Navbar>
    </InventoryContext.Provider>
  );
};

export default App;
