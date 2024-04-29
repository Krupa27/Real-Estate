
import React, { useContext, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import "../Properties/Properties.css";
import useProperties from "../../hooks/useProperties";
import { HashLoader } from "react-spinners";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import UserDetailContext from "../../context/UserDetailContext";

const Favourites = () => {
  const [filter, setFilter] = useState("");
  const { data, isError, isLoading, refetch } = useProperties();
  const {
    userDetails: { favourites },
  } = useContext(UserDetailContext);

  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching the data</span>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <HashLoader
          width="80"
          height="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar filter={filter} setFilter={setFilter} />
        <div className="properties flexCenter paddings">
          {data
            .filter((property) => favourites.includes(property.id))
            .filter(
              (property) =>
                property.title.toLowerCase().includes(filter?.toLowerCase()) ||
                property.city.toLowerCase().includes(filter?.toLowerCase()) ||
                property.country.toLowerCase().includes(filter?.toLowerCase())
            )
            .map((card, i) => (
              <PropertyCard card={card} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Favourites;
