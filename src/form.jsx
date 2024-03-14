function submitHandler(event){
  event.preventDefault();
console.log("form was submitted");
}

export default function Form(){
  return(
    <form>
    <input placeholder="Write Something"/>
    <button onClick={submitHandler}>Submit</button>  
    </form>
  );
}