'use client';
import React from 'react';
import { ImageGallery } from './components/ImageGallery';
import { PropertyHeader } from './components/PropertyHeader';
import { SidebarCard } from './components/SidebarCard';
import { DescriptionSection } from './components/DescriptionSection';
import { CalculatorsSection } from './components/CalculatorsSection';
import { MapSection } from './components/MapSection';
import { SimilarProperties } from './components/SimilarProperties';

const mockProperty: any = {
  id: '1',
  title: 'Căn hộ 2 phòng ngủ đang bán',
  address: 'Belsize Park Gardens, Belsize Park, London, NW3',
  price: 1250000,
  priceQualifier: 'Giá chào bán tốt nhất',
  bedrooms: 2,
  bathrooms: 2,
  propertyType: 'Căn hộ / Chung cư',
  tenure: 'Đồng sở hữu vĩnh viễn (Share of Freehold)',
  images: [
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
  ],
  description: 'Một căn hộ 2 phòng ngủ đặc biệt sáng sủa và thoáng đãng, nằm ở tầng trệt cao của một tòa nhà cải tạo theo phong cách Victoria uy nghi. Căn hộ nổi bật với trần nhà cao, cửa sổ lồi lớn nhìn ra khu vườn chung được chăm sóc tỉ mỉ, tủ bếp tích hợp thiết kế riêng và phòng tắm riêng sang trọng.',
  keyFeatures: [
    'Tòa nhà kiểu Victoria cải tạo ở tầng trệt cao',
    'Hai phòng ngủ đôi có tủ đựng đồ lắp sẵn',
    'Phòng khách không gian mở ấn tượng với trần cao',
    'Lối đi riêng ra khu vườn cảnh quan chung',
    'Đồng sở hữu vĩnh viễn với thời hạn thuê dài còn lại',
    'Vị trí đắc địa tại Belsize Park gần ga tàu điện ngầm'
  ],
  branch: {
    name: 'Glentree International, Hampstead',
    logo: '',
    phone: '+44 20 7435 1131',
    address: '696 Finchley Road, London, NW11 7NT'
  }
};

const mockSimilar: any[] = [
  {
    id: '2',
    title: 'Căn hộ 2 phòng ngủ',
    address: 'Haverstock Hill, London, NW3',
    price: 1150000,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Căn hộ',
    tenure: 'Thuê dài hạn (Leasehold)',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80'],
    description: '',
    keyFeatures: [],
    branch: { name: '', logo: '', phone: '', address: '' }
  },
  {
    id: '3',
    title: 'Căn hộ chung cư 2 phòng ngủ',
    address: 'Primrose Hill, London, NW1',
    price: 1350000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Chung cư',
    tenure: 'Đồng sở hữu vĩnh viễn',
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80'],
    description: '',
    keyFeatures: [],
    branch: { name: '', logo: '', phone: '', address: '' }
  },
  {
    id: '4',
    title: 'Nhà kiểu Maisonette 2 phòng ngủ',
    address: 'Swiss Cottage, London, NW3',
    price: 1195000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Maisonette',
    tenure: 'Thuê dài hạn',
    images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80'],
    description: '',
    keyFeatures: [],
    branch: { name: '', logo: '', phone: '', address: '' }
  }
];

export const PropertyDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Thư viện ảnh */}
        <ImageGallery images={mockProperty.images} title={mockProperty.title} />

        {/* Thông tin đầu trang */}
        <PropertyHeader property={mockProperty} />

        {/* Bố cục nội dung chính và thanh bên */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Cột trái (Mô tả, Bản đồ, Máy tính tài chính) */}
          <div className="lg:col-span-2 space-y-6">
            <DescriptionSection 
              description={mockProperty.description} 
              keyFeatures={mockProperty.keyFeatures} 
            />
            <MapSection address={mockProperty.address} />
            <CalculatorsSection price={mockProperty.price} />
          </div>

          {/* Cột phải (Thanh bên liên hệ môi giới) */}
          <div className="lg:col-span-1">
            <SidebarCard property={mockProperty} />
          </div>

        </div>

        {/* Phần bất động sản tương tự */}
        <SimilarProperties properties={mockSimilar} />

      </div>
    </div>
  );
};

export default PropertyDetailPage;