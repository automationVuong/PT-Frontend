import Layout from "@/components/layout/Layout";

export default function DangNhapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
