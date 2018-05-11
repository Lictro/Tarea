import React from 'react';
import { Card, CardText, CardMedia, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Titulo from './Titulo';
import Cuerpo from './Cuerpo';

const styles = {
  width: '70%',
  margin: '0 auto',
  overflowY: 'auto'
};

const style = {
  margin: 12,
};

const truevalue = true;

const SimpleCard = (props) => (
  <Card style={styles}>
    <CardText><Titulo name={props.titulo} /></CardText>
    <CardMedia overlay={<CardTitle title={props.cap} />}>
      <img src={props.link} alt="" />
    </CardMedia>
    <CardText><Cuerpo body={props.cuerpo} /></CardText>
    <CardActions>
      <RaisedButton label="VER VIDEO" primary={truevalue} style={style} onClick={() => { window.open(props.video); }} />
    </CardActions>
  </Card>
);


export default SimpleCard;
