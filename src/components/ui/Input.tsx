import { clsx } from "clsx";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface BaseProps {
    label: string,
    name: string,
    error?: string,
    as?: "input" | "textarea",
    value: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>

type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>

function Input({
    label,
    name,
    error,
    id,
    value,
    as = "input",
    className,
    onChange,
    ...props
}: InputProps | TextareaProps) {

    const hasValue = value !== "";

    const inputId = id ?? name;

    const sharedClasses = clsx(
        `
        peer
        w-full
        text-gray-600
        border
        bg-white
        focus:border-2
        px-4
        text-sm
        outline-none
        transition
        disabled:opacity-70
        `,
        error ? "border-red-500 focus:border-red-500" : "border-gray-400 focus:border-black",
        as === "textarea" ? "min-h-[120px] pt-6 pb-3 resize-none rounded-xl" : "h-14 pt-6 rounded-xl",
        className

    )

    return (
        <div className="w-full">
            <div className="relative">
                {as === "textarea" ? (
                    <textarea name={name} id={inputId} placeholder="" className={sharedClasses} onChange={onChange} {...props as TextareaHTMLAttributes<HTMLTextAreaElement>}/>
                ) : ()}

            </div>
            
        </div>
    )
}

export default Input