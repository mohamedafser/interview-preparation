type CatDatas = {
  id: number | string;
  name: string;
  url: string;
  description: string;
  img: string;
};

export const catDatas: CatDatas[] = [
  {
    id: 1,
    name: "IT",
    url: "/categories/IT/html",
    description: "IT Industry Lore Ipsum",
    img: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
  },
  {
    id: "2",
    name: "Accounting",
    url: "#",
    description: "Accounting Industry Lore Ipsum",
    img: "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
  },
];
