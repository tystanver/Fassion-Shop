import axiousResuest from "@/lib/axiousResuest";
import { useQuery } from "@tanstack/react-query";

export const useAsideCategoryData = () =>
  useQuery(["category-management"], () =>
    axiousResuest({
      url: `/api/product/category-management/`,
      method: "get",
    })
  );
export const useAsideCategoryDataQuery = () =>
  useQuery(["category-management"], () =>
    axiousResuest({
      url: `/api/product/product-management/`,
      method: "get",
    })
  );
