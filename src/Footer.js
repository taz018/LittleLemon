import { Box, VStack, HStack, useMediaQuery } from "@chakra-ui/react"
import Logo from "./icons_assets/Logo.svg"

const Footer = () => {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

	return (
		<footer>
			<Box
				position="fixed"
				bottom={0}
				left={0}
				right={0}
				translateY={0}
				transitionProperty="transform"
				transitionDuration=".3s"
				transitionTimingFunction="ease-in-out"
				backgroundColor="#495E57"
				py={4}
			>
				<Box color="white" maxWidth="1280px" margin="0 auto">
					<HStack
						px={8}
						justifyContent="space-around"
						alignItems="center"
						flexDirection="row"
					>
						<img src={Logo} alt="Logo" />
						<HStack flexDirection={isLargerThan768 ? "row" : "column"}>
							<VStack>
								<nav>
									<ul>
										<li className="navHeading">Links</li>
										<li>Home</li>
										<li>Menu</li>
										<li>Reservations</li>
										<li>Order Online</li>
										<li>Login</li>
									</ul>
								</nav>
							</VStack>
							<VStack>
								<nav>
									<ul>
										<li className="navHeading">Contact</li>
										<li>Address</li>
										<li>Phone Number</li>
										<li>Email</li>
									</ul>
								</nav>
							</VStack>
							<VStack>
								<nav>
									<ul>
										<li className="navHeading">Social Media Links</li>
										<li>Address</li>
										<li>Phone Number</li>
										<li>Email</li>
									</ul>
								</nav>
							</VStack>
						</HStack>
					</HStack>
				</Box>
			</Box>
		</footer>
	)
}

export default Footer
