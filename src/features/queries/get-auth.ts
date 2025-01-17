import { cookies } from "next/headers";
import { cache } from "react";
import { SESSION_COOKIE_NAME } from "@/auth/cookies";
import { validateSession } from "@/auth/sessions";

export const getAuth = cache(async () => {
  const sessionToken =
    (await cookies()).get(SESSION_COOKIE_NAME)?.value ?? null;
  // or your framework's cookie API

  if (!sessionToken) {
    return { session: null, user: null };
  }

  return validateSession(sessionToken);
});
