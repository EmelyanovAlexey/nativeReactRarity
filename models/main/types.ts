// ТИПЫ
export enum ActiveTab {
  favorite,
  home,
  search,
  profile,
}

// МОДЕЛИ
export type MainModel = {
  activeTab: ActiveTab;
};
