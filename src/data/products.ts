export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

export const products: Product[] = [
  { id: 1, name: "Bạch Tuộc", price: 150000, image: "/images/Sinh_Vat/Bach_Tuoc.jpg", category: "Sinh vật", stock: 12 },
  { id: 2, name: "Cá bác sĩ Panda", price: 420000, image: "/images/Sinh_Vat/Cá bác sĩ Panda.jpg", category: "Sinh vật", stock: 5 },
  { id: 3, name: "Cá bút chì", price: 690000, image: "/images/Sinh_Vat/Cá bút chì dọn bể.jpg", category: "Sinh vật", stock: 0 },
  { id: 4, name: "Đèn chiếu sáng", price: 185000, image: "/images/Thiet_Bi/Ảnh_1.jpg", category: "Thiết bị", stock: 20 },
  { id: 5, name: "Đè chiếu sáng 2", price: 550000, image: "/images/Thiet_Bi/Den_Ho_Ca_1.jpg", category: "Thiết bị", stock: 8 },
  { id: 6, name: "Đồ hút", price: 245000, image: "/images/Thiet_Bi/Dụng cụ hút cặn bể cá.jpg", category: "Thiết bị", stock: 15 },
];
