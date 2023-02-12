import { useState} from 'react'
import Progress from './Progress';

const  Home = () => {

    // const [name, setName] = useState('mario');
    // const[age, setAge] = useState(25);
    // const handleClick = (e) => {
    //     setName('luigi');
    //     setAge(30);
    //     console.log('hello guys', e);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly"
    defer
  ></script>
    return (
        <div className="home">
            <Progress />
            {/* <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button> */}
        </div>
      );
}
 
export default Home; 
