import { DATE_FORMAT } from "@honzachalupa/utils";
import moment from "moment";
import DatePickerInput from "react-day-picker/DayPickerInput";
import { Controller } from "react-hook-form";
import { Button, IButtonProps } from "../../atoms/Button";
import { IFormInput } from "./Form.controller";
import {
    StyledButtonsGroup,
    StyledDatePickerInputContainer,
    StyledErrorMessage,
    StyledInputContainer,
    StyledInputLabel,
} from "./Form.styled";

interface IView {
    formData: any;
    inputs: IFormInput[];
    control: any;
    buttonsRenderer: ((onSubmit: any) => IButtonProps[]) | undefined;
    className: string | undefined;
    getErrorMessage: any;
    handleInputChange: any;
    handleSubmit: any;
    onSubmit: any;
}

export const View: React.FC<IView> = ({
    formData,
    inputs,
    control,
    buttonsRenderer,
    className,
    getErrorMessage,
    handleInputChange,
    handleSubmit,
    onSubmit,
}) => (
    <form
        onSubmit={onSubmit ? handleSubmit(onSubmit) : undefined}
        className={className}
    >
        {inputs.map(
            ({
                id,
                label,
                placeholder,
                value,
                children,
                controlType = "input",
                inputType = "text",
                options,
                rules,
                isReadOnly,
                containerStyle,
                inputStyle,
            }) => (
                <Controller
                    key={id}
                    name={id}
                    control={control}
                    defaultValue={value}
                    rules={!isReadOnly ? rules : undefined}
                    render={({
                        field: { value, onChange },
                        fieldState: { error },
                    }) => (
                        <StyledInputContainer
                            style={containerStyle}
                            isReadOnly={isReadOnly}
                        >
                            {label && (
                                <StyledInputLabel
                                    htmlFor={id}
                                    isRequired={rules?.required}
                                >
                                    {label}
                                </StyledInputLabel>
                            )}

                            {controlType === "input" && inputType === "date" ? (
                                <StyledDatePickerInputContainer>
                                    <DatePickerInput
                                        value={value as string}
                                        placeholder={placeholder}
                                        onDayChange={(value) =>
                                            !isReadOnly
                                                ? handleInputChange(
                                                      id,
                                                      moment(value).format(
                                                          DATE_FORMAT,
                                                      ),
                                                      onChange,
                                                  )
                                                : {}
                                        }
                                    />
                                </StyledDatePickerInputContainer>
                            ) : controlType === "input" ? (
                                <input
                                    name={id}
                                    defaultValue={value as string | number}
                                    placeholder={placeholder}
                                    type={inputType}
                                    readOnly={isReadOnly}
                                    style={inputStyle}
                                    onChange={(e) =>
                                        handleInputChange(
                                            id,
                                            inputType === "number"
                                                ? Number(e.target.value)
                                                : e.target.value,
                                            onChange,
                                        )
                                    }
                                />
                            ) : controlType === "textarea" ? (
                                <textarea
                                    name={id}
                                    defaultValue={value as string | number}
                                    placeholder={placeholder}
                                    readOnly={isReadOnly}
                                    style={inputStyle}
                                    onChange={(e) =>
                                        handleInputChange(
                                            id,
                                            e.target.value,
                                            onChange,
                                        )
                                    }
                                />
                            ) : controlType === "select" ? (
                                <select
                                    name={id}
                                    defaultValue={value as string | number}
                                    style={inputStyle}
                                    onChange={(e) =>
                                        handleInputChange(
                                            id,
                                            e.target.value,
                                            onChange,
                                        )
                                    }
                                >
                                    {options?.map(({ id, label }) => (
                                        <option key={id} value={id}>
                                            {label}
                                        </option>
                                    ))}
                                </select>
                            ) : controlType === "custom" ? (
                                children
                            ) : null}

                            {rules && error && (
                                <StyledErrorMessage>
                                    {error.type !== "manual"
                                        ? getErrorMessage(
                                              error.type,
                                              rules,
                                              value,
                                          )
                                        : error.message}
                                </StyledErrorMessage>
                            )}
                        </StyledInputContainer>
                    )}
                />
            ),
        )}

        {buttonsRenderer && (
            <StyledButtonsGroup>
                {buttonsRenderer(handleSubmit(() => onSubmit(formData))).map(
                    (buttonProps) => (
                        <Button
                            key={buttonProps.label}
                            color={buttonProps.color || "accentSecondary"}
                            size={buttonProps.size || "medium"}
                            type={buttonProps.type || "submit"}
                            {...buttonProps}
                        />
                    ),
                )}
            </StyledButtonsGroup>
        )}
    </form>
);
