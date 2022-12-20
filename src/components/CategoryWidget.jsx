const CategoryWidget = ({ allCategories, currentCategory }) => {
  const categoryData = allCategories.filter((category) => {
    return category.slug === currentCategory;
  });

  return (
    <div id="category-widget">
      <div id="category-text-container">
        <h2>{`${categoryData[0].slug.replace(/-/g, " ")}`}</h2>
        <p className="web-only">{`${categoryData[0].description}`}</p>
      </div>
    </div>
  );
};

export default CategoryWidget;
