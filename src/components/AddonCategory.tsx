import { useAppSelector } from "@/store/hook";
import { Addon, AddonCategory } from "@/types/types";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
interface Props {
  validAddonCategories: AddonCategory[];
}
const AddonCategory = ({ validAddonCategories }: Props) => {
  const { addon } = useAppSelector((store) => store.appData);
  const [seletedAddons, setSelectedAddons] = useState<Addon[]>([]);
  return (
    <Box>
      {validAddonCategories.map((item) => {
        const addons = addon.filter((ele) => ele.addonCategoryId === item.id);

        const handleOncahnge = (selected: boolean, addon: Addon) => {
          if (selected) {
            setSelectedAddons([...seletedAddons, addon]);
          }
        };

        console.log(seletedAddons);
        return (
          <Box>
            <Box sx={{ display: "flex", my: 2 }}>
              <Typography variant="h5">{item.name}</Typography>
              <Typography fontSize={10}>
                {item.isRequired ? "Require" : ""}
              </Typography>
            </Box>
            <Box>
              {addons.map((ele) => (
                <Box>
                  <FormControlLabel
                    value={ele.name}
                    label={ele.name}
                    control={
                      item.isRequired ? (
                        <Radio
                          checked={
                            seletedAddons.find((yyy) => yyy.id === ele.id)
                              ? true
                              : false
                          } //seadd == [1,2] == clicke ele.id
                          onChange={(e, value) => handleOncahnge(value, ele)}
                        />
                      ) : (
                        <Checkbox
                          checked={
                            seletedAddons.find((zzz) => zzz.id === ele.id)
                              ? true
                              : false
                          }
                          onChange={(e, value) => handleOncahnge(value, ele)}
                        />
                      )
                    }
                  />
                </Box>
              ))}
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Box>
  );
};

export default AddonCategory;
