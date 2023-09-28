import PhonesCard from "./PhonesCard";
import PropTypes from 'prop-types';

const Phones = ({phones}) => {
	// console.log(phones);
	return (
		<div>
			<h2 className="text-3xl text-center py-7">Our Phones Collections</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{
				phones?.map(phone => <PhonesCard phone={phone} key={phone.id}></PhonesCard>)
			}
			</div>
		</div>
	);
};

Phones.propTypes = {
	phones: PropTypes.array,
}
export default Phones;