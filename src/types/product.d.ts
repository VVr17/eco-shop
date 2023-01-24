export interface ICustomerReview {
  id: string;
  name: string;
  date: string;
  desc: string;
  rating: string;
}

export interface IProduct {
  id: string;
  name: string;

  composition: string;
  country: string;
  brand: string;
  inStock: boolean;

  initialVolume: string;
  increaseVolume: string;
  measure: string;
  onSale: boolean;
  price: string;
  oldPrice: string;
  currency: string;
  imgPath: string;
  description: string;
  nutritionalValue: string;
  vitamins: string;
  minerals: string;
  rating: string;
  customerReviews: ICustomerReview[];
}
