import React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import Titulo from "./Titulo"
import Cuerpo from "./Cuerpo"

const styles = {
    width: '70%',
    margin: '0 auto',
    overflowY: 'auto'
};

const SimpleCard = (props) => (
  <Card style={styles}>
    <CardText><Titulo name={props.titulo} /></CardText>
    <CardMedia overlay={<CardTitle title="Cabezera Departamental" subtitle={props.cap} />}>
      <img src={props.link} alt="" />
    </CardMedia>
    <CardText><Cuerpo body={props.cuerpo} /></CardText>
  </Card>
);

export default SimpleCard;