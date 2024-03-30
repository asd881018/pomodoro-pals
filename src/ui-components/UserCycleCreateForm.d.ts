/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserCycleCreateFormInputValues = {
    cycles?: string;
};
export declare type UserCycleCreateFormValidationValues = {
    cycles?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCycleCreateFormOverridesProps = {
    UserCycleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cycles?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCycleCreateFormProps = React.PropsWithChildren<{
    overrides?: UserCycleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserCycleCreateFormInputValues) => UserCycleCreateFormInputValues;
    onSuccess?: (fields: UserCycleCreateFormInputValues) => void;
    onError?: (fields: UserCycleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCycleCreateFormInputValues) => UserCycleCreateFormInputValues;
    onValidate?: UserCycleCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserCycleCreateForm(props: UserCycleCreateFormProps): React.ReactElement;
