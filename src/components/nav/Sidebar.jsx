import { Link } from "react-router-dom";

const Sidebar = ({ allCategories }) => {
  return (
    <div id="sidebar" className="web-only">
      <h2>CATEGORIES</h2>
      <Link to={"/home"} className="category-link">
        all
      </Link>
      {allCategories.map((category) => {
        return (
          <Link
            key={`${category.slug}`}
            to={`/${category.slug}`}
            className="category-link"
          >{`${category.slug.replace(/-/g, " ")}`}</Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
