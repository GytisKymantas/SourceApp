export const paths = {
  dashboard: "/dashboard/dashboard",
  reservations: "/dashboard/reservations",
  meetingrooms: "/dashboard/reservations/meetingrooms",
  books: "/dashboard/reservations/books",
  devices: "/dashboard/reservations/devices",
  eatout: "/dashboard/eatout",
  category: "/dashboard/eatout/category",
  single: "/dashboard/eatout/category/single",
};

// Eatout and reservation pages have dynamic items to be displayed
// For this reason paths should have a property like this -
// dynamic: (id) => `/item/${id}`;
