import { IAbstractObject } from "../../types";

export const cleanObject = (object: IAbstractObject): IAbstractObject =>
    Object.fromEntries(
        Object.entries(object).filter(
            ([_, v]) => v !== null && v !== undefined,
        ),
    );

export const groupObjectsBy = (
    array: any[],
    key: string,
): { [key: string]: IAbstractObject } => {
    const initialValue = {};

    return array.reduce((prevValue, value) => {
        const myAttribute = value[key];

        prevValue[myAttribute] = [...(prevValue[myAttribute] || []), value];

        return prevValue;
    }, initialValue);
};

export const fillStringVariables = (
    value: string | number,
    variables: { [key: string]: string | number },
): string => {
    let string = value.toString();

    Object.entries(variables).forEach(([key, value]) => {
        string = string.replaceAll(`{${key}}`, value.toString());
    });

    return string;
};
