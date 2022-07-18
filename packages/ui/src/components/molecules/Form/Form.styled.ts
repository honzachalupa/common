import styled from "styled-components";
import { ButtonsGroup } from "../ButtonsGroup";

export const StyledInputContainer = styled.div<{
    isRequired?: boolean;
    isReadOnly?: boolean;
}>`
    width: 100%;
    float: left;

    input,
    textarea,
    select {
        width: 100%;
        height: ${({ theme }) => theme.input?.height || 48}px;
        font-size: ${({ theme }) => theme.input?.font?.size || 16}px;
        border-width: ${({ theme }) => theme.input?.border?.width || 1}px;
        border-color: ${({ theme }) =>
            theme.input?.border?.color || theme.colors.grayLight};
        border-style: solid;
        border-radius: ${({ theme }) => theme.input?.border?.radius || 2}px;
        padding: ${({ theme }) => theme.input?.padding || "0 15px"};

        ${({ isReadOnly, theme }) =>
            isReadOnly
                ? `
            cursor: not-allowed;
            opacity: 0.5;

            &:hover,
            &:focus {
                border: 1px solid ${theme.colors.grayLight};
            }
            `
                : `
            &:hover,
            &:focus {
                border: 1px solid ${theme.colors.grayDark};
            }
        `}
    }

    select {
        ${({ isReadOnly }) =>
            isReadOnly &&
            `
            pointer-events: none;
            cursor: not-allowed;
            -webkit-appearance: none;
            -moz-appearance: none;
        `}
    }

    textarea {
        height: 96px;
        resize: none;
        padding: 15px;
    }
`;

export const StyledDatePickerInputContainer = styled.div`
    .DayPicker {
        display: inline-block;
        font-size: 1rem;
    }

    .DayPicker-wrapper {
        position: relative;
        flex-direction: row;
        padding-bottom: 1em;
        user-select: none;
    }

    .DayPicker-Months {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .DayPicker-Month {
        display: table;
        margin: 0 1em;
        margin-top: 1em;
        border-spacing: 0;
        border-collapse: collapse;
        user-select: none;
    }

    .DayPicker-NavButton {
        position: absolute;
        top: 1em;
        right: 1.5em;
        left: auto;
        display: inline-block;
        margin-top: 2px;
        width: 1.25em;
        height: 1.25em;
        background-position: center;
        background-size: 50%;
        background-repeat: no-repeat;
        color: #8b9898;
        cursor: pointer;
    }

    .DayPicker-NavButton:hover {
        opacity: 0.8;
    }

    .DayPicker-NavButton--prev {
        margin-right: 1.5em;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC");
    }

    .DayPicker-NavButton--next {
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==");
    }

    .DayPicker-NavButton--interactionDisabled {
        display: none;
    }

    .DayPicker-Caption {
        display: table-caption;
        margin-bottom: 0.5em;
        padding: 0 0.5em;
        text-align: left;
    }

    .DayPicker-Caption > div {
        font-weight: 500;
        font-size: 1.15em;
    }

    .DayPicker-Weekdays {
        display: table-header-group;
        margin-top: 1em;
    }

    .DayPicker-WeekdaysRow {
        display: table-row;
    }

    .DayPicker-Weekday {
        display: table-cell;
        padding: 0.5em;
        color: #8b9898;
        text-align: center;
        font-size: 0.875em;
    }

    .DayPicker-Weekday abbr[title] {
        border-bottom: none;
        text-decoration: none;
    }

    .DayPicker-Body {
        display: table-row-group;
    }

    .DayPicker-Week {
        display: table-row;
    }

    .DayPicker-Day {
        display: table-cell;
        padding: 0.5em;
        border-radius: 50%;
        vertical-align: middle;
        text-align: center;
        cursor: pointer;
    }

    .DayPicker-WeekNumber {
        display: table-cell;
        padding: 0.5em;
        min-width: 1em;
        border-right: 1px solid #eaecec;
        color: #8b9898;
        vertical-align: middle;
        text-align: right;
        font-size: 0.75em;
        cursor: pointer;
    }

    .DayPicker--interactionDisabled .DayPicker-Day {
        cursor: default;
    }

    .DayPicker-Footer {
        padding-top: 0.5em;
    }

    .DayPicker-TodayButton {
        border: none;
        background-color: transparent;
        background-image: none;
        box-shadow: none;
        color: #4a90e2;
        font-size: 0.875em;
        cursor: pointer;
    }

    .DayPicker-Day--today {
        color: #d0021b;
        font-weight: 700;
    }

    .DayPicker-Day--outside {
        color: #8b9898;
        cursor: default;
    }

    .DayPicker-Day--disabled {
        color: #dce0e0;
        cursor: default;
    }

    .DayPicker-Day--sunday {
        background-color: #f7f8f8;
    }

    .DayPicker-Day--sunday:not(.DayPicker-Day--today) {
        color: #dce0e0;
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
        position: relative;
        background-color: #4a90e2;
        color: #f0f8ff;
    }

    .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
        background-color: #51a0fa;
    }

    .DayPicker:not(.DayPicker--interactionDisabled)
        .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
        background-color: #f0f8ff;
    }

    .DayPickerInput {
        width: 100%;
        display: inline-block;
    }

    .DayPickerInput-OverlayWrapper {
        position: relative;
    }

    .DayPickerInput-Overlay {
        position: absolute;
        left: 0;
        z-index: 1;
        background: white;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    }
`;

export const StyledInputLabel = styled.label<{ isRequired?: boolean }>`
    width: 100%;
    min-height: 27px;
    color: gray;
    font-size: 18px;
    margin: 30px 0 5px 0;
    display: inline-block;

    ${({ isRequired, theme }) =>
        isRequired &&
        `
            &::after {
                content: '●';
                color: ${theme.colors.red};
                font-size: 14px;
                position: relative;
                top: -6px;
                left: 2px;
            }
        `}
`;

export const StyledErrorMessage = styled.p`
    color: red;
    font-size: 13px;
    font-weight: 600;
    margin-top: 5px;
`;

export const StyledButtonsGroup = styled(ButtonsGroup)`
    padding: 30px 0;
`;
