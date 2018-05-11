import React from 'react';
import { Card, CardText, CardMedia, CardTitle } from 'material-ui/Card';
import Titulo from "./Titulo"
import Cuerpo from "./Cuerpo"

const SimpleCard = (props) => (
  <Card>
    <CardMedia overlay={<CardTitle title="Cabezera Departamental" subtitle={props.cap} />}>
      <img src={props.link} alt="" />
    </CardMedia>
    <CardText><Titulo name={props.titulo} /><Cuerpo body={props.cuerpo} /></CardText>
  </Card>
);

export default SimpleCard;