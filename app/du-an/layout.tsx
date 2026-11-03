import { ReactNode } from "react";
import Layout from "@/components/layout/Layout";

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params?: any;
}) {
  return <Layout>{children}</Layout>;
}