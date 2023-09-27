import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axiousResuest from "@/lib/axiousResuest";



export const useAddCategoryDataQuery = () => {
    const queryClient = useQueryClient();
    /** session management */
    const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/product/category-management/`,
          
          method: "post",
          data: body,
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["category-management"])
      }
    );
  };


  export const useCategoryDataList = () => {
    /** session management */
    const { data: session } = useSession();
    return useQuery(["category-management"], () =>
      axiousResuest({
        url: `/api/product/category-management/`,
        method: "get",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
  
      })
    );
  };
  

// data update
  
export const useUpdateCategoryData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/product/category-management/${id}/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["category-management"]),
    }
  );
};


// data deleting 
export const useDeleteCategoryData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/product/category-management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["category-management"]),
    }
  );
};
