import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

// export const useLandingPageSettings = () => {
//     /** session management */
//     const { data: session } = useSession();
//     return useQuery(["landing-image-management"], () =>
//       axiousResuest({
//         url: `/api/app/landing-image-management/1/`,
//         method: "get",
//         headers: {
//           Authorization: `Bearer ${session.accessToken}`,
//         },
//       })
//     );
//   };

export const useLandingPageSettings = () => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["landing-image-management"], () =>
    axiousResuest({
      url: `/api/app/landing-image-management/1/`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};


export const usePublicLandingPageSettings = () => {
  return useQuery(["landing-image-management"], () =>
    axiousResuest({
      url: `/api/app/landing-image-management/1/`,
      method: "get",
    })
  );
};



export const useUpdateLandingPageSettings = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/app/landing-image-management/1/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () =>
        queryClient.invalidateQueries(["landing-image-management"]),
    }
  );
};
