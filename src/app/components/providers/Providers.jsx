"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { useState } from "react";

function Providers({ children }) {
  const [client] = useState(new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <SnackbarProvider>{children}</SnackbarProvider>
    </QueryClientProvider>
  );
}

export default Providers;