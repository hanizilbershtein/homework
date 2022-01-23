import Number from "./Components/Number";
function App() {
  return (
    <div className="App">
      {arr.map((post,index)=>
      <Number key={index}
              num={post}
             color={zoogi(post)}/>
      )
          }   

    </div>
  );
}
const zoogi= nbr=> {
if(nbr==2||nbr==3||nbr==5||nbr==7){
  return "red"
  }
else if(nbr%2==0){
  return "green"  
}

else if(nbr%3==0||nbr%5==0||nbr%7==0||nbr==1){
  return "yellow"
}

else{
  return "red"

}

}

let arr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

export default App;
