import { ProductDetailPage } from "@/modules/product-detail";
import { propertyMocks, relatedProperties } from "@/modules/product-detail/mockData";

export default async function Page({
  params,
}: {
  params: Promise<{ lng: string; home: string; product: string }>;
}) {
  const { product } = await params;
  const selectedProduct =
    propertyMocks.find((item) => item.slug === product) ?? propertyMocks[0];

  return <ProductDetailPage product={selectedProduct} related={relatedProperties} />;
}
