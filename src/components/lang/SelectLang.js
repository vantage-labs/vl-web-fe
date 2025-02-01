import * as React from "react";
import { Select } from "radix-ui";
import classnames from "classnames";
import {
	CheckIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@radix-ui/react-icons";
import styles from "./styles.module.css";
import { useLang } from "../../contexts/LangContexts";

const SelectCountry = () => {

	const { language, changeLanguage } = useLang(); // Ambil dari context LangContexts

	return(
		<Select.Root className={styles.Root}
			onValueChange={(value) => changeLanguage(value)}
		>
		<Select.Trigger className={styles.Trigger} aria-label="lang">
			<Select.Value placeholder="English" />
			<Select.Icon className={styles.Icon}>
				<ChevronDownIcon />
			</Select.Icon>
		</Select.Trigger>
		<Select.Portal>
			<Select.Content className={styles.Content}>
				<Select.ScrollUpButton className={styles.ScrollButton}>
					<ChevronUpIcon />
				</Select.ScrollUpButton>
				<Select.Viewport className={styles.Viewport}>
					<Select.Group>
						<SelectItem value="id">Indonesia</SelectItem>
						<SelectItem value="en">English</SelectItem>
					</Select.Group>

				
				</Select.Viewport>
				<Select.ScrollDownButton className={styles.ScrollButton}>
					<ChevronDownIcon />
				</Select.ScrollDownButton>
			</Select.Content>
		</Select.Portal>
	</Select.Root>
	)
};

const SelectItem = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => {
		return (
			<Select.Item
				className={classnames(styles.Item, className)}
				{...props}
				ref={forwardedRef}
			>
				<Select.ItemText>{children}</Select.ItemText>
				<Select.ItemIndicator className={styles.ItemIndicator}>
					<CheckIcon />
				</Select.ItemIndicator>
			</Select.Item>
		);
	},
);

export default SelectCountry;
