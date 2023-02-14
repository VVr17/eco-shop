export interface IMeasure {
  id: string;
  title: string;
  shortcut: string;
  code: string;
}

export interface ICategory {
  id: string;
  // is_active: boolean;
  url: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  // products: [];
}
