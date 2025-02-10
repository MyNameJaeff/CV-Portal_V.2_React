import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<header id="header" className="header">
			<nav className="navbar">
				<div className="navbarLine line1" />
				<ul className="navLinks">
					<li className="navLink">
						<NavLink
							to="/"
							exact
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Home
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink
							to="/about"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							About
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink
							to="/cv"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							CV
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink
							to="/portfolio"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Portfolio
						</NavLink>
					</li>
					<li className="navLink">
						<NavLink
							to="/contact"
							className={({ isActive }) => (isActive ? "active" : "")}
						>
							Contact
						</NavLink>
					</li>
				</ul>
				<div className="navbarLine line2" />
			</nav>
		</header>
	);
};

export default Navbar;
