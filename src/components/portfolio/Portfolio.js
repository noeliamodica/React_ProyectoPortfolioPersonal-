import './Portfolio.css'
import projects from './db.json'


const Portfolio = () => {
  console.log(projects)

  return (
    <section id='portfolio'>
      <h2> Mis proyectos </h2>
    <div className='portfolio_container'> 
      {projects.map((project) => (
        <div>
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
                        
                
    </div>
    </section>
  );
};

export default Portfolio

