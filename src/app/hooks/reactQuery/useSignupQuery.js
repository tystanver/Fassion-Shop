import axiousResuest from "@/lib/axiousResuest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export const useSignupQuery = () => {
    const queryClient = useQueryClient();
    /** session management */
    // const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/auth-app/signup/`,
  
          method: "post",
          data: body,
         
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["signup"]),
      }
    );
  };


export const useResetPasswordQuery = () => {
    const queryClient = useQueryClient();
    /** session management */
    // const { data: session } = useSession();
    return useMutation(
      async (body) =>
        await axiousResuest({
          url: `/api/auth-app/password-reset/`,
  
          method: "post",
          data: body,
         
        }),
      {
        onSuccess: () => queryClient.invalidateQueries(["password-reset"]),
      }
    );
  };