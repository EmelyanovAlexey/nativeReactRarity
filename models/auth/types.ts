// ТИПЫ

// МОДЕЛИ
export type UserModel = {
  email: string;
  name: string;
};

// ПАРАМЕТРЫ
export type RegisterFXParam = {
  email: string;
  password: string;
};

export type BaseResponse = {
  status: string;
  messages: string[];
};

// РЕЗУЛЬТАТЫ
