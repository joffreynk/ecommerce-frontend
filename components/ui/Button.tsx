import { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}
const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type="button",
    ...props
}, ref)=>(
    <button
    {...props}
    ref={ref}
    className={`w-auto rounded-lg bg-black border-transparent px-2 py-[4px] disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition ${className}`}
    >
        {
            children
        }
    </button>
));

Button.displayName="Button";

export default Button;