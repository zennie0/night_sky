import { useState } from "react";
import "./App.css";


function App() {

  const [date, setDate] = useState("");
  const [data, setData] = useState(null);
  const [loading,setLoading]=useState(false);

  const getSpaceData = () => {
    setLoading(true);
    fetch(`http://localhost:5000/space?date=${date}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      });
  };


  

  if(loading){return(<div className="spinner"></div>)}
  return (
    <>
    
      <input className="input_date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      <button className="btn" onClick={getSpaceData}>
        Show Sky
      </button>

      {data && (
        <div>
          <h1>{data.title}</h1>

          <img
            src={data.url}
            alt={data.title}
            width="400"
          />
          <br />
          
          <p>{data.explanation}</p>
        </div>
      )}
    </>
  );
}

export default App;