import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { API_URL, HEADERS } from "../constants/Api";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "@material-ui/core/Modal";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
import { Fade } from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginTop: "2rem",
    marginRight: "1",
    marginLeft: "4rem",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState();
  const [name, setName] = useState();

  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = (updatedId) => {
    setOpen(true);
    setId(updatedId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getCategories = useCallback(() => {
    axios({
      method: "GET",
      url: `${API_URL}/category`,
      headers: HEADERS,
    }).then((response) => {
      setCategories(response.data.categories);
    });
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const updateCategory = () => {
    axios({
      method: "PUT",
      url: `${API_URL}/category/${id}`,
      headers: HEADERS,
      data: { name: name },
    });
  };

  const saveCategory = () => {
    updateCategory();
    handleClose();
    getCategories();
  };

  const renderCategories =
    categories &&
    categories.map((category, index) => {
      return (
        <div key={index}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Kategori ID: {category.id}
              </Typography>
              <Typography variant="h5" component="h2">
                {category.name}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {category.description}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton>
                <EditIcon
                  type="button"
                  onClick={() => handleOpen(category.id)}
                />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      );
    });

  return (
    <Container>
      <IconButton aria-label="delete" href="/addCategory">
        <AddIcon/>
      </IconButton>
      <Row>
        {renderCategories}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>Change Title</InputGroupText>
                </InputGroupAddon>
                <Input
                  value={name}
                  id="change-id"
                  onChange={(event) => setName(event.target.value)}
                />
              </InputGroup>
              <br />
              <Button onClick={() => saveCategory()} color="success">
                Save
              </Button>
            </div>
          </Fade>
        </Modal>
      </Row>
    </Container>
  );
}

export default CategoryList;
