import './Portfolio.css'
import projects from './db.json'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Portfolio = () => {
  console.log(projects)

  const responsive = {
    superLargeDesktop: {
       // the naming can be any, depends on you.
       breakpoint: { max: 4000, min: 3000 },
       items: 5,
    },
    desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 3,
    },
    tablet: {
       breakpoint: { max: 1024, min: 464 },
       items: 2,
    },
    mobile: {
       breakpoint: { max: 464, min: 0 },
       items: 1,
    },
 };

  return (
    <section id='portfolio'>
      <h2> Mis proyectos </h2>
    <div className='portfolio_container'> 
    <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
      {projects.map((project) => (
        <div className='item-p'>
        <div>
        {project.nombre}
        </div>
        <img
            src={project.imagen}
            className='imagen'
            alt={project.nombre}
        />
        <div>
        {project.descripcion}
        </div>
        <button>
        {project.github}
        </button>
        
       </div>

         ))
        }
      </Carousel>                
                
    </div>
    </section>
  );
};

export default Portfolio

