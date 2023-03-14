import React from "react";
import { useSelector } from "react-redux";
import Container from "../../components/container";
import Button from "../../components/button";
import Card from "../../components/card";
import CategoryIcon from "../../assets/categoryIcon";
import Leaf from "../../assets/leaf";
import {
  setPaginationIndex,
  setSearchKeyword,
  setSelectedCategory,
} from "../../storage/redux/items/actions";
import { updateProductList, querySearchResults } from "../../utils/helpers";
import LoadingSpinner from "../../components/loading-spinner";
import CampaignCard from "../../components/campaign-card";
import InfiniteScroll from "react-infinite-scroller";
import { store } from "../../storage/store";

function Home() {
  const {
    categories,
    categoryId,
    products,
    loading,
    searchedKeyword,
    paginationIndex,
    totalProductAmount,
  } = useSelector((state) => state.items);

  const selectedCategory = (id) =>
    categories.find((el) => el.categoryId === id);

  const categoryName = () => {
    if (searchedKeyword !== "") {
      return (
        <div className="product-title return">
          <span>
            <span className="query-item">{searchedKeyword}</span> ile ilgili
            sonuçlar
          </span>
          <Button classes="return" clickHandler={() => changeCategory(0)}>
            Geri Dön
          </Button>
        </div>
      );
    }
    return selectedCategory(categoryId)?.categoryName || "Tüm Kategoriler";
  };

  const changeCategory = (id) => {
    const newCategoryId = id === 0 || categoryId === id ? 0 : id;
    setSelectedCategory(newCategoryId);
    setPaginationIndex(1);
    setSearchKeyword("");
    updateProductList();
  };

  const fetchMoreItems = () => {
    if (loading || paginationIndex === -1) {
      return;
    }
    setPaginationIndex(paginationIndex + 1);
    const _paginationIndex = store.getState().items.paginationIndex;
    const _searchedKeyword = store.getState().items.searchedKeyword;
    const _totalProductAmount = store.getState().items.totalProductAmount;
    if (_paginationIndex >= 1 && products.length < _totalProductAmount) {
      _searchedKeyword.length > 0
        ? querySearchResults(_searchedKeyword, paginationIndex)
        : updateProductList(paginationIndex);
    }
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
            isDisable={searchedKeyword !== ""}
          >
            {el.categoryName}
          </Button>
        ))}
      </Container>

      <Container
        title={categoryName()}
        titleIcon={<Leaf />}
        titleClass="product-title"
        classes={`product-content`}
      >
        <InfiniteScroll
          loadMore={fetchMoreItems}
          hasMore={products.length < totalProductAmount}
          className="product-scroller"
          initialLoad={false}
        >
          {products.map((el) => (
            <Card key={el.productId} item={el} />
          ))}
        </InfiniteScroll>
        {loading && <LoadingSpinner />}
      </Container>
      <Container classes="campaign">
        <CampaignCard
          images={{
            big: "https://res.cloudinary.com/durtbp9be/image/upload/v1678532307/ciceksepeti/campaign/Rectangle_4012_2x_dzfgl4.png",
            small:
              "https://res.cloudinary.com/durtbp9be/image/upload/v1678532307/ciceksepeti/campaign/Rectangle_4012_nwcaur.png",
          }}
          classes="pink"
          buttonContent="Detaylı Bilgi"
        >
          <p>75 TL Üzerine Teslimat Ücreti Bizden</p>
        </CampaignCard>
        <CampaignCard
          images={{
            big: "https://res.cloudinary.com/durtbp9be/image/upload/v1678532308/ciceksepeti/campaign/Rectangle_4013_2x_dk0a2m.png",
            small:
              "https://res.cloudinary.com/durtbp9be/image/upload/v1678532308/ciceksepeti/campaign/Rectangle_4013_rlzxun.png",
          }}
          classes="blue"
          buttonContent="Hediye Ürünleri"
        >
          <p>Hediye Kategorisi için Sepette %15 İndirim</p>
        </CampaignCard>
        <CampaignCard
          images={{
            big: "https://res.cloudinary.com/durtbp9be/image/upload/v1678532308/ciceksepeti/campaign/Rectangle_4013-1_2x_i1zrqv.png",
            small:
              "https://res.cloudinary.com/durtbp9be/image/upload/v1678532308/ciceksepeti/campaign/Rectangle_4013-1_axiju5.png",
          }}
          classes="green"
          buttonContent="Detaylı Bilgi"
        >
          <p>Kırtasiye Kategorisi için Sepette %15 İndirim</p>
        </CampaignCard>
      </Container>
    </div>
  );
}

export default Home;
