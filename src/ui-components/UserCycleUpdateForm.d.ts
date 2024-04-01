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
export declare type UserCycleUpdateFormInputValues = {
    cycles?: string;
};
export declare type UserCycleUpdateFormValidationValues = {
    cycles?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserCycleUpdateFormOverridesProps = {
    UserCycleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cycles?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserCycleUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserCycleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userCycle?: any;
    onSubmit?: (fields: UserCycleUpdateFormInputValues) => UserCycleUpdateFormInputValues;
    onSuccess?: (fields: UserCycleUpdateFormInputValues) => void;
    onError?: (fields: UserCycleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserCycleUpdateFormInputValues) => UserCycleUpdateFormInputValues;
    onValidate?: UserCycleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserCycleUpdateForm(props: UserCycleUpdateFormProps): React.ReactElement;
