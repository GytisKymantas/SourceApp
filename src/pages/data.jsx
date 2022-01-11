// mock data which will be removed when new data will be merged
export const restaurantsData = [
  {
    name: "Grill London (Kaunas, PLC Mega)",
    id: "120wsdlpx",
    slogan: "Best burgers in the town",
    createdDate: "2019-06-05",
    description:
      "„Grill London” is a chain of grill restaurants that visitors love because of its exceptional and responsible take on food quality. All of its steaks are grilled in unique ceramic grills using ecological fuels.",
    openingHours: [
      {
        days: "Monday - Friday",
        hours: "10:30 - 22:15",
      },
      {
        days: "Saturday - Sunday",
        hours: "11:00 - 23:00",
      },
    ],
    website: "http://grilllondon.lt",
    location: {
      address: "Islandijos pl. 32, Kaunas",
      coordinates: {
        lat: 54.94013552838086,
        lng: 23.891938359698315,
      },
    },
    phone: "+370 627 93122",
    image:
      "https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    checkIns: 8,
    reviews: [
      {
        userName: "Luke Skywalker",
        id: "730tybsl12",
        comment: "Tasty burgers, but had to wait a long line.",
        rating: 4,
      },
      {
        userName: "Uncle Roger",
        id: "10f836s0pw",
        comment: "Didn't have fried rice, a bit disappointed.",
        rating: 3.5,
      },
      {
        userName: "Sara Lars",
        id: "183gstwpl6",
        comment:
          "Food didn’t meet my expectations, but it was fine. But the customer experience was flawless!",
        rating: 5,
      },
      {
        userName: "Wade Owen Watts",
        id: "183620uer",
        comment: "Good burgers, good price",
        rating: 4,
      },
    ],
    categories: ["Burger", "Salads", "Grill"],
  },
  {
    name: "Jurgis ir Drakonas",
    id: "wtlztmw3r",
    slogan: "Fire up the taste",
    createdDate: "2019-06-07",
    description:
      "Jurgis ir Drakonas make pizza for the real heroes. Real heroes understand the best quality. Our authenitic Neapolitan tradition pizza are made from real Italian 00 flour. Tomatoes grown under the hot Italian sun are ripe and rich, and Italian fior di latte mozzarella melts in your mouth.",
    openingHours: [
      {
        days: "Monday - Sunday",
        hours: "12:00 - 20:00",
      },
    ],
    website: "https://jurgisirdrakonas.lt",
    location: {
      address: "Kurpių g. 26, Kaunas",
      coordinates: {
        lat: 54.895815575566495,
        lng: 23.895146363387344,
      },
    },
    phone: "+370 672 00320",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2514&q=80",
    checkIns: 12,
    reviews: [
      {
        userName: "Jefferson Gutierrez",
        id: "i8r7gpdpfi",
        comment:
          "Cosy outside seating, tasty food. Recommended for everyone who’s looking for nice dinner both inside or outside.",
        rating: 4.5,
      },
      {
        userName: "Edgar Abbott",
        id: "0rqlywcr8c",
        comment:
          "Nice place, a lot of natural food, exclusive pizza. Ice cream which you can get only in this restaurant. Good place for children.",
        rating: 5,
      },
      {
        userName: "Samantha Henry",
        id: "9hku9agnj4",
        comment:
          "Ok pizza, good beer. Environment is better for family than for business traveler attempting to relax over dinner. Lots of kids.",
        rating: 3,
      },
      {
        userName: "Edric Ingram",
        id: "fs6jf8u00z",
        comment:
          "Nice pizza, but not the best I had. Friendly staff, reasonably priced menu. Was very quiet when we visited.",
        rating: 4,
      },
      {
        userName: "Valerie Jordan",
        id: "3snsdmmxz1",
        comment: "Hated it.",
        rating: 1,
      },
      {
        userName: "Samuel Frost",
        id: "wdni7vwbuy",
        comment: "Most awesome pizza I ever had!",
        rating: 5,
      },
    ],
    categories: ["Salads", "Pizza", "Pancakes", "Soups"],
  },
  {
    name: "Mamma Pizza",
    id: "7et2tk3ih",
    slogan: "Like from your mom - just better",
    createdDate: "2019-06-02",
    description:
      "Small, but very cozy place in the center of Kaunas, very tasty food with vegetarian options, vegan too. Super friendly staff.",
    openingHours: [
      {
        days: "Monday - Sunday",
        hours: "10:00 - 23:00",
      },
    ],
    website: "http://www.mammapizza.lt",
    location: {
      address: "Vytauto pr. 37, Kaunas",
      coordinates: {
        lat: 54.88976231771571,
        lng: 23.92600737177067,
      },
    },
    phone: "+370 680 97977",
    image:
      "https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNjA3NH0&auto=format&fit=crop&w=2550&q=80",
    checkIns: 6,
    reviews: [
      {
        userName: "Eloise Matthews",
        id: "o0qtbt1x97",
        comment:
          "One of The best Pizza in town. Good fresh juice. Family friendly and quite nice music.",
        rating: 4,
      },
      {
        userName: "Marc Baxter",
        id: "n2jebjv5kc",
        comment: "Good, but nothing special.",
        rating: 2.5,
      },
      {
        userName: "Stewart Henry",
        id: "iyvfh3hlqj",
        comment:
          "We ordered two pizzas. Both were almost cold when served (it was not busy time). Beer and cider one the other hand were warm on a day of 30 degrees celsius.",
        rating: 1,
      },
      {
        userName: "Travis Farmer",
        id: "5bcbeuz4py",
        comment:
          "The best pizza`s in Kaunas. Very delicious, quality ingredients, very kind and good service and affordable prices. Must visit.",
        rating: 5,
      },
    ],
    categories: ["Pizza"],
  },
  {
    name: "Grill London (Kaunas, PLC Mega)",
    id: "120wsdlpx4",
    slogan: "Best burgers in the town",
    createdDate: "2019-06-05",
    description:
      "„Grill London” is a chain of grill restaurants that visitors love because of its exceptional and responsible take on food quality. All of its steaks are grilled in unique ceramic grills using ecological fuels.",
    openingHours: [
      {
        days: "Monday - Friday",
        hours: "10:30 - 22:15",
      },
      {
        days: "Saturday - Sunday",
        hours: "11:00 - 23:00",
      },
    ],
    website: "http://grilllondon.lt",
    location: {
      address: "Islandijos pl. 32, Kaunas",
      coordinates: {
        lat: 54.94013552838086,
        lng: 23.891938359698315,
      },
    },
    phone: "+370 627 93122",
    image:
      "https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
    checkIns: 8,
    reviews: [
      {
        userName: "Luke Skywalker",
        id: "730tybsl12",
        comment: "Tasty burgers, but had to wait a long line.",
        rating: 4,
      },
      {
        userName: "Uncle Roger",
        id: "10f836s0pw",
        comment: "Didn't have fried rice, a bit disappointed.",
        rating: 3.5,
      },
      {
        userName: "Sara Lars",
        id: "183gstwpl6",
        comment:
          "Food didn’t meet my expectations, but it was fine. But the customer experience was flawless!",
        rating: 5,
      },
      {
        userName: "Wade Owen Watts",
        id: "183620uer",
        comment: "Good burgers, good price",
        rating: 4,
      },
    ],
    categories: ["Burger", "Salads", "Grill"],
  },
  {
    name: "Jurgis ir Drakonas",
    id: "wtlztmw3rr",
    slogan: "Fire up the taste",
    createdDate: "2019-06-07",
    description:
      "Jurgis ir Drakonas make pizza for the real heroes. Real heroes understand the best quality. Our authenitic Neapolitan tradition pizza are made from real Italian 00 flour. Tomatoes grown under the hot Italian sun are ripe and rich, and Italian fior di latte mozzarella melts in your mouth.",
    openingHours: [
      {
        days: "Monday - Sunday",
        hours: "12:00 - 20:00",
      },
    ],
    website: "https://jurgisirdrakonas.lt",
    location: {
      address: "Kurpių g. 26, Kaunas",
      coordinates: {
        lat: 54.895815575566495,
        lng: 23.895146363387344,
      },
    },
    phone: "+370 672 00320",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2514&q=80",
    checkIns: 12,
    reviews: [
      {
        userName: "Jefferson Gutierrez",
        id: "i8r7gpdpfi",
        comment:
          "Cosy outside seating, tasty food. Recommended for everyone who’s looking for nice dinner both inside or outside.",
        rating: 4.5,
      },
      {
        userName: "Edgar Abbott",
        id: "0rqlywcr8c",
        comment:
          "Nice place, a lot of natural food, exclusive pizza. Ice cream which you can get only in this restaurant. Good place for children.",
        rating: 5,
      },
      {
        userName: "Samantha Henry",
        id: "9hku9agnj4",
        comment:
          "Ok pizza, good beer. Environment is better for family than for business traveler attempting to relax over dinner. Lots of kids.",
        rating: 3,
      },
      {
        userName: "Edric Ingram",
        id: "fs6jf8u00z",
        comment:
          "Nice pizza, but not the best I had. Friendly staff, reasonably priced menu. Was very quiet when we visited.",
        rating: 4,
      },
      {
        userName: "Valerie Jordan",
        id: "3snsdmmxz1",
        comment: "Hated it.",
        rating: 1,
      },
      {
        userName: "Samuel Frost",
        id: "wdni7vwbuy",
        comment: "Most awesome pizza I ever had!",
        rating: 5,
      },
    ],
    categories: ["Salads", "Pizza", "Pancakes", "Soups"],
  },
  {
    name: "Mamma Pizza",
    id: "7et2tk3ih1",
    slogan: "Like from your mom - just better",
    createdDate: "2019-06-02",
    description:
      "Small, but very cozy place in the center of Kaunas, very tasty food with vegetarian options, vegan too. Super friendly staff.",
    openingHours: [
      {
        days: "Monday - Sunday",
        hours: "10:00 - 23:00",
      },
    ],
    website: "http://www.mammapizza.lt",
    location: {
      address: "Vytauto pr. 37, Kaunas",
      coordinates: {
        lat: 54.88976231771571,
        lng: 23.92600737177067,
      },
    },
    phone: "+370 680 97977",
    image:
      "https://images.unsplash.com/photo-1589906493606-a6ca2a06078b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyNjA3NH0&auto=format&fit=crop&w=2550&q=80",
    checkIns: 6,
    reviews: [
      {
        userName: "Eloise Matthews",
        id: "o0qtbt1x97",
        comment:
          "One of The best Pizza in town. Good fresh juice. Family friendly and quite nice music.",
        rating: 4,
      },
      {
        userName: "Marc Baxter",
        id: "n2jebjv5kc",
        comment: "Good, but nothing special.",
        rating: 2.5,
      },
      {
        userName: "Stewart Henry",
        id: "iyvfh3hlqj",
        comment:
          "We ordered two pizzas. Both were almost cold when served (it was not busy time). Beer and cider one the other hand were warm on a day of 30 degrees celsius.",
        rating: 1,
      },
      {
        userName: "Travis Farmer",
        id: "5bcbeuz4py",
        comment:
          "The best pizza`s in Kaunas. Very delicious, quality ingredients, very kind and good service and affordable prices. Must visit.",
        rating: 5,
      },
    ],
    categories: ["Pizza"],
  },
];
