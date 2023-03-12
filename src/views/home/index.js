import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";
import Button from "../../components/button";
import Card from "../../components/card";
import "./style.scss";
import CategoryIcon from "../../components/CategoryIcon";
import Leaf from "../../components/leaf";
import { setSelectedCategory } from "../../storage/redux/actions";

function Home() {
  const { categories, categoryId, products } = useSelector((state) => state);
  const selectedCategory = (id) => categories.find((el) => el.categoryId === id);


  const categoryName = selectedCategory(categoryId)?.categoryName||"Tüm Kategoriler";

  const changeCategory = (id) => {
    const newCategoryId =
      id === 0 || categoryId === id
        ? 0
        : id;
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

       <Container
        title={categoryName}
        titleIcon={<Leaf/>}
        titleClass="product-title"
        classes="product-content"
      >
        {products.map(el=><Card  key={el.id} item={el}/>)}

      </Container>
    </div>
  );
}

export default Home;
