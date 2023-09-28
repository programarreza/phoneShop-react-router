import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
	const [favorites, setFavorites] = useState([])
	const [noFount, setNoFount] = useState(false)
	const [isShow, setIsShow] = useState(false)
	const [totalPrice, setTotalPrice] = useState(0)

	useEffect(() => {
		const favoritesItems = JSON.parse(localStorage.getItem('favorites'))

		if (favoritesItems) {
			setFavorites(favoritesItems)

			const total = favoritesItems.reduce((preValue, currentItem) => preValue + currentItem.price,0);
			console.log(total);

			setTotalPrice(total);

		} else {
			setNoFount("No Data Found")
		}

	}, [])

	console.log(isShow);

	const handleRemoveData = () => {
		localStorage.clear();
		setFavorites([]);
		setNoFount("No Data Found")
	}
	return (
		<div>
			{noFount ? <p>{noFount}</p> : <div>

				{
					favorites.length > 0 && <div>
						<button onClick={handleRemoveData} className="mx-auto p-2 bg-green-500 text-white rounded-lg block mb-4">Deleted All favorites</button>
						
						<h1>Total Price : {totalPrice}</h1>
						</div>
				}

				<div className="grid grid-cols-2 gap-6">
					{
						isShow ? favorites.map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
						:
						favorites.slice(0,2).map(phone => <FavoritesCard key={phone.id} phone={phone}></FavoritesCard>)
					}
				</div>

				{favorites.length > 2 && <button onClick={()=> setIsShow(!isShow)} className="mx-auto p-2 bg-green-500 text-white rounded-lg block mb-4">{isShow? "See less" : "See More"}</button>}
			</div>}
		</div>
	);
};

export default Favorites;