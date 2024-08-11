import {
  Store1Png,
  Store2Png,
  Store3Png,
  Store4Png,
  Store5Png,
} from "./src/assets/images/stores";

const stores = [
  {
    id: 1,
    image: Store1Png,
    name: "台北中山旗艦店",
    tel: "(02)0001234",
    openAt: "10:00",
    closeAt: "21:00",
    address: "台北市中山區南京東路25巷2-1號",
    locationId: 2,
  },
  {
    id: 2,
    image: Store2Png,
    name: "台北綠園店",
    tel: "(02)0002345",
    openAt: "10:00",
    closeAt: "21:00",
    address: "台北市中正區復興南路132-1號",
    locationId: 2,
  },
  {
    id: 3,
    image: Store3Png,
    name: "台中清水旗艦店",
    tel: "(02)0001234",
    openAt: "10:00",
    closeAt: "21:00",
    address: "台中市清水區經南一路23號8樓",
    locationId: 4,
  },
  {
    id: 4,
    image: Store4Png,
    name: "高雄中正形象店",
    tel: "(07)0002345",
    openAt: "10:00",
    closeAt: "21:00",
    address: "高雄市苓雅區中正路38號12樓",
    locationId: 7,
  },
  {
    id: 5,
    image: Store5Png,
    name: "高雄夢時代店",
    tel: "(07)0001234",
    openAt: "10:00",
    closeAt: "21:00",
    address: "高雄市前鎮區中華一路63號6樓",
    locationId: 7,
  },
];

function getProductsData(category) {
  return new Promise((resolve) => {
    let products = [];
    let mainSentence;

    const initialFakeData = {
      productName: "BJ41600S",
      price: 3490,
    };

    if (category === "optical") {
      for (let i = 0; i < 12; i++) {
        products.push({
          ...initialFakeData,
          id: i,
          image: (i % 6) + 1,
        });
      }

      mainSentence = ["Celluloid Combi", "賽璐珞鈦金屬混合鏡框"];
    } else {
      for (let i = 0; i < 6; i++) {
        products.push({
          ...initialFakeData,
          id: i,
          image: (i % 6) + 1,
        });
      }

      mainSentence = ["2020 NEW COLLECTION", "賽璐珞鈦金屬混合鏡框"];
    }

    resolve({
      mainSentence,
      products,
    });
  });
}

function getStoreData(storeId) {
  return new Promise((resolve) => {
    if (storeId && storeId > 0) {
      resolve(stores.find(({ id }) => id === storeId));
    } else {
      resolve(stores);
    }
  });
}

function getAllStoresLocationId() {
  return new Promise((resolve) => {
    const locationsId = [
      ...new Set(stores.map(({ locationId }) => locationId)),
    ];
    resolve(locationsId);
  });
}

function getAllStoresIdAndName() {
  return new Promise((resolve) => {
    resolve(stores.map(({ id, name }) => ({ id, name })));
  });
}

export {
  getProductsData,
  getStoreData,
  getAllStoresLocationId,
  getAllStoresIdAndName,
};
