import { useState, useEffect } from "react";
import { CategoryCard } from "../../components/components";
import { getCategories } from "../../services/getDataService";
import "./Home.css";

type Category = {
  _id: string;
  categoryName: string;
  description: string;
  imgUrl: string;
};

export const Home = (): JSX.Element => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getCategories();
      setCategories(response);
    })();
  }, []);

  return (
    <div className="home">
      {categories.map((category: Category) => (
        <CategoryCard {...category} key={category._id} />
      ))}
    </div>
  );
};
