import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "../components/Shimmer"
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

        // Bo dy Component for body section: It contain all restaurant cards
         // We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index

         const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filterdRestaurants, setfilterRestaurants] = useState([]);

 
  useEffect(()=>{
    getRestaurants();
  },[]); 

 async function getRestaurants (){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4717584&lng=77.1315321&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setfilterRestaurants(json?.data?.cards[2]?.data?.data?.cards)



  } 

 if(!allRestaurants) return null;

//  if(filterdRestaurants?.length === 0):
//     return <h1>No Filtered restaurants is available</h1>;

  return allRestaurants.length === 0?(<Shimmer/>): (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText,allRestaurants);
            // update the state of restaurants list
            setfilterRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {filterdRestaurants.map((restaurant) => {
          return (
            <Link to={"/restaurant" + restaurant.data.id} key={restaurant.data.id} > 
             <RestaurantCard  {...restaurant.data} />
             </Link>
           
          );
        })}
      </div>
    </>
  );
};

export default Body;