import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";
import Button from "../../components/button";
import Card from "../../components/card";
import "./style.scss";
import CategoryIcon from "../../assets/categoryIcon";
import Leaf from "../../assets/leaf";
import { setSelectedCategory } from "../../storage/redux/actions";
import { updateProductList } from "../../utils/helpers";
import LoadingSpinner from "../../components/loading-spinner";

function Home() {
  const { categories, categoryId, products,loading } = useSelector((state) => state);
  const selectedCategory = (id) =>
    categories.find((el) => el.categoryId === id);

  const homeRef = useRef(null);
  const categoryName =
    selectedCategory(categoryId)?.categoryName || "Tüm Kategoriler";

  const changeCategory = (id) => {
    const newCategoryId = id === 0 || categoryId === id ? 0 : id;
    setSelectedCategory(newCategoryId);
    updateProductList();
  };

  const scrollHandler = () => {
    const { current } = homeRef;
    if (current) {
          console.log(current.scrollTop, current.clientHeight,current.ScrollHeight);
    }

  }
  return (
    <div className="home-wrapper" ref={homeRef} onScroll={scrollHandler}>
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
        titleIcon={<Leaf />}
        titleClass="product-title"
        classes={`product-content ${loading && 'loading'}`}
      >
        {loading ? (
          <LoadingSpinner />
        ) : (
          products.map((el) => <Card key={el.id} item={el} />)
        )}
      </Container>
    </div>
  );
}

export default Home;
