import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../../context/AuthProvider";

function Provider({ children }) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "#92CF29",
            color: "#FAFAFA",
            fontSize: "20px",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default Provider;
