"use client";

import { useEffect } from "react"
import { toast } from "sonner";
import { deleteCookiesByKey, getCookiesByKey } from "@/actions/cookies";

const RedirectToast = () => {
    useEffect(() => {
        const showCookieToast = async () => {
            const message = await getCookiesByKey("toast");

            if (message) {
                toast.success(message);
                deleteCookiesByKey("toast");
            }
        };
        showCookieToast();
    }, []);
    return null;
}

export { RedirectToast };