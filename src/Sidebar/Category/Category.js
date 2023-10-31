import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Abstract Art"
          title="Abstract Art"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Landscape Painting"
          title="Landscape Painting"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Cityscape Art"
          title="Cityscape Art"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Mountain Landscape"
          title="Mountain Landscapes"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
