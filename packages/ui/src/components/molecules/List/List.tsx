import { IAbstractObject } from "@honzachalupa/utils";
import { ReactNode } from "react";
import { Button } from "../../atoms/Button";
import { THeaderAlignments, Title } from "../../atoms/typography/Title";
import { ButtonsGroup } from "../ButtonsGroup";
import {
    StyledActionsContainer,
    StyledBodyRow,
    StyledCell,
    StyledCellsContainer,
    StyledContainer,
    StyledHeaderRow,
} from "./List.styled";

export interface IProps {
    headline?: string;
    headlineAlignment?: THeaderAlignments;
    data: IAbstractObject[];
    columns: {
        id: string;
        label?: string;
        isBold?: boolean;
        renderer?: (row: any) => string | number | ReactNode | null;
    }[];
    actions?: {
        label: string;
        isHidden?: (row: any) => boolean;
        onClick: (row: any) => void;
    }[];
    rowHighlighting?: {
        isGreen?: (row: any) => boolean;
        isRed?: (row: any) => boolean;
        isLightGray?: (row: any) => boolean;
        isFaded?: (row: any) => boolean;
    };
    className?: string;
    isHeadersShown?: boolean;
    isCountShown?: boolean;
}

export const List: React.FC<IProps> = ({
    headline,
    headlineAlignment = "center",
    data,
    columns,
    actions,
    rowHighlighting,
    className,
    isHeadersShown,
    isCountShown,
}) => {
    const hasHeader =
        isHeadersShown ||
        (isHeadersShown === undefined &&
            columns.map(({ label }) => label).filter(Boolean).length > 0);

    const hasActions = !!(actions && actions.length > 0);

    return (
        <div className={className}>
            {headline && (
                <Title level={3} alignment={headlineAlignment}>
                    {headline}

                    {isCountShown && data.length > 0 && ` (${data.length})`}
                </Title>
            )}

            <StyledContainer>
                {hasHeader && (
                    <StyledHeaderRow>
                        <StyledCellsContainer hasActions={hasActions}>
                            {columns.map(({ id, label }) => (
                                <StyledCell key={id} count={columns.length}>
                                    {label}
                                </StyledCell>
                            ))}
                        </StyledCellsContainer>

                        {hasActions && (
                            <StyledActionsContainer>
                                <p style={{ padding: "15px 0" }}>Akce</p>
                            </StyledActionsContainer>
                        )}
                    </StyledHeaderRow>
                )}

                {data.map((item) => (
                    <StyledBodyRow
                        // @ts-ignore // TODO
                        key={item.id}
                        highlightColor={
                            rowHighlighting?.isGreen?.(item)
                                ? "green"
                                : rowHighlighting?.isRed?.(item)
                                ? "red"
                                : rowHighlighting?.isLightGray?.(item)
                                ? "lightgray"
                                : undefined
                        }
                        opacity={
                            rowHighlighting?.isFaded?.(item) ? 0.5 : undefined
                        }
                    >
                        <StyledCellsContainer hasActions={hasActions}>
                            {columns.map(({ id, renderer, isBold }) => (
                                <StyledCell
                                    key={id}
                                    count={columns.length}
                                    isBold={isBold}
                                >
                                    {(renderer?.(item) !== undefined
                                        ? renderer?.(item)
                                        : item[id]) || ""}
                                </StyledCell>
                            ))}
                        </StyledCellsContainer>

                        {hasActions && (
                            <StyledActionsContainer>
                                <ButtonsGroup orientation="vertical">
                                    {actions!
                                        .filter(
                                            (action) =>
                                                !action.isHidden?.(item),
                                        )
                                        .map(({ label, onClick }) => (
                                            <Button
                                                key={label}
                                                label={label}
                                                size="small"
                                                color="grayLight"
                                                onClick={() => onClick(item)}
                                            />
                                        ))}
                                </ButtonsGroup>
                            </StyledActionsContainer>
                        )}
                    </StyledBodyRow>
                ))}
            </StyledContainer>
        </div>
    );
};
