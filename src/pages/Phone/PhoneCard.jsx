import PropTypes from 'prop-types';
const PhoneCard = ({ phone }) => {
	const { id, brand_name, image, phone_name } = phone || {};

	const handleAddToFavorites = () => {
		const addFavoritesArray = [];
		// recive to local storage
		const favoritesItems = JSON.parse(localStorage.getItem('favorites'));

		//jokhon kisu nai tokhon e if ar vitore dhukba
		if (!favoritesItems) {
			addFavoritesArray.push(phone)
			localStorage.setItem('favorites', JSON.stringify(addFavoritesArray))
			alert("Product added")
		}
		else {
			const isExist = favoritesItems.find(phone => phone.id === id)
			console.log(isExist);

			if (!isExist) {
				addFavoritesArray.push(...favoritesItems, phone);
				localStorage.setItem('favorites', JSON.stringify(addFavoritesArray))
				alert("Product added")
			} else {
				alert('no dublicat')
			}
		}
		// localStorage.setItem('test', JSON.stringify([{name: "reza"}, {name: "hasib"}]));
	}

	return (
		<>
			<h2 className="text-2xl text-center py-8 text-white font-semibold">Phone Details
			</h2>
			<div className="flex justify-center items-center">
				<div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
					<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
						<img
							src={image}
							alt="image"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="p-6">
						<h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
							{brand_name}
						</h6>
						<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
							{phone_name}
						</h4>
						<p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
							Like so many organizations these days, Autodesk is a company in
							transition. It was until recently a traditional boxed software company
							selling licenses. Yet its own business model disruption is only part of
							the story
						</p>
						<a className="inline-block" href="#">
							<button onClick={handleAddToFavorites}
								className="flex bg-green-300 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
								type="button"
							>
								Add to favorites
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="2"
									stroke="currentColor"
									aria-hidden="true"
									className="h-4 w-4"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									></path>
								</svg>
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

PhoneCard.propTypes = {
	phone: PropTypes.object,
}
export default PhoneCard;