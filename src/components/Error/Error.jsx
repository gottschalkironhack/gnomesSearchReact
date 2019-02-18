import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';

const errorUX = ({ message }) => {
  return (
    <Row className="m-auto pt-2">
      <Col xs="12" md="12" className="alert alert-danger">{ message }</Col>
    </Row>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default errorUX;
