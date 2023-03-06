export interface ICountry {
  name: string;
}

export interface ICartCardData {
  id: string;
  name: string;
  value: string;
  increaseVolume: string;
  unit: string;
  price: string;
  currency: string;
  imgPath: string;
}

export interface ISelectList {
  name: string;
}

export interface IUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  birthDate?: string;
  password: string;
}
