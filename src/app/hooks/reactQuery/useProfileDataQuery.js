import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useProfileDataList = () => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["user-profile"], () =>
      axiousResuest({
        url: `/api/user/profile/1/`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    );
  };


  export const useChangePassword = () => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/auth-app/password-change/`,
  
          method: "post",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["change_pass"]),
      }
    );
  };

  export const useUpdateUserProfileData = (id) => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/user/profile/${id}/`,
          method: "patch",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["user-profile"]),
      }
    );
  };