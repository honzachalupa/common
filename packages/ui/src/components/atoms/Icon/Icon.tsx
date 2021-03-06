import { createElement } from "react";
import { icons } from "./Icon.imports";
import { StyledContainer } from "./Icon.styled";

export type TIconName = keyof typeof icons;

export interface IIconProps {
    name: TIconName;
    color?: string;
    size?: number;
    label?: string;
    className?: string;
    onClick?: () => void;
}

export const Icon: React.FC<IIconProps> = ({
    name,
    color = "black",
    size,
    label,
    className,
    onClick = () => {},
}) => (
    <StyledContainer
        color={color}
        size={size}
        title={label}
        className={className}
        onClick={onClick}
    >
        {createElement(icons[name])}
    </StyledContainer>
);
