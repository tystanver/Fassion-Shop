import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useLandingCategoryList = (limit, offset, search = "") => {
  /** session management */
  return useQuery(["landing_management", limit, offset, search], () =>
    axiousResuest({
      url: `/api/app/landing-management/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
    })
  );
};

export const useLandingCategoryWiseProductList = (category) => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["category_product_management", category], () =>
    axiousResuest({
      url: `/api/product/product-management/?offset=0&limit=10&product_category__category_name__in=${category}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};

export const usePostLandingCategory = () => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/app/landing-management/`,

        method: "post",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["landing_management"]),
    }
  );
};

// data update

export const useUpdateLandingCategory = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/app/landing-management/${id}/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["landing_management"]),
    }
  );
};

// data deleting
export const useDeleteLandingCategory = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/app/landing-management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["landing_management"]),
    }
  );
};
