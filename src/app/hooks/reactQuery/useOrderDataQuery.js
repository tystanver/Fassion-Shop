import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useSingleProductsDataQuery = (id) => {
  console.log(id);
  /** session management */
  return useQuery(["Single_product", id], () =>
    axiousResuest({
      url: `/api/product/product-management/${id}/`,
      method: "get",
    })
  );
};

export const useOrderDataQuery = () => {
  return useMutation(async (body) => {
    return await axiousResuest({
      url: `/api/sale/order-create/`,
      method: "post",
      data: body,
    });
  });
};

// ------------------Bulk Order-----------------------

export const useBulkOrderDataQuery = () => {
  const { data: session } = useSession();
  return useMutation(async (body) => {
    return await axiousResuest({
      url: `/api/sale/bulk-order/`,
      method: "post",
      data: body,
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    });
  });
};



// Dashboard All order


export const useOrderAllDataList = (limit, offset,search = "") => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["order-management", limit, offset,search], () =>
    axiousResuest({
      url: `/api/sale/order-management/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};
// Dashboard Single order


export const useOrderSingleDataList = () => {
 
  /** session management */
  const { data: session } = useSession();
  return useQuery(["order-management"], () =>
    axiousResuest({
      url: `/api/sale/order-create/`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};
// Dashboard All Bulk order


export const useAllBulkOrderList = (limit, offset, search = "") => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["bulk-order-management", limit, offset, search], () =>
    axiousResuest({
      url: `/api/sale/bulk-order-management/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};

// Dashboard My Bulk order

export const useMyBulkOrderDataList = (limit, offset, search = "") => {
 
  /** session management */
  const { data: session } = useSession();
  return useQuery(["bulk-order-management", limit, offset, search], () =>
    axiousResuest({
      url: `/api/sale/bulk-order/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
    })
  );
};

export const useUpdateBulkOrderData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/sale/bulk-order-management/${id}/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["bulk-order-management"]),
    }
  );
};





export const useSingleOrderDataQuery = (limit, offset, search = "") => {
  // console.log(id);
  /** session management */
  const { data: session } = useSession();
  return useQuery(["order-management", limit, offset, search], () =>
    axiousResuest({
      url: `/api/sale/order-create/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
      },
      
    })
  );
};


// data update

export const useUpdateOrderData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/sale/order-management/${id}/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["order-management"]),
    }
  );
};



// data deleting
export const useDeleteOrderData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/sale/order-management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["order-management"]),
    }
  );
};



