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

export { getProductsData };
