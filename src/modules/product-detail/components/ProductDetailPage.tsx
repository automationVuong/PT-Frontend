import { ProductGallery } from "./ProductGallery";
import { ProductInfo } from "./ProductInfo";
import { ProductSummary } from "./ProductSummary";
import { RelatedProperties } from "./RelatedProperties";
import { ProductVirtualTour } from "./ProductVirtualTour";

type ProductDetail = {
  slug: string;
  title: string;
  location: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  status: string;
  type: string;
  yearBuilt: number;
  image: string;
  gallery: string[];
  tags: string[];
  description: string;
};

type ProductDetailPageProps = {
  product: ProductDetail;
  related: Array<{
    title: string;
    location: string;
    price: string;
    image: string;
  }>;
};

export function ProductDetailPage({ product, related }: ProductDetailPageProps) {
  const summaryNotes = [
    { label: "Diện tích", value: product.area },
    { label: "Phòng ngủ", value: `${product.bedrooms} PN` },
    { label: "Phòng tắm", value: `${product.bathrooms} WC` },
    { label: "Năm xây", value: String(product.yearBuilt) },
  ];

  const trustedBrokers = [
    {
      name: "Nguyễn Minh Anh",
      role: "Senior Broker",
      experience: "8 năm",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Lê Hoàng Nam",
      role: "Investment Advisor",
      experience: "6 năm",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Trần Khánh Vy",
      role: "Luxury Properties",
      experience: "10 năm",
      rating: "5.0",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <main className="bg-[#f5f7fb] pb-16 text-slate-800">
      <section className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <span className="transition hover:text-slate-700">Trang chủ</span>
          <span>/</span>
          <span className="transition hover:text-slate-700">Bất động sản cũ</span>
          <span>/</span>
          <span className="font-semibold text-slate-700">{product.title}</span>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.7fr_0.9fr]">
          <ProductGallery gallery={product.gallery} title={product.title} />
          <ProductSummary
            title={product.title}
            location={product.location}
            price={product.price}
            status={product.status}
            productId={product.slug}
            notes={summaryNotes}
            tags={product.tags}
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-2 lg:px-6">
        <ProductInfo description={product.description} type={product.type} status={product.status} />
      </section>

      <ProductVirtualTour title={product.title} image={product.gallery[0]} />

      <RelatedProperties items={related} />
    </main>
  );
}
