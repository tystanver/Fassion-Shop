// import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

// export const useEventDataList = (limit, offset, search = "") => {
//   /** session management */
//   // const { data: session } = useSession();
//   return useQuery( limit, offset, search, () =>
//     axiousResuest({
//       url: `/api/app/event-management/?offset=${offset}&limit=${limit}&search=${search}`,
//       method: "get",
//       // headers: {
//       //   Authorization: `Bearer ${session.accessToken}`,
//       // },
//     })
//   );
// };

// new HOOk

import axios from 'axios';

export const useEventDataList = (limit, offset, search = "") => {
  return useQuery(['eventData', limit, offset, search], () =>
    axios.get(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON ?offset=${offset}&limit=${limit}&search=${search}`)
  );
};




export const usePublicEventDataList = (limit, offset, search = "") => {
  /** session management */
  return useQuery(["event-management", limit, offset, search], () =>
    axiousResuest({
      url: `/api/app/event-management/?offset=${offset}&limit=${limit}&search=${search}`,
      method: "get",
    })
  );
};



export const useAllEventDataQuery = () => {
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
      onSuccess: () => queryClient.invalidateQueries(["event-management"]),
    }
  );
};

// data update

export const useUpdateEventData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async (body) =>
      await axiousResuest({
        url: `/api/app/event-management/${id}/`,
        method: "patch",
        data: body,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["event-management"]),
    }
  );
};

// data deleting
export const useDeleteEventData = (id) => {
  const queryClient = useQueryClient();
  /** session management */
  const { data: session } = useSession();
  return useMutation(
    async () =>
      await axiousResuest({
        url: `/api/app/event-management/${id}/`,
        method: "delete",
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
        },
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["event-management"]),
    }
  );
};
