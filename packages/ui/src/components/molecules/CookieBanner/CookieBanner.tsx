import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import { Button } from "../../atoms/Button";
import { Text } from "../../atoms/typography/Text";
import {
    StyledButtonsGroup,
    StyledContainer,
    StyledContent,
} from "./CookieBanner.styled";

interface IProps {
    headline: string;
    content: string;
    agreeButtonText: string;
    disagreeButtonText: string;
    setIsCookiesAllowed: (value: boolean) => void;
}

export const CookieBanner: React.FC<IProps> = ({
    headline,
    content,
    agreeButtonText,
    disagreeButtonText,
    setIsCookiesAllowed,
}) => {
    const [isCookiesAllowed, setCookiesAllowed] = useLocalStorage(
        "isCookiesAllowed",
        null as unknown as boolean,
    );

    useEffect(() => {
        setIsCookiesAllowed(isCookiesAllowed);
    }, [isCookiesAllowed]);

    return isCookiesAllowed === null ? (
        <StyledContainer>
            <StyledContent>
                <Text sizeRem={1}>{headline}</Text>

                <Text sizeRem={0.7}>{content}</Text>
            </StyledContent>

            <StyledButtonsGroup orientation="vertical">
                <Button
                    label={agreeButtonText}
                    color="blue"
                    size="small"
                    onClick={() => setCookiesAllowed(true)}
                />

                <Button
                    label={disagreeButtonText}
                    size="small"
                    onClick={() => setCookiesAllowed(false)}
                />
            </StyledButtonsGroup>
        </StyledContainer>
    ) : null;
};
