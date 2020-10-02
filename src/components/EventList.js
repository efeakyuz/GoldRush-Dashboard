import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

function EvenList() {
  const [events, setEvents] = useState([]);
  const url = "https://goldrush.dokuziki.com";

  const getEvents = useCallback(() => {
    axios({
      method: "GET",
      url: `${url}/event/public`,
      headers: {
        "device-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDA4MDEyMTV9.uOzCUjB1YWEKzP1ji_WyKCaFHpNGb5_A9QhoeYn7t-0",
        "auth-token": "757d6bbe-15b5-4821-8ddf-f9bb313e4fce"
      }
    })
      .then((response) => {
        setEvents(response.data.events);
      })
  }, []);

  const deleteEventApi = id => {
    axios({
      method: "DELETE",
      url: `${url}/event/${id}`,
      headers: {
        "device-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MDA4MDEyMTV9.uOzCUjB1YWEKzP1ji_WyKCaFHpNGb5_A9QhoeYn7t-0",
        "auth-token": "757d6bbe-15b5-4821-8ddf-f9bb313e4fce"
      }
    })
  };
 
  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const deleteEvent = id=> {

    let confirmation = window.confirm(`${id} id li eventi gerçekten silim mi?`);

    if (confirmation) {
      deleteEventApi(id);
      alert("sildim gitti");
    } else {
      alert("o zaman niye sil diyorsun");
    }

  }

  const renderEvents = events && events.map((singleEvent, index) => {
    return (
      <Col xs="4">
        <Card>
          <CardBody>
            <CardTitle><b>{singleEvent.title}</b></CardTitle>
          </CardBody>
          <img src={ singleEvent.vertical_image_asset.file_url } />
          <CardBody>
            <CardText>{singleEvent.description}</CardText>
            <CardLink href={`/detay/${singleEvent.id}`}>Görüntüle</CardLink>
            <CardLink href="#" onClick={() => deleteEvent(singleEvent.id)}>Sil</CardLink>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <Row>
        { renderEvents }
    </Row>
  );
}

export default EvenList;
