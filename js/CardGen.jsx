import React from 'react';
import SimpleCard from './Card';

const CardGen = (props) => (
  <div>
    {props.deptos.map(text => <div><SimpleCard titulo={text.name} cuerpo={text.info} link={text.link} cap={text.capital} video={text.video} /><br /></div>)}
  </div>
);

export default CardGen;
