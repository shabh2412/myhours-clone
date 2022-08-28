import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import React from "react";

type Props = {
	name: string;
	value: string;
	changeHandler: (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => void;
	isTextArea?: boolean;
};

const CustomFormInput = ({
	name,
	value,
	changeHandler,
	isTextArea = false,
}: Props) => {
	return (
		<FormControl my="4">
			<FormLabel
				fontSize="12px"
				textTransform="uppercase"
				fontWeight="bold"
				color="gray.600"
				mb="1">
				{name}
			</FormLabel>
			{!isTextArea ? (
				<Input
					type="text"
					name={name}
					value={value}
					onChange={(e) => {
						changeHandler(e);
					}}
				/>
			) : (
				<Textarea
					name={name}
					value={value}
					onChange={(e) => {
						changeHandler(e);
					}}
				/>
			)}
		</FormControl>
	);
};

export default CustomFormInput;
