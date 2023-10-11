import { useAppDispatch, useAppSelector } from "@/store/hook";
import { fetchData } from "@/store/slices/appSlice";
import { Box } from "@mui/material";
import Link from "next/link";
import React, { useEffect } from "react";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const { menu } = useAppSelector((store) => store.appData);
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      {menu.map((item) => {
        return (
          <Link href={`/menu/${item.id}`}>
            <Box sx={{ mx: 3 }}>
              <img src={item.imgUrl} alt="" width={100} />
              <h1>{item.name}</h1>
            </Box>
          </Link>
        );
      })}
    </Box>
  );
};

export default HomePage;
