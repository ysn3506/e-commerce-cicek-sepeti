import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";
import Button from "../../components/button";
import "./style.scss";
import CategoryIcon from "../../components/CategoryIcon";

function Home() {
  const { categories } = useSelector((state) => state);

  const renderCategories = () => (
    <>
      <Button classes="category-button">Tüm Kategoriler</Button>
      {categories.map((el) => (
        <Button key={el.categoryId} classes="category-button">{el.categoryName}</Button>
      ))}
    </>
  );
    

    


  return (
    <div className="home-wrapper">
      <Container title="Kategoriler" titleIcon={<CategoryIcon/>} titleClass="category-title" classes="category-content">
        {renderCategories()}
      </Container>
    </div>
  );
}

export default Home;
