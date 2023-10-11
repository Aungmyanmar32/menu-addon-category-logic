export interface Menu {
  id: number;
  name: string;
  price: Number;
  imgUrl: string;
  isDisable: boolean;
}
export interface Addon {
  id: number;
  name: string;
  price: number;
}
export interface AddonCategory {
  id: number;
  name: string;
  isRequired: boolean;
}
export interface MenuAddonCategory {
  id: number;
  menuId: number;
  addonCategoryId: number[];
}

export interface Addon {
  id: number;
  name: string;
  price: number;
  addonCategoryId: number;
  isAvailable: boolean;
}
export interface Data {
  menu: Menu[];
  addon: Addon[];
  addonCategory: AddonCategory[];
  menuAddonCategory: MenuAddonCategory[];
}
