import React from "react";
import picture from "../assets/social-holding.png";
import ShowClothes from "../components/ShowClothes";
function Home() {
  return (
    <div>
      <img
        src={picture}
        alt=""
        style={{ width: "100%", objectFit: "contain" }}
      />
      <ShowClothes />
    </div>
  );
}

export default Home;
