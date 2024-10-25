type size = "default" | "small";

export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    size: size;

    textLabel?: string;

    textError?: string;

    icon?: string;
    disabled?: boolean;
}