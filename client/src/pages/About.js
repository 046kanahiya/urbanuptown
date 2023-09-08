import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to UrbanUptown, your ultimate destination for discovering the finest treasures right from your local community. Our platform brings the charm of neighborhood boutiques and stores directly to your fingertips. Explore a curated collection of unique items, from handmade crafts to specialty foods, all sourced from the heart of your locality. With Urban UpTown, you're not just shopping, you're supporting local businesses and connecting with the essence of your community. Browse, shop, and discover the magic of your neighborhood, all in one convenient place
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
