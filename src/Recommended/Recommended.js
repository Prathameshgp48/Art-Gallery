import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Abstract Art" title="Abstract Art" />
          <Button onClickHandler={handleClick} value="Cityscape Art" title="Cityscape Art" />
          <Button onClickHandler={handleClick} value="Mountain Landscape" title="Mountain Landscape" />
          <Button onClickHandler={handleClick} value="Landscape Painting" title="Landscape Painting" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
