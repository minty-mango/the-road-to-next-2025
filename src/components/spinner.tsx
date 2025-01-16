import { LucideLoaderCircle } from "lucide-react"

const Spinner = () => {
    return (
        <div className="flex-1 w-full flex justify-center items-center">
            <LucideLoaderCircle className="size-16 animate-spin" />
        </div>
    );
}

export { Spinner }