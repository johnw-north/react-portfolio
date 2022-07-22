import Card from "./Card";
import PetrolPal from "../images/PetrolPal.png"
import profilePic from '../images/pill.png';

function Projects() {
    return (
      <div className="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__container">
          <Card 
            title="Petrol Pal"
            image={PetrolPal}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            github="https://github.com/johnw-north/petrol-pal"
            website="https://johnw-north.github.io/petrol-pal/"
            />
          <Card 
            title="WIP"
            image={profilePic}
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            github=""
            website=""
          />
        </div>
      </div>
    );
  }
  
  export default Projects;