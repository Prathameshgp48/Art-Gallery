import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={150000}
          title="Rs.0 - Rs.1,50,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={160000}
          title="Rs.1,50,001 - Rs. 1,60,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={170000}
          title="Rs. 1,60,001 - Rs. 1,70,000"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={195000}
          title="Over Rs. 1,70,000"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
