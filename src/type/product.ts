export type typeDataProduct = {
  id: number;
  name: string;
  category: string;
  desc: string;
  price: number;
  image: string;
};
export type typeProduct = Omit<typeDataProduct, "id">;
