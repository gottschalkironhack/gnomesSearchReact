import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardHeader,
} from 'reactstrap';

const Gnome = ({ gnome }) => {
  const {
    name,
    age,
    weight,
    height,
    hair_color,
    professions,
    friends,
    thumbnail
  } = gnome;

  const friendsUX = friends.map((friend, index) => {
    return <li key={index}>{friend}</li>
  });

  const professionsUX = professions.map((profession, index)=> {
    return <li key={index}>{profession}</li>
  });

  return (
    <Col className="mb-4" sm="12">
      <Card>
        <img className="card-img-top" src={thumbnail} alt="Gnome Portrait"/>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          <CardTitle>
            Age:
            {" "}{age}
          </CardTitle>
          <CardSubtitle>
            height:
            {" "}{height}
          </CardSubtitle>
          <CardSubtitle>
            weight:
            {" "}{weight}
          </CardSubtitle>
          <CardText>
            Hair color:
            {" "}{hair_color}
          </CardText>
          Friends:
          <ul>  
            {friendsUX}
          </ul>
          Professions:
          <ul>  
            {professionsUX}
          </ul>   
        </CardBody>
      </Card>
    </Col>
  );
};

Gnome.propTypes = {
  gnome: PropTypes.object.isRequired,
};

export default Gnome;
