import type { NextApiRequest, NextApiResponse } from "next";

interface Menu {
  id: number;
  name: string;
  price: Number;
  imgUrl: string;
  isDisable: boolean;
}
interface Addon {
  id: number;
  name: string;
  price: number;
}
interface AddonCategory {
  id: number;
  name: string;
  isRequired: boolean;
}
interface MenuAddonCategory {
  id: number;
  menuId: number;
  addonCategoryId: number[];
}
interface Addon {
  id: number;
  name: string;
  price: number;
  addonCategoryId: number;
  isAvailable: boolean;
}
const menu: Menu[] = [
  {
    id: 1,
    name: "Icecream",
    price: 2000,
    imgUrl:
      "https://toppng.com/uploads/preview/restaurant-meal-food-clipart-transparent-background-11563402470hvaath7wer.png",
    isDisable: false,
  },
  {
    id: 2,
    name: "Burger",
    price: 200,
    imgUrl:
      "https://toppng.com/uploads/preview/restaurant-meal-food-clipart-transparent-background-11563402470hvaath7wer.png",
    isDisable: false,
  },
  {
    id: 3,
    name: "Pizza",
    price: 1000,
    imgUrl:
      "https://toppng.com/uploads/preview/restaurant-meal-food-clipart-transparent-background-11563402470hvaath7wer.png",
    isDisable: false,
  },
  {
    id: 4,
    name: "Sandwish",
    price: 500,
    imgUrl:
      "https://toppng.com/uploads/preview/restaurant-meal-food-clipart-transparent-background-11563402470hvaath7wer.png",
    isDisable: false,
  },
];

const addon: Addon[] = [
  { id: 1, name: "normal", price: 0, addonCategoryId: 1, isAvailable: true },
  { id: 2, name: "Big", price: 100, addonCategoryId: 1, isAvailable: true },
  {
    id: 3,
    name: "Extra-Big",
    price: 200,
    addonCategoryId: 1,
    isAvailable: true,
  },
  { id: 4, name: "Sugar", price: 0, addonCategoryId: 2, isAvailable: true },
  { id: 5, name: "Chocalate", price: 0, addonCategoryId: 2, isAvailable: true },
  { id: 6, name: "Salt", price: 0, addonCategoryId: 2, isAvailable: true },
  { id: 7, name: "Cola", price: 20, addonCategoryId: 3, isAvailable: true },
  { id: 8, name: "Pessi", price: 20, addonCategoryId: 3, isAvailable: true },
  { id: 9, name: "Fanta", price: 20, addonCategoryId: 3, isAvailable: true },
];
const addonCategory: AddonCategory[] = [
  {
    id: 1,
    name: "Size",
    isRequired: true,
  },
  {
    id: 2,
    name: "Topping",
    isRequired: true,
  },
  {
    id: 3,
    name: "Drink",
    isRequired: false,
  },
];

const menuAddonCategory: MenuAddonCategory[] = [
  { id: 1, menuId: 1, addonCategoryId: [1, 2, 3] },
  { id: 2, menuId: 2, addonCategoryId: [1, 3] },
  { id: 3, menuId: 3, addonCategoryId: [2, 3] },
  { id: 4, menuId: 4, addonCategoryId: [1, 2, 3] },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = req.method;
  if (method === "GET") {
    res.send({ menu, addonCategory, menuAddonCategory, addon });
  }
  res.status(405).send({ msg: "request error" });
}
