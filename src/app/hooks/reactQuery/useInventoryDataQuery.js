import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";


export const useInventoryDataList = (limit, offset, search = "") => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["inventory-management", limit, offset, search], () =>
    axiousResuest({
      url: `/api/inventory/inventory-management/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};


export const useInventoryDataQuery = () => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/inventory/inventory-management/`,
  
          method: "post",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["inventory-management"]),
      }
    );
  };
  

  export const useUpdateInventoryData = (id) => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/inventory/inventory-management/${id}/`,
          method: "patch",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["inventory-management"]),
      }
    );
  };

   // data deleting
export const useDeleteInventoryData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/inventory/inventory-management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["inventory-management"]),
    }
  );
};



export const useInventoryLogData = (id) => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["inventory-logs",id], () =>
    axiousResuest({
      url: `/api/inventory/inventory-logs/?inventory_id=${id}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};