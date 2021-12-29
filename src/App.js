import axios from 'axios';
import React from 'react';
import {useState} from 'react';
import "./App.css";
export default App;

function App() {

  const [request, setRequest] = useState();
  const [details, setDetails] = useState([]);

  const getRequestHandler = async () => {
    const response = await axios.get("http://localhost:4000/get");
    setDetails(response.data.details);
    setRequest("GET");
    
  };

  const GET = (props) => {
      return (
        <div>
          {props.data.length > 0
            ? props.data.map((value) => {
                return (
                  <div>
                    <h3>
                      Name: {value.name}| 
                      Age: {value.age} | 
                      City: {value.city}
                    </h3>
                    <hr />
                  </div>
                );
              })
            : None}
        </div>
      );
    };

    
  const POST = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
  
    const [message, setMessage] = useState(False);
 
    const postRequestHandler = async () => {
      const data = { name, age, city };
           const response = await axios.post("http://localhost:4000/post", data
        );
       
        if (response.data.message) {
          setMessage(True);
        }

  const postRequestHandler = () => {};
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Insert name here"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Insert age here"
      />
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Insert city here"
      />
      <button onClick={postRequestHandler}>Insert</button>
      <hr />
      {message ? <h3>Data inserted succesfully!</h3> : None}
    </div>
  );
};
 
 
const DELETE = (props) => {
  const [message, setMessage] = useState(False);

const deleteRequestHandler = async (name) => {
    const response = await axios.delete(`http://localhost:4000/delete/${name}`
      );
     
      if (response.data.message) {
        setMessage(response.data.message);
      }

};
 
  return (
    <div>
      {!message ? (
        props.data.length > 0 ? (
          props.data.map((value) => {
            return (
              <div onClick={() => deleteRequestHandler(value.name)}>
                <h3>
                  Name: {value.name} 
                  Age: {value.age}  
                  City: {value.city}
                </h3>
                <hr />
              </div>
            );
          })
        ) : None
      ) : (
        <h3>{message}</h3>
      )}
    </div>
  );
};
 



  return (
    <div className="App">
      <button onClick ={getRequestHandler} >GET</button> &nbsp;
      <button onClick ={postRequestHandler}>POST</button> &nbsp;
      <buttonon onClick ={deleteRequestHandler}>DELETE</buttonon> &nbsp;
      {request === "GET" ? <GET data={details} /> : None}
      {request === "POST" ? <POST data={details} /> : None}
      {request === "DELETE" ? <DELETE data={details} /> : None}
    </div>
  );
  
}}