import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import axiousResuest from "@/lib/axiousResuest";
import { useRouter } from "next/router";
import { bool } from "yup";
import { generateQueryString } from "@/lib/shopPageFilter";

export const useProductDataList = (limit, offset, search = "") => {
  /** session management */
  // const { data: session } = useSession();
  return useQuery(["product-management", limit, offset, search], () =>
    axiousResuest({
      url: `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
      // headers: {
      //   Authorization: `Bearer ${session.accessToken}`,
      // },
    })
  );
};
export const useAllProductDataList = () => {
  /** session management */
  const { data: session } = useSession();
  return useQuery(["allProduct-management"], () =>
    axiousResuest({
      url: `/api/product/product-management/`,
      method: "get",
    })
  );
};

export const useAddProductDataQuery = () => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website`,

        method: "post",
        data: body,
        // headers: {
        //   Authorization: `Bearer ${session.accessToken}`,
        // },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["product-management"]),
    }
  );
};

// data update

export const useUpdateProductData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${id}/`,
        method: "patch",
        data: body,
        // headers: {
        //   Authorization: `Bearer ${session.accessToken}`,
        // },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["product-management"]),
    }
  );
};

// // data deleting
// export const useDeleteProductData = (id) => {
//   const queryClient = useQueryClient();
//   /** session management */
//   // const { data: session } = useSession();
//   return useMutation(
//     async () =>
//       await axiousResuest({
//         url: `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${id}/`,
//         method: "delete",
//         // headers: {
//         //   Authorization: `Bearer ${session.accessToken}`,
//         // },
//       }),
//     {
//       onSuccess: () => queryClient.invalidateQueries(["product-management"]),
//     }
//   );
// };


export const useDeleteProduct = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  // const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `https://64e2fd60bac46e480e77fdc1.mockapi.io/blog-website/${id}/`,

        method: 'delete',
        // headers: {
        //   Authorization: `Bearer ${session.accessToken}`,
        // },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(['our_values']),
    },
  );
};


// export const useShopProductData = () => {
//   return useQuery(["shop-management"], () =>
//     axiousResuest({
//       url: `/api/product/product-management/`,
//       method: "get",
//     })
//   );
// };

// export const useShopPageProducts = (limit, Offset) => {
//   const { query } = useRouter();
//   const product_category__product_type = query?.product_type || "";
//   const product_category__category_name__in = query?.category || "";
//   const is_signature = query?.signature || "";
//   const is_designer = query?.designer || "";
//   const is_discounted = query?.discounted || "";
//   const original_price__range =  query?.original_price__range || "0,5000";
//   const search = query?.search || "";
//   // console.error(query?.original_price__range);
//   // original_price__range

//   return useQuery(
//     [
//       "shop_page_products",
//       limit,
//       Offset,
//       // q_str
//       product_category__product_type,
//       product_category__category_name__in,
//       is_signature,
//       is_designer,
//       is_discounted,
//       original_price__range,
//       selectedItem,
//       search
//     ], // Include the new parameter in the query key
//     () =>
//       axiousResuest({
//         url: `/api/product/product-management/?offset=${Offset}&limit=${limit}&product_category__product_type=${product_category__product_type}&product_category__category_name__in=${product_category__category_name__in}&is_signature=${is_signature}&is_designer=${is_designer}&is_discounted=${is_discounted}&selectedItem=${selectedItem}&original_price__range=${original_price__range}&search=${search}`, // Include the new parameter in the API request URL
//         method: "get",
//       })
//   );
// };

// Replace 'your-file' with the correct path to the file containing generateQueryString

export const useShopPageProducts = (limit=12) => {
 
  const { query } = useRouter();
  const product_category__product_type = query?.product_type || "";
  const product_category__category_name__in = query?.category || "";
  const is_signature = query?.signature || "";
  const is_designer = query?.designer || "";
  const is_discounted = query?.discounted || "";
  const original_price__range = query?.original_price__range || "0,5000";
  const color = query?.color || "";
  const size = query?.size || "";
  const search = query?.search || "";
  const ordering = query?.ordering || "";

  const queryParams = {
    product_category__product_type,
    product_category__category_name__in,
    is_signature,
    is_designer,
    is_discounted,
    original_price__range,
    color,
    size,
    search,
    ordering,
  };

  if (product_category__product_type !== "") {
    queryParams["product_category__product_type"] =
      product_category__product_type;
  }

  if (product_category__category_name__in !== "") {
    queryParams["product_category__category_name__in"] =
      product_category__category_name__in;
  }

  if (is_signature !== "") {
    queryParams["is_signature"] = is_signature;
  }

  if (is_designer !== "") {
    queryParams["is_designer"] = is_designer;
  }

  if (is_discounted !== "") {
    queryParams["is_discounted"] = is_discounted;
  }

  if (original_price__range !== "") {
    queryParams["original_price__range"] = original_price__range;
  }
  if (color !== "") {
    queryParams["color"] = color;
  }
  if (size !== "") {
    queryParams["size"] = size;
  }

  if (search !== "") {
    queryParams["search"] = search;
  }
  if (ordering !== "") {
    queryParams["ordering"] = ordering;
  }

  const queryString = generateQueryString(queryParams);
  // 😎😎😎😎
  return useInfiniteQuery(
    ["shop_page_products", limit, queryString],
    ({ pageParam = 0 }) =>
      axiousResuest({
        url: `/api/product/product-management/?offset=${pageParam}&limit=${limit}&${queryString}`,
      }),
    {
      getNextPageParam: (lastPage, allPages) => {
        const { next } = lastPage;

        return next ? limit * allPages.length : undefined;
      },
    }
  );
};



export const useHomePageProductFilter = (fire) => {
  const product_category__category_name__in = fire || "";

  return useQuery(
    ["useHomePageProductFilter", product_category__category_name__in],
    () =>
      axiousResuest({
        url: `/api/product/product-management/?&product_category__category_name__in=${product_category__category_name__in}`, // Include the new parameter in the API request URL
        method: "get",
      }),
    {
      enabled: fire ? true : false,
    }
  );
};
