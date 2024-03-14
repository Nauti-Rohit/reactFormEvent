function handleClick(event){
  console.log("hello");
}

export default function Button(){
  return(
    <button onClick={handleClick}>Click me!</button>
  )
}