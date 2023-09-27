import axiousResuest from "@/lib/axiousResuest";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useGetAnalyticsData = (limit, offset) => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["sale_analytics", limit, offset], () =>
      axiousResuest({
        url: `/api/sale/analytics/dashboard/?offset=${offset}&limit=${limit}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    );
  };











// import axiousResuest from "@/lib/axiousResuest";
// import { useQuery } from "@tanstack/react-query";
// import { useSession } from "next-auth/react";

// export const useGetAnalyticsData = () => {
//   /** session management */
//   const { data: session } = useSession();
//   return useQuery(["sale_analytics"], () =>
//     axiousResuest({
//       url: `/api/sale/analytics/dashboard/`,
//       method: "get",
//       headers: {
//         Authorization: `Bearer ${session.accessToken}`,
//       },
//     })
//   );
// };
