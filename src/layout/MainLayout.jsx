import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
	return (
		<div className="mx-24">
			<Navbar></Navbar>
			<div className="my-10">
			<Outlet></Outlet>
			</div>
		</div>
	);
};

export default MainLayout;