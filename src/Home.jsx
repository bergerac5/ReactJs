import { useState } from "react";
const Home = () => { 

  const [name,setName] = useState('Bergerac');
  const [age,setAge] = useState(25);
  const handleClick = (e) =>{
    setName('Devloper',e);
    console.log(e);
    setAge(age+1);
  }

  // const handleClickAgain = (name, e) =>{
  //   console.log('====================================');
  //   console.log(`Check ${name}` , e.target);
  //   console.log('====================================');
  // }

    return ( 
      <div className="home">
        <h2>HomePage</h2>
        <p>{name} is {age} of exprience</p>
        <p></p>
        <button onClick={handleClick}>Click me</button>
        {/* <button onClick={(e) => handleClickAgain('Bergerac',e)}>Click me again</button> */}
      </div>  
     );
}
 
export default Home;