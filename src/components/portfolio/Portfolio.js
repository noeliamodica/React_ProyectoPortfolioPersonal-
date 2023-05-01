
import './Portfolio.css'
import projects from './db.json'


const Portfolio = () => {
  console.log(projects)

  return (
    <div>

        {projects.map((project) => (
                        <div className='logo-contenedor'>
                        <img
                        src={project.imagen}
                        className='imagen'
                        alt={project.nombre} />
                        <div>
                            {project.nombre}
                        </div>
                  </div>

                            ))
                        }
                        
                
        </div>
  );
};

export default Portfolio

