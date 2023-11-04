import { useParams } from "react-router-dom";
import { supabase } from "../client";
import { useEffect, useState } from "react";

const CrewMate = () => {
    const { id } = useParams();
    const category = [
        "Captain",
        "Engineer",
        "Medic",
        "Pilot",
        "Scientist",
        "Soldier",
      ]
      const [ability, setAbility] = useState([
        "Agility",
        "Accelerated Healing",
        "Cold Resistance",
        "Durability",
        "Stealth",
        "Energy Absorption",
        "Flight",
        "Danger Sense",
        "Underwater breathing",
        "Marksmanship",
        "Weapons Master",
        "Power",
        "Animal Attributes",
        "Longevity",
        "Intelligence",
        "Super Strength",
        "Cryokinesis",
        "Telepathy",
        "Energy Armor",
        "Energy Blasts",
        "Duplication",
        "Size Changing",
        "Density Control",
        "Stamina",
        "Astral Travel",
        "Audio Control",
        "Dexterity",
        "Omnitrix",
        "Super Speed",
        "Possession",
        "Animal Oriented Powers",
        "Weapon-based Powers",
        "Electrokinesis",
        "Darkforce Manipulation",
        "Death Touch",
        "Teleportation",
        "Enhanced Senses",
        "Telekinesis",
        "Energy Beams",
        "Magic",
        "Hyperkinesis",
        "Jump",
        "Clairvoyance",
        "Dimensional Awareness",
        "Power Nullifier",
        "Omni-lingualism",
        "Omnipotent",
        "Omniscient",
        "Photographic Reflexes",
        "Plant Control",
        "Sonic Scream",
        "Summoning",
        "Enhanced Memory",
        "Reflexes",
        "Sub-Mariner",
        "Radiation Absorption",
        "Intuitive aptitude",
        "Vision - Telescopic",
        "Toxin and Disease Control",
        "Molecular Combustion",
        "Vision - Microscopic",
        "Melting",
        "Wind Control",
        "Super Breath",
        "Wallcrawling",
        "Vision - Night",
        "Vision - Infrared",
        "Grim Reaping",
        "Matter Absorption",
        "The Force",
        "Resurrection",
        "Terrakinesis",
        "Vision - Heat",
        "Vitakinesis",
        "Radar Sense",
        "Qwardian Power Ring",
        "Weather Control",
        "Web Creation",
        "Reality Warping",
        "Odin Force",
        "Symbiote Costume",
        "Speed Force",
        "Phoenix Force",
        "Molecular Dissipation",
        "Vision - X-Ray",
        "Vision - Thermal",
        "Webbed Slinging",
        "Reality Warping",
        "Odin Force",
        "Symbiote Costume",
        "Speed Force",
        "Phoenix Force",
        "Molecular Dissipation",
        "Vision - X-Ray",
        "Vision - Thermal",
        "Webbed Slinging",
      ]);
    const [form, setForm] = useState({
        name: "",
        ability: "",
        color: "",
        category: category[Math.floor(Math.random() * category.length)],
      });
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
      };

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
          console.log(hero)
          setForm({
            name: hero.name,
            ability: hero.hero_powers, 
            color: hero.color,
            category: hero.category,
          })
        }
      }

    useEffect(() => {
        getMate();
    }, []);
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        setForm({
          ...form,
          category: form.category || category[Math.floor(Math.random() * category.length)],
        });
        console.log(form,"form");
        // console.log(form);
        // console.log(Math.floor(Math.random() * category.length));
        const { data, error } = await supabase
          .from("superhero")
          .update([
            {
              name: form.name,
              hero_powers: form.ability,
              color: form.color,
              category: form.category,
            },
          ])
          .eq('id', id)
          .select();
    
        if (error) {
          alert(error.message);
        }
        if (data) {
          alert("Super Hero Updated");
        }
      };
    
  return (
    <div>
        
        <div className="content">
      <h1>Update Super Hero</h1>
      <form className="superhero-form" onSubmit={handleSubmit}>
        <div className="left">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name of Super Hero"
            type="text"
          />

          <label htmlFor="ability">Primary Ability:</label>

          <input
            list="ability"
            value={form.ability}
            onChange={handleChange}
            placeholder="Enter Super Hero Ability"
            name="ability"
          />
          <datalist id="ability">
            {ability &&
              ability.map((ability, key) => {
                return <option key={key} value={ability} />;
              })}
          </datalist>
        </div>

        <div className="color">
          <label>Choose a color:</label>

          <select name="color" value={form.color} onChange={handleChange}>
            <option value="">Select a color</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
            <option value="grey">Grey</option>
          </select>
        </div>

        <button>Submit</button>
      </form>
    </div>
    </div>

  )
}

export default CrewMate