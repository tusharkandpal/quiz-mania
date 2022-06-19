import "./CategoryCard.css";
import { Category } from "../../reducer/quizReducer.types";
import { Link } from "react-router-dom";

export const CategoryCard = ({
  _id,
  imgUrl,
  description,
  categoryName,
}: Category): JSX.Element => {
  return (
    <Link to={`/quiz/${_id}`} className="category_card">
      <img src={imgUrl} alt={description} className="category_img" />
      <div className="category_details">
        <h2 className="category_header">{description}</h2>
        <small className="category_name">
          <strong>category: </strong>
          {categoryName}
        </small>
      </div>
    </Link>
  );
};
