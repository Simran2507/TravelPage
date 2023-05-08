import './App.css';
import { useState } from 'react';
import Data from './Data'
import Tours from './component2/Tours'


function App(){

  const [tours,setTours]=useState(Data);
  function removeTours(id){
    const NewTour= tours.filter(tour => tour.id != id);
    setTours(NewTour);
  }

  if(tours.length==0){
    return(
      <div className="refresh">
        <h2>No tours left</h2>
        <button className="btn-white" onClick={()=> setTours(Data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTours={removeTours}></Tours>
    </div>
  )
}

export default App;
