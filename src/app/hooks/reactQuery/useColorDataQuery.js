import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useColorDataList = () => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["color-setting"], () =>
      axiousResuest({
        url: `/api/app/color-setting/`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      })
    );
  };


  export const useUpdateColorData = (id) => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/app/color-setting/${id}/`,
          method: "patch",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["color-setting"]),
      }
    );
  };

  export const useAddColorData = () => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/app/color-setting/`,
  
          method: "post",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["color-setting"]),
      }
    );
  };


  
// data deleting
export const useDeleteColorData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/app/color-setting/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["color-setting"]),
    }
  );
};
  