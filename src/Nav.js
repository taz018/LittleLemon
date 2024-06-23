import { HStack } from "@chakra-ui/react"
import "./App.css"
const Nav = () => {
	return (
		<nav>
			<HStack spacing={30}>
				<a href="/home">Home</a>
				<a href="/about">About</a>
				<a href="/menu">Menu</a>
				<a href="/reservations">Reservations</a>
				<a href="/order-online">Order Online</a>
				<a href="/login">Login</a>
			</HStack>
		</nav>
	)
}

export default Nav
