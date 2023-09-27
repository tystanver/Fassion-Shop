import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useUserDataList = (limit, offset, search = "") => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["user-data", limit, offset, search], () =>
      axiousResuest({
        url: `/api/user/management/?offset=${offset}&limit=${limit}&search=${search}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    );
  };

  export const useAddUser = () => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/user/management/`,
  
          method: "post",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["user-data"]),
      }
    );
  };

  export const useUpdateUserData = (id) => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/user/management/${id}/`,
          method: "patch",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["user-data"]),
      }
    );
  };

  // data deleting
export const useDeleteUserData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/user/management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["user-data"]),
    }
  );
};