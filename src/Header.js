import { Box, HStack, useMediaQuery } from "@chakra-ui/react"
import Logo from "./icons_assets/Logo.svg"
import Nav from "./Nav"

const Header = () => {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

	return (
		<header>
			<Box
				position="fixed"
				top={0}
				left={0}
				right={0}
				translateY={0}
				transitionProperty="transform"
				transitionDuration=".3s"
				transitionTimingFunction="ease-in-out"
				backgroundColor="white"
				zIndex={1000}
				py={4}
			>
				<Box color="white" maxWidth="1280px" margin="0 auto">
					<HStack
						px={8}
						justifyContent="space-around"
						alignItems="center"
						flexDirection={isLargerThan768 ? "row" : "column"}
						spacing={8}
					>
						<img src={Logo} alt="Logo" />
						<Nav />
					</HStack>
				</Box>
			</Box>
		</header>
	)
}

export default Header
