import Card from "./Card";
import PetrolPal from "../images/PetrolPal.png"

function Projects() {
    return (
      <div className="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__container">
          <Card 
            title="Petrol Pal"
            image={PetrolPal}
            description="An app to calculate the fuel cost of a journey, for a user's car. Made with React and utilises GoogleMaps API for location requests. Additionally,  an implemented card system to allow multiple journey calculations."
            github="https://github.com/johnw-north/petrol-pal"
            website="https://johnw-north.github.io/petrol-pal/"
            />
        </div>
      </div>
    );
  }
  
  export default Projects;