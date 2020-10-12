import Axios from 'axios';
import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { API_URL, HEADERS } from "../constants/Api";

function AddCategory(){
    const [name, setName] = useState();
    const [description, setDescription] = useState();

    const data = {
        name: name,
        description: description, 
        is_popular: true
      };

    const newCategory = () => {
        Axios({
          method: "POST",
          url: `${API_URL}/category`,
          headers: HEADERS,
          data: data,
        });
      };
    
      const onNameChange = e => {
        setName(e.target.value);
      }

      const onDescriptionChange = e => {
        setDescription(e.target.value);
    }

      const addCategory = () => {
        let confirmation = window.confirm(`Ekleyeyim mi?`);
        if (confirmation) {
            newCategory();
            alert("Ekleme başarılı");
          } else {
            alert("Eklemiyorum o zaman");
          }
      };

  return (
    <Form>
      <FormGroup row>
        <Label for="name" sm={2}>İsim</Label>
        <Col sm={10}>
          <Input type="text" id="name" placeholder="Bir kategori ismi belirtin..." onChange={onNameChange} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="description" sm={2}>Açıklama</Label>
        <Col sm={10}>
          <Input type="text" id="description" placeholder="Bir açıklama girin..." onChange={onDescriptionChange}/>
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button color="success" onClick={() => addCategory() }>Kaydet</Button>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default AddCategory; 