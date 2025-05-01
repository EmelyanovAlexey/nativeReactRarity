// ТИПЫ

// МОДЕЛИ
export type UserModel = {
  email: string;
  name: string;
  tocken: string;
  error: string;
};

// ПАРАМЕТРЫ
export type LoginFXParam = {
  email: string;
  password: string;
};

export type RegisterFXParam = {
  email: string;
  password: string;
};

export type BaseResponse = {
  status: string;
  messages: string[];
};

// РЕЗУЛЬТАТЫ
