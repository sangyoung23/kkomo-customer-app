export type MockShop = {
  id: string;
  name: string;
  rating: number;
  distance: string;
  image: string;
  reviewCount: number;
};

export const MOCK_SHOPS: MockShop[] = [
  {
    id: "1",
    name: "펫살롱 강남점",
    rating: 4.9,
    distance: "1.2km",
    reviewCount: 32,
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
  },
  {
    id: "2",
    name: "댕댕이 미용실",
    rating: 4.8,
    distance: "2.0km",
    reviewCount: 21,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1",
  },
  {
    id: "3",
    name: "꼬모 애견미용",
    rating: 4.7,
    distance: "2.8km",
    reviewCount: 15,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7",
  },
];
