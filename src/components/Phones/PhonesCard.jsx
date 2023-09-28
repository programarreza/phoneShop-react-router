import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Rating from "react-rating";
const PhonesCard = ({ phone }) => {
	const { brand_name, id, image, phone_name, price, rating } = phone || {};
	return (
		<>
			<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
				<div className="relative mx-4 mt-4  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
					<img className="h-80 mx-auto"
						src={image}
					/>
				</div>
				<div className="p-6">
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						{brand_name}
					</p>

					<Rating
						initialRating={rating}
						readonly
					/>
					<div className="mb-2 flex items-center justify-between">
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							{phone_name}
						</p>
						<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
							${price}
						</p>
					</div>
					<p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">

					</p>
				</div>
				<div className="p-6 pt-0">
					<Link to={`/phones/${id}`}>
						<button
							className="block w-full select-none rounded-lg bg-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
							type="button"
						>
							see details
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

PhonesCard.propTypes = {
	phone: PropTypes.object,
}

export default PhonesCard;