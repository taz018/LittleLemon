import { HStack, VStack, useMediaQuery } from "@chakra-ui/react"
import "./App.css"

const Nav = () => {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

	return (
		<nav>
			<ul>
				{isLargerThan768 ? (
					<HStack spacing={24}>
						<li>
							<a href="/home">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/menu">Menu</a>
						</li>
						<li>
							<a href="/reservations">Reservations</a>
						</li>
						<li>
							<a href="/order-online">Order Online</a>
						</li>
						<li>
							<a href="/login">Login</a>
						</li>
					</HStack>
				) : (
					<VStack spacing={4}>
						<li>
							<a href="/home">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/menu">Menu</a>
						</li>
						<li>
							<a href="/reservations">Reservations</a>
						</li>
						<li>
							<a href="/order-online">Order Online</a>
						</li>
						<li>
							<a href="/login">Login</a>
						</li>
					</VStack>
				)}
			</ul>
		</nav>
	)
}

export default Nav
