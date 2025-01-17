"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react"
import { toast } from "sonner";
import { deleteCookiesByKey, getCookiesByKey } from "@/actions/cookies";

const RedirectToast = () => {
    const pathname = usePathname();
    useEffect(() => {
        const showCookieToast = async () => {
            const message = await getCookiesByKey("toast");

            if (message) {
                toast.success(message);
                deleteCookiesByKey("toast");
            }
        };
        showCookieToast();
    }, [pathname]);
    return null;
}

export { RedirectToast };