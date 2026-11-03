import Layout from "@/components/layout/Layout";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}) {
  return <Layout>{children}</Layout>;
}
