
import { useState, useEffect } from "react";
import './Portfolio.css'
import axios from "axios";


const Portfolio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("db.json").then((res) => setData(res.data));
  }, []);

  return data.map((projects) => {

  return (
    <section id='portfolio'> Portfolio 
    <h2> Mis proyectos </h2>
    <div className='container portfolio_container'>
      <article className='portfolio_item'>
      <img src={projects.img} alt='img-product-card' />
        <h3>{projects.nombre}</h3>
      <div className='portfolio_item-image'> </div>
      <h3> Este es un portfolio item titulo </h3>
      <a href='www.github.com' className='btn' > Github </a>
      <a href='www.github.com' className='btn btn-primary' > Live demo </a>
      
      </article>

    </div>

    </section>
  );
});
};

export default Portfolio

