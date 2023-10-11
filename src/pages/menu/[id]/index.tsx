import AddonCategory from "@/components/AddonCategory";
import { useAppSelector } from "@/store/hook";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const MenuDatailPage = () => {
  const { menu, menuAddonCategory, addonCategory } = useAppSelector(
    (store) => store.appData
  );
  const router = useRouter();
  const menuId = Number(router.query.id); //4

  const currentMenu = menu.find((item) => item.id === menuId);
  console.log(currentMenu?.name);

  const validAddonCategoryIds = menuAddonCategory.find(
    (item) => item.menuId === menuId
  )?.addonCategoryId; //[1,2,3]

  const validAddonCategories = addonCategory.filter((item) =>
    validAddonCategoryIds?.includes(item.id)
  );
  //item.id = 4
  //[1,2,3]ထဲမှာ 4 ပါသလား? true
  //[{id:1,name:dfd adfad, r},{id:2,name:dfd adfad, r},{id:3,name:dfd adfad, r}]

  // category : id 1 --> [1,2,3] = true

  if (!currentMenu) return null;
  return (
    <Box>
      <h1>{currentMenu.name}</h1>
      <AddonCategory validAddonCategories={validAddonCategories} />
      <Button variant="contained">ADD to cart</Button>
    </Box>
  );
};

export default MenuDatailPage;
