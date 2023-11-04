import { Link, useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";

const CrewMate = () => {
    const { id } = useParams();

    const [form, setForm] = useState({
        name: "",
        ability: "",
        color: "",
        category: "",
      });
    
     
      

    useEffect(() => {
        const getMate = async () => {
            let { data, error } = await supabase
              .from('superhero')
              .select('*')
              .eq('id', id)
          
            if (error) {
              alert(error.message)
              return
            }
          
            if (data.length > 0) {
              const hero = data[0]
              
              setForm({
                name: hero.name,
                ability: hero.hero_powers, 
                color: hero.color,
                category: hero.category,
              })
            }
          }
         getMate();
        console.log(form);
    }, []);
    
      
    
  return (
        
        <div className="content">
      <h1> Super Hero Profile</h1>
      <div>
        
        <div className="card" style={{backgroundColor:form.color}}>
          {/* <img src="img_avatar.png" alt="Avatar" style="width:100%" /> */}
          <div className="container" >
            <h4>
              <b>Name: {form.name}</b>
            </h4>
            <p>Ability: {form.ability}</p>
            <p>Category: {form.category}</p>
          </div>
          <div className="card_buttons">
            <Link to={`/edit/${id}`}>
            <button>
                <span>Edit</span>
            </button>
            </Link>
          
        </div>
      </div>
     
    </div>
    </div>

  )
}

export default CrewMate