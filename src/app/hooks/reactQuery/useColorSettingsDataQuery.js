import axiousResuest from "@/lib/axiousResuest";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useColorSettingsDataQuery = (limit, offset, search = "") => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["color-setting", limit, offset, search], () =>
      axiousResuest({
        url: `/api/app/color-setting/?offset=${offset}&limit=${limit}&search=${search}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    );
  };