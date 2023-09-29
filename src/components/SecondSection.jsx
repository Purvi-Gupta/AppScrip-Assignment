import { useState } from "react";
import ProductCard from "./ProductCard";

function SecondSection() {
  return (
    <>
      <div className="second-section">
        <h1>Elevate Your Craft</h1>
        <div className="row1">
          <div className="featureCard">
            <h1>Unlock Your ABC Earning Potential</h1>
            <p>
              Are you ready to take your earning potential to the next level?
              With ABC, you have multiple avenues to monetize your content
              seamlessly. From subscriptions and tips to merchandise sales and
              NFTS, ABC helps you diversify your revenue streams and maximize
              your income.
            </p>
            <img src="/images/Frame 48101613 2.png" className="img1" />
            <img src="/images/image 15.png" className="img2" />
          </div>
          <div className="featureCard">
            <h1>Boost Your Sales with Built-in E-commerce</h1>
            <p>
              Take control of your brand and boost your sales with ABC's
              built-in e-commerce functionality. Showcase and sell your
              exclusive products, whether it's merchandise, digital downloads,
              or personalized experiences. Integrate your store effortlessly and
              turn your creative ideas into profitable ventures.
            </p>
            <img src="/images/proimg1.svg" className="img3" />
          </div>
        </div>
        <div className="row2">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </>
  );
}
export default SecondSection;
