import React from "react";
import "./Slide.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import fashion from "../../image/img_shop_fashion.jpeg";
import digital from "../../image/img_shop_digital.jpeg";
import grocery from "../../image/img_shop_grocery.jpeg";
import { useNavigate } from "react-router-dom";

const CarouselArea = () => {
  const navigate = useNavigate();

  return (
    <Carousel>
      <div>
        <img src={fashion} height="700px" className="carousel__image" />
        <div className="carousel__descriptionArea">
          <div className="carousel__description">
            <h2 className="carousel__descriptionTitle">물빠진 청바지!</h2>
            <p className="carousel__descriptionSubTitle">
              이제 막 도착한 패션 청바지를 구경해 보세요.
            </p>
            <button
              className="carousel__descriptionButton"
              onClick={() => navigate("fashion")}
            >
              바로가기
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={digital} height="700px" className="carouselImg" />
        <div className="carousel__descriptionArea">
          <div className="carousel__description">
            <h2 className="carousel__descriptionTitle">신속한 업무처리!</h2>
            <p className="carousel__descriptionSubTitle">
              다양한 디지털 상품을 둘러보세요.
            </p>
            <button
              className="carousel__descriptionButton"
              onClick={() => navigate("digital")}
            >
              바로가기
            </button>
          </div>
        </div>
      </div>
      <div>
        <img src={grocery} height="700px" className="carouselImg" />
        <div className="carousel__descriptionArea">
          <div className="carousel__description">
            <h2 className="carousel__descriptionTitle">신선한 식품!</h2>
            <p className="carousel__descriptionSubTitle">
              농장 직배송으로 더욱 신선한 식료품을 만나보세요.
            </p>
            <button
              className="carousel__descriptionButton"
              onClick={() => navigate("grocery")}
            >
              바로가기
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselArea;
