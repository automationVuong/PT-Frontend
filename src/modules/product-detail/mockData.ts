export type PropertyMock = {
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

export const propertyMocks: PropertyMock[] = [
  {
    slug: "biet-thu-gan-trung-tam",
    title: "Biệt thự gần trung tâm",
    location: "Quận 7, TP. Hồ Chí Minh",
    price: "3,8 tỷ",
    area: "180 m²",
    bedrooms: 4,
    bathrooms: 3,
    status: "Đang mở bán",
    type: "Nhà phố / Biệt thự",
    yearBuilt: 2019,
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Hot", "Mới", "View đẹp", "An ninh 24/7"],
    description:
      "Biệt thự nằm trong khu dân cư yên tĩnh, thuận tiện di chuyển đến trung tâm thành phố, trường học, trung tâm thương mại và các tuyến huyết mạch. Thiết kế hiện đại, không gian sống rộng rãi, có sân vườn và phòng khách 2 tầng rất phù hợp cho gia đình có nhu cầu ở lâu dài.",
  },
  {
    slug: "chung-cu-cao-cap",
    title: "Chung cư cao cấp",
    location: "Quận 2, TP. Hồ Chí Minh",
    price: "2,4 tỷ",
    area: "105 m²",
    bedrooms: 3,
    bathrooms: 2,
    status: "Sắp mở bán",
    type: "Chung cư",
    yearBuilt: 2021,
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Sắp mở bán", "View hồ", "Tiện ích đầy đủ"],
    description:
      "Căn hộ cao cấp với thiết kế mở, ánh sáng tự nhiên dồi dào và nhiều tiện ích nội khu như hồ bơi, phòng gym, khu vui chơi trẻ em và nhà trẻ. Vị trí gần trung tâm quận 2, thuận tiện cho công việc và sinh hoạt hằng ngày.",
  },
  {
    slug: "nha-pho-rong",
    title: "Nhà phố rộng",
    location: "Quận 9, TP. Hồ Chí Minh",
    price: "4,9 tỷ",
    area: "220 m²",
    bedrooms: 5,
    bathrooms: 4,
    status: "Đang mở bán",
    type: "Nhà phố",
    yearBuilt: 2018,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Nổi bật", "Rộng", "Gia đình"],
    description:
      "Nhà phố rộng với mặt tiền thoáng và thiết kế tối ưu cho đời sống gia đình, phù hợp cho nhu cầu ở lâu dài hoặc đầu tư. Khu vực có hạ tầng phát triển, giao thông thuận tiện và môi trường sống xanh.",
  },
];

export const relatedProperties = [
  {
    title: "Nhà phố rộng",
    location: "Quận 9, TP. Hồ Chí Minh",
    price: "4,9 tỷ",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Căn hộ hiện đại",
    location: "Bình Thạnh, TP. Hồ Chí Minh",
    price: "1,9 tỷ",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Nhà nghỉ dưỡng",
    location: "Vũng Tàu",
    price: "6,3 tỷ",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
  },
];
