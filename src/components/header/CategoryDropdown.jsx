const CategoryDropdown = (allCategories) => {
  return (
    <div>
      {/* <NavDropdown title="Categories">
            {allCategories.map((category) => {
              return (
                <NavDropdown.Item
                  key={`${category.slug}`}
                  as={Link}
                  to={`${category.slug}`}
                  className="dropdown-text"
                >
                  {`${category.slug.replace(/-/g, " ")}`}
                </NavDropdown.Item>
              );
            })}
          </NavDropdown> */}
      CATEGORIES
    </div>
  );
};

export default CategoryDropdown;
