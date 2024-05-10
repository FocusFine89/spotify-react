import { useState } from "react";
import { Card } from "react-bootstrap";

const StaticElement = (props) => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + props.name
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error in fetching songs");
        }
      })
      .then((response) => {
        setData(response.data);
      });
  };
  return (
    {data.slice(1, 8).map((song)=>{
        return(
          
        )
    })

    }
    
  );
};

export default StaticElement;
