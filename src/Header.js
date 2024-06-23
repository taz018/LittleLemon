import { Box, HStack } from "@chakra-ui/react"
import Nav from "./Nav"
import Logo from "./icons_assets/Logo.svg"

const Header = () => {
	return (
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
		>
			<Box color="white" maxWidth="1280px" margin="0 auto">
				<HStack
					px={32}
					py={16}
					justifyContent="space-around"
					alignItems="center"
				>
					<img src={Logo} />
					<Nav />
				</HStack>
			</Box>
		</Box>
	)
}
export default Header
