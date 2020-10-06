import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';
import {API_URL, HEADERS} from "../constants/Api";

const Detail = (props) => {

  const [eventDetail, setEventDetail] = useState({});

  const { id } = useParams();

  const getEvent = useCallback(() => {
    axios({
      method: "get",
      url: `${API_URL}/event/${id}`,
      headers: HEADERS
    })
      .then((response) => {
        setEventDetail(response.data.event);
      })
  }, [id]);

  useEffect(() => {
    getEvent();
  }, [eventDetail, getEvent]);

  return (
    <div>
      <br />
      <h1 style={{textAlign: 'center'}}>{eventDetail.title}</h1>
      <br />
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>ID</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="id" value={eventDetail.id} />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Share Code</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="share code" value={eventDetail.share_code} />
      </InputGroup>
      <br />
      <InputGroup size="lg">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Title</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="title" value={eventDetail.title}/>
      </InputGroup>
      <br />

      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>description</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="description" value={eventDetail.description} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>country_id</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="country_id" value={eventDetail.country_id} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>city_id</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="city_id" value={eventDetail.city_id} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>place</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="place" value={eventDetail.place} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>address</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="address" value={eventDetail.address} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>lat</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="lat" value={eventDetail.lat} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>lon</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="lon" value={eventDetail.lon} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>upper_gift_limit</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="upper_gift_limit" value={eventDetail.upper_gift_limit} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>gift_acceptance</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="gift_acceptance" value={eventDetail.gift_acceptance} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>is_private</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="is_private" value={eventDetail.is_private} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>is_shareable</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="is_shareable" value={eventDetail.is_shareable} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>is_draft</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="is_draft" value={eventDetail.is_draft} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>start_date</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="start_date" value={eventDetail.start_date} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>end_date</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="end_date" value={eventDetail.end_date} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>lat</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="lat" value={eventDetail.lat} />
      </InputGroup>
      <br /><br />
      <Button outline color="success">kayıt et</Button>
      <br /><br />
    </div>
  );
}

export default Detail;