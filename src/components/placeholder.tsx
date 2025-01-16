import { LucideCircleAlert } from "lucide-react";
import { cloneElement, HTMLAttributes } from "react";

type PlaceholderProps = {
    label: string;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    button?: React.ReactElement<HTMLAttributes<HTMLElement>>;
}

const Placeholder = ({ label, icon = <LucideCircleAlert />, button = <button /> }: PlaceholderProps) => {
    return (
        <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
            {cloneElement(icon, {
                className: "size-16"
            })}
            <h2 className="text-lg text-center">
                {label}
            </h2>
            {cloneElement(button, { className: "h-10" })}
        </div>
    )
}

export { Placeholder }