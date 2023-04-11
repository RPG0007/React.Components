export type CardPreview = {
  id: number;
  title: string;

  thumbnail: string;
};
export type Card = CardPreview & {
  description: string;
  category: string;
  rating: number;
  price: number;
};
