import React, { useContext, useState, FormEvent, useEffect } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import InventoryContext from "../../context";
import ILocation from "../../model";
const LocationForm: React.FC = () => {
  const { state: { locations, selectedLocation } } = useContext(InventoryContext);
  const [location, setLocation] = useState<ILocation>({});

  useEffect(() => {
    // console.log('show modal')
    if (selectedLocation !== undefined) {
      setLocation(locations[selectedLocation])
    }
  }, [location, locations, selectedLocation]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('submit Clicked')
    e.preventDefault();
    console.log(e)
    console.log(e.currentTarget.value)
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Location Name"
          as="input"
          name="name"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Address" name="address"
          defaultValue={location ? location.address : ''} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control placeholder="zipcode" name="zipcode"
          defaultValue={location ? location.zipcode : ''} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control placeholder="city" name="city"
          defaultValue={location ? location.city : ''} />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control placeholder="state" name="state"
          defaultValue={location ? location.state : ''} />
      </InputGroup>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default LocationForm;
