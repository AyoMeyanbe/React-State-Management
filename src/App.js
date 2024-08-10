import { useState } from "react";
import AnimalShow from "./Components/AnimalShow";
import './Components/App.css'


function App () {
    const [animals, setAnimals] = useState([]);

    const getRandomAnimal = () => {
        const animalArray = ['cow', 'bird', 'cat', 'dog', 'gator', 'horse'];
        const num = Math.floor(Math.random()*animalArray.length);
        return animalArray[num];
    }

    const handleClick = () => {
        console.log("animals",animals);
        const randomAnimal = getRandomAnimal();
        console.log("random animal", randomAnimal)
        setAnimals([...animals, randomAnimal]);
        // '...' loops through items in animals array and adds to it
        console.log(animals);
    }

    const renderAnimals = animals.map((animal, index) => {
        return <AnimalShow key={index} type={animal} />
    })
    return(
        <div className="app">
            <button onClick={handleClick}>Add Animal</button>
            <div className="animal-list">{renderAnimals}</div>
        </div>
        
    );
}

export default App;