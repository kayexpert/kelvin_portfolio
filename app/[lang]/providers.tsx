"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Theme } from "@radix-ui/themes";
import { useConfigStore } from "@/zustand/store";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  const { appTheme } = useConfigStore();
  const queryClient = new QueryClient();
  return (
    <>
        <Theme accentColor={"gray"} appearance={appTheme || 'inherit'} radius="large" >
          <QueryClientProvider client={queryClient}>
            {children}
            <Toaster position="top-center" richColors />
          </QueryClientProvider>
        </Theme>
    </>
  );
}
