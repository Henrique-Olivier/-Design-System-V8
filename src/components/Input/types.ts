type inputSize = "default" | "small";

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    inputSize: inputSize;

    textLabel?: string;

    textError?: string;

    icon?: string;
    disabled?: boolean;
}