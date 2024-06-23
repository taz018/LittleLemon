import { Box, HStack, VStack } from "@chakra-ui/react"
import Logo from "./icons_assets/Logo.svg"

const Footer = () => {
	return (
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
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={32}
					py={16}
					justifyContent="space-around"
					alignItems="center"
				>
					<img src={Logo} />
					<VStack>
						<nav>
							<ul style={{ listStyle: "none" }}>
								<li style={{ fontWeight: "bold" }}>Links</li>
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
							<ul style={{ listStyle: "none" }}>
								<li style={{ fontWeight: "bold" }}>Contact</li>
								<li>Address</li>
								<li>Phone Number</li>
								<li>Email</li>
							</ul>
						</nav>
					</VStack>
					<VStack>
						<nav>
							<ul style={{ listStyle: "none" }}>
								<li style={{ fontWeight: "bold" }}>Social Media Links</li>
								<li>Address</li>
								<li>Phone Number</li>
								<li>Email</li>
							</ul>
						</nav>
					</VStack>
				</HStack>
			</Box>
		</Box>
	)
}

export default Footer
