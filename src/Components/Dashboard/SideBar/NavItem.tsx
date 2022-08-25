import { Flex, Icon } from "@chakra-ui/react";
export const NavItem = (props: {
	icon?: any;
	children: any;
	onClick?: () => void;
	pl?: string;
	py?: string;
	bg?: string;
	color?: string;
}) => {
	let { icon, children, onClick, color, ...rest } = props;
	if (!onClick) onClick = () => {};
	return (
		<Flex
			onClick={onClick}
			align="center"
			px="4"
			pl="4"
			py="3"
			cursor="pointer"
			color="inherit"
			_dark={{
				color: "gray.400",
			}}
			_hover={{
				bg: "gray.100",
				_dark: {
					bg: "gray.900",
				},
				color: "gray.900",
			}}
			role="group"
			fontWeight="semibold"
			transition=".15s ease"
			{...rest}>
			{icon && (
				<Icon
					mx="2"
					boxSize="4"
					_groupHover={{
						color: color,
					}}
					as={icon}
				/>
			)}
			{children}
		</Flex>
	);
};
