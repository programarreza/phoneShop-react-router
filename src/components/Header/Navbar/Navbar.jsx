import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between p-6 shadow-md ">
			<Logo></Logo>

			<div className="flex gap-6">
				<NavLink to="/"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-green-500 underline" : ""
					}>
					Home
				</NavLink>
				<NavLink to="/favorites"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-green-500 underline" : ""
					}>
					Favorites
				</NavLink>
				<NavLink to="/login"
					className={({ isActive, isPending }) =>
						isPending ? "pending" : isActive ? "text-green-500 underline" : ""
					}>
					Login
				</NavLink>
			</div>
		</div>
	);
};

export default Navbar;