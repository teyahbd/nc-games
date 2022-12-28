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
    <div id="sorter-container">
      <div className="sorter-container">
        <label for="sort-by" className="sorter-label">
          SORT BY
        </label>
        <select
          onChange={handleSortByChange}
          value={selectedSortBy}
          name="sort-by"
          className="sorters"
        >
          <option value="created_at" className="sorter-option">
            Date
          </option>
          <option value="votes" className="sorter-option">
            Votes
          </option>
        </select>
      </div>
      <div className="sorter-container">
        <label for="ascending-or-descending" className="sorter-label">
          ORDER
        </label>
        <select
          onChange={handleOrderChange}
          value={selectedOrder}
          name="ascending-or-descending"
          className="sorters"
        >
          <option value="asc" className="sorter-option">
            ASC
          </option>
          <option value="desc" className="sorter-option">
            DESC
          </option>
        </select>
      </div>
    </div>
  );
};

export default Sorters;
