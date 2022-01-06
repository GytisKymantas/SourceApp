export const paths = {
  dashboard: "/dashboard",
  reservations: "/dashboard/reservations",
  meetingrooms: "/dashboard/reservations/meetingrooms",
  books: "/dashboard/reservations/books",
  devices: "/dashboard/reservations/devices",
  eatout: "/dashboard/eatout",
  burger: "/dashboard/eatout/burger",
  salads: "/dashboard/eatout/salads",
  grill: "/dashboard/eatout/grill",
  pizza: "/dashboard/eatout/pizza",
  pancakes: "/dashboard/eatout/pancakes",
  soups: "/dashboard/eatout/soups",
  sweets: "/dashboard/eatout/sweets",
  breakfast: "/dashboard/eatout/breakfast",
  ramen: "/dashboard/eatout/ramen",
  sandwich: "/dashboard/eatout/sandwich",
  kebab: "/dashboard/eatout/kebab",
  sushi: "/dashboard/eatout/sushi",
  hotdogs: "/dashboard/eatout/hotdogs",
  donuts: "/dashboard/eatout/donuts",
  single: "/dashboard/eatout/category/single",
};

// Eatout and reservation pages have dynamic items to be displayed
// For this reason paths should have a property like this -
// dynamic: (id) => `/item/${id}`;
