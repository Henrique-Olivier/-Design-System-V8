export type checkboxType = "default" | "undefined";
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean
    type?: checkboxType;
}