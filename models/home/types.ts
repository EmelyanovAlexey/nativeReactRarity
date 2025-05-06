// ТИПЫ
export type CardType = {
  id: number;
  name: string;
  description: string;
  image: string;
  date_from: string;
  date_to: string;
  is_favourite: boolean;
};

export type CardDetailType = {
  id: number;
  name: string;
  description: string;
  image: string;
  date_from: string;
  date_to: string;
  is_favourite: boolean;
  country: string;
  region: string;
  city: string;
  manufacturer: string;
};

// МОДЕЛИ
export type PopularModel = {
  cards: CardType[];
  cardDetail: CardDetailType | null;
  page: number;
};

// ПАРАМЕТРЫ
export type getCardsFxParam = {
  regionName?: string;
  countryName?: string;
  manufacturerName?: string;
  photoUri?: string | null;
};
