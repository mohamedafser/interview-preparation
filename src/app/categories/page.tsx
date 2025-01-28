import CategoryCard from "@/components/category-card";
import AppLayout from "@/components/layouts/app-layout";
import { catDatas } from "@/data/category";
import Container from "@mui/material/Container";
import Link from "next/link";
import React from "react";
import Grid from "@mui/material/Grid2";

const Categories = () => {
  if (catDatas.length === 0) {
    return <div>No Categories</div>;
  }

  return (
    <div>
      <AppLayout />
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ margin: "10px 0" }}>
          {catDatas.map((cat) => (
            <Grid size={{ md: 4, sm: 12 }} key={cat.id}>
              <Link href={cat.url}>
                <CategoryCard
                  title={cat.name}
                  description={cat.description}
                  image={cat.img}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Categories;
