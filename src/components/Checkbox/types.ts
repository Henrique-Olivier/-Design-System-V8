export type checkboxType = "default" | "undefined";
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type?: checkboxType;
}