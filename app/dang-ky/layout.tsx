import Layout from "@/components/layout/Layout";

export default function DangKyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
