const Sorters = ({
  setSelectedOrder,
  setSelectedSortBy,
  selectedSortBy,
  selectedOrder,
}) => {
  const handleSortByChange = (event) => {
    console.log(event.target.value);
    setSelectedSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    console.log(event.target.value);
    setSelectedOrder(event.target.value);
  };

  return (
    <div id="sorters">
      <select
        onChange={handleSortByChange}
        value={selectedSortBy}
        name="sort-by"
        id="sort-by-sorter"
      >
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
      </select>
      <select
        onChange={handleOrderChange}
        value={selectedOrder}
        name="ascending-or-descending"
        id="asc-desc-sorter"
      >
        <option value="asc">ASC</option>
        <option value="desc">DESC</option>
      </select>
    </div>
  );
};

export default Sorters;
