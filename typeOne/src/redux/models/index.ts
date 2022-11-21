//category
export interface Category {
  id: number;
  title: String;
  icon: String;
}
// Food Model
export interface FoodModel {
  _id: String;
  name: String;
  description: String;
  category: String;
  price: number;
  readyTime: number;
  image: [string];
}
// Restaurannt Model
export interface Restaurant {
  _id: String;
  name: String;
  foodType: string;
  address: string;
  phone: string;
  images: string;
  foods: [FoodModel];
}
