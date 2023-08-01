import "./filter.css";

const Filter = () => {
  return (
    <section className="filter-container">
      <div className="filter">
        <input
          type="text"
          readOnly
          placeholder="Filter by Region"
          value=""
          className="filter-input"
        />

        <i className="fa-solid fa-angle-down"></i>
      </div>
    </section>
  );
};

export default Filter;
