import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";
import Button from "../../components/button";
import "./style.scss";
import CategoryIcon from "../../components/CategoryIcon";
import { setSelectedCategory } from "../../storage/redux/actions";

function Home() {
  const { categories, categoryId } = useSelector((state) => state);

  const changeCategory = (id) => {
    const selectedCategory = categories.find((el) => el.categoryId === id);
    const newCategoryId =
      id === 0 || categoryId === selectedCategory.categoryId
        ? 0
        : selectedCategory.categoryId;
    setSelectedCategory(newCategoryId);
  };

  return (
    <div className="home-wrapper">
      <Container
        title="Kategoriler"
        titleIcon={<CategoryIcon />}
        titleClass="category-title"
        classes="category-content"
      >
        <Button
          classes={`category-button ${categoryId === 0 && "active"}`}
          clickHandler={() => changeCategory(0)}
        >
          Tüm Kategoriler
        </Button>
        {categories.map((el, index) => (
          <Button
            key={el.categoryId}
            classes={`category-button ${
              categoryId === el.categoryId && "active"
            }`}
            clickHandler={() => changeCategory(index + 1)}
          >
            {el.categoryName}
          </Button>
        ))}
      </Container>
    </div>
  );
}

export default Home;
