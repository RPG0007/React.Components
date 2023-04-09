export type CardPreview = {
  id: number;
  title: string;

  image: string;
};
export type Card = CardPreview & {
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  price: number;
};
