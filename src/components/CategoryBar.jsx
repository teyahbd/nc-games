const CategoryBar = ({ allCategories, currentCategory }) => {
  const categoryData = allCategories.filter((category) => {
    return category.slug === currentCategory;
  });

  return (
    <div>
      <h2 className="category-title">{`${categoryData[0].slug.replace(
        /-/g,
        " "
      )}`}</h2>
      <p>{`${categoryData[0].description}`}</p>
    </div>
  );
};

export default CategoryBar;
