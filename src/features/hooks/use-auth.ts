import { User as AuthUser } from "@prisma/client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuth } from "@/auth/cookies";

const useAuth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isFetched, setFetched] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const fetchUser = async () => {
      const { user } = await getAuth();
      setUser(user);
      setFetched(true);
    };

    fetchUser();
  }, [pathname]);

  return { user, isFetched };
};

export { useAuth };
