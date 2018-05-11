import React from 'react';
import SimpleCard from './Card';

const CardGen = props => (
  <div>
    {props.deptos.map(text => <SimpleCard titulo={text.name} cuerpo={text.info} link={text.link} cap={text.capital} />)}
  </div>
);

export default CardGen;
