import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Row } from "reactstrap";
import DeleteIcon from '@material-ui/icons/Delete';
import {API_URL, HEADERS} from "../constants/Api";

const useStyles = makeStyles({
  root: {
    marginTop: '2rem',
    marginRight:'1',
    marginLeft:'4rem',
    width: 310,
    height: 300
  },
  media: {
    height: 150,
  },
});


function EvenList() {
  const [events, setEvents] = useState([]);
  const classes = useStyles();

  const getEvents = useCallback(() => {
    axios({
      method: "GET",
      url: `${API_URL}/admin/event`,
      headers: HEADERS
    }).then((response) => {
      setEvents(response.data.events);
    });
  }, []);

  const deleteEventApi = (id) => {
    axios({
      method: "DELETE",
      url: `${API_URL}/event/${id}`,
      headers: HEADERS
    });
  };

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  const deleteEvent = (id) => {
    let confirmation = window.confirm(`${id} id li eventi gerçekten silim mi?`);

    if (confirmation) {
      deleteEventApi(id);
      alert("sildim gitti");
    } else {
      alert("o zaman niye sil diyorsun");
    }
  };

  const renderEvents =
    events &&
    events.map((singleEvent, index) => {
      return (
      <Card className={classes.root}>
            <CardActionArea >
              <CardMedia
                className={classes.media}
                image={singleEvent.vertical_image_asset.file_url}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2" >
                {singleEvent.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {singleEvent.id}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={`/detay/${singleEvent.id}`}>
                Görüntüle
              </Button>
              <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<DeleteIcon />}
        onClick={() => deleteEvent(singleEvent.id)}
      >
        Sil
      </Button>
            </CardActions>
          </Card>


    /*  <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image} href={`/detay/${singleEvent.id}`}>
              <img className={classes.img} alt="complex" src={singleEvent.vertical_image_asset.file_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={4} sm auto container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="title1">
                {singleEvent.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                {singleEvent.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  ID: {singleEvent.id}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }} onClick={() => deleteEvent(singleEvent.id)}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div> */
      );
    });

  return (
    <Row>
      {renderEvents}
    </Row>
  );
}

export default EvenList;
