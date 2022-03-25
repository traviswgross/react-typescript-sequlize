import React, { useContext, useState } from "react";
import InventoryContext from "../../context";

import locationReducer from "./reducer";
import Table from "react-bootstrap/Table";
import Modal from "react-bootstrap/Modal";
import ModalFooter from "react-bootstrap/ModalFooter";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import LocationForm from "./LocationForm";

const Locations: React.FC = () => {
  // const {
  //   state: { locations, selectedLocation },
  // } = useContext(InventoryContext);
  const { state, dispatch } = useContext(InventoryContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    const val = e.target.value
    const loc = state.locations[val]
    dispatch({ type: 'SET_SELECTED', payload: val })
    setShow(e.target.value);
  };
  return (
    <Container className="p-3">
      {/* <div> */}
      <Table striped bordered hover variant="dark">
        <tbody>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
            <th>Zipcode</th>
            <th></th>
          </tr>
          {state.locations.map((key, index) => (
            <tr key={index + `locId`}>
              <td>{key.address}</td>
              <td>{key.city}</td>
              <td>{key.state}</td>
              <td>{key.zipcode}</td>
              <td>
                <Button
                  value={index}
                  variant="primary"
                  // onClick={handleShow()}
                  onClick={handleEdit}
                >
                  Open
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Site</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LocationForm />
        </Modal.Body>
        {/* <ModalFooter>
          <Button
            variant="primary"
            // onClick={handleSubmit}
          >
            Submit
          </Button>
        </ModalFooter> */}
      </Modal>

      {/* </div> */}
    </Container>
  );
};

export default Locations;
