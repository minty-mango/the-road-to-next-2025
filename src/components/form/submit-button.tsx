"use client";

import { LucideLoaderCircle } from "lucide-react";
import { cloneElement } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
    label?: string;
    icon?: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
    size?: "default" | "sm" | "lg" | "icon";
}

export const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" disabled={pending} variant={variant} size={size}>
            {pending && <LucideLoaderCircle className="size-4 animate-spin" />}
            {label}
            {pending ? null : icon ? <span>
                {cloneElement(icon, { className: "size-4" })}
            </span> : null}
        </Button>
    )
}