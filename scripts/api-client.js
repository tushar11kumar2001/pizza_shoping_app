//Network call code..
 async function toNetworkCall(){
  const URL = 'https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json';
  try{
  const response = await fetch(URL); 

  const object = await response.json();
  // console.log('tushar',object instanceof Object);
  return object;
  }
  catch(err){
    console.log(' Some error in  api call ' , err);
    throw err;
  }
 
}
export default toNetworkCall;


