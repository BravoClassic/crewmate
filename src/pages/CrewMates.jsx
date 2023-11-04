import { useCallback, useEffect, useState } from "react";
import { supabase } from "../client";
import { Link } from "react-router-dom";

const CrewMates = () => {
  const [crewMates, setCrewMates] = useState([]);
const deletMate = useCallback(async (id) => {
    let { error } = await supabase
      .from("superhero")
      .delete()
      .match({ id });
    if (error) {
      alert(error.message);
    } else {
      alert("SuperHero Deleted!");
      getCrewMates();
    }
  }, [])
  const getCrewMates = async () => {
    let { data: superhero, error } = await supabase
      .from("superhero")
      .select("*");
    if (error) {
      alert(error.message);
    } else {
      setCrewMates(superhero);
    }
}
  useEffect(() => {
    
    getCrewMates();
  }, []);
  return (
    <div className="content ">
      
      <h1>
      Super Heroes
      </h1>

      <div className="cards row">
      {crewMates.map((crewMate,key) => {
        return (
            <div key={key} className="card" style={{backgroundColor:crewMate.color}}>
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
              <div className="container" >
                <h4>
                  <b>{crewMate.name}</b>
                </h4>
                <p>{crewMate.hero_powers}</p>
                <p>{crewMate.category}</p>
              </div>
              <div className="card_buttons">
              <Link to={`/${crewMate.id}`}>
                <button>
                    <span>View</span>
                </button></Link>
                <Link to={`/edit/${crewMate.id}`}>
                <button>
                    <span>Edit</span>
                </button>
                </Link>
                <button onClick={() => deletMate(crewMate.id)}>
                    <span>Delete</span>
                </button>
            </div>
            </div>
        );
    }
    )}
    </div>
    </div>  
  );
};

export default CrewMates;
