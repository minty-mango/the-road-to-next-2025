import { LucideKanban } from "lucide-react"
import Link from "next/link"
import { homePath, signIn, signUp, ticketsPath } from "@/paths"
import { ThemeSwitcher } from "./theme/theme-switcher"
import { buttonVariants } from "./ui/button"

const Header = () => {
    const navItems = (
        <>
            <Link href={ticketsPath()} className={buttonVariants({ variant: "default" })}>
                Tickets
            </Link>
            <Link href={signUp()} className={buttonVariants({ variant: "outline" })}>
                Sign Up
            </Link>
            <Link href={signIn()} className={buttonVariants({ variant: "outline" })}>
                Sign In
            </Link>
        </>
    )
    return (
        <nav
            className="
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
          "
        >
            <div className="flex gap-x-2 justify-center">
                <Link href={homePath()} className={buttonVariants({ variant: "ghost" })}>
                    <LucideKanban />
                    <h1 className="text-lg font-semibold">
                        TicketBounty
                    </h1>
                </Link>
            </div>

            <div className="flex gap-x-2 justify-center">
                <ThemeSwitcher />
                {navItems}
            </div>
        </nav>
    )
}

export { Header }