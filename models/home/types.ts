// ТИПЫ
export type CardType = {
  id: string | number;
  image: string;
  title: string;
  dateTo: string;
  dateFrom: string;
  isStar: boolean;
  description: string;
  country: string;
  area: string;
  city: string;
  manufacturer: string;
};

// МОДЕЛИ
export type PopularModel = {
  cards: CardType[];
  page: number;
};
