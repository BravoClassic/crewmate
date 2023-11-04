import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <ul className="navigation">
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <Link to={"/create"}>
          <li>Create SuperHero</li>
        </Link>
        <Link to="/view">
          <li>View Mates</li>
        </Link>
      </ul>
    </section>
  );
};

export default Sidebar;
