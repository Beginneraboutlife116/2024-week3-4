import {
  Optical1Png,
  Optical2Png,
  Optical3Png,
  Optical4Png,
  Optical5Png,
  Optical6Png,
  Sunglasses1Png,
  Sunglasses2Png,
  Sunglasses3Png,
  Sunglasses4Png,
  Sunglasses5Png,
  Sunglasses6Png,
} from "assets-images/products";
import { getProductsData } from "../../../fake-data";

export async function loader({ params }) {
  const { category } = params;
  const products = await getProductsData(category);
  return products;
}

export const images = {
  optical: {
    products: {
      1: Optical1Png,
      2: Optical2Png,
      3: Optical3Png,
      4: Optical4Png,
      5: Optical5Png,
      6: Optical6Png,
    },
  },
  sunglasses: {
    products: {
      1: Sunglasses1Png,
      2: Sunglasses2Png,
      3: Sunglasses3Png,
      4: Sunglasses4Png,
      5: Sunglasses5Png,
      6: Sunglasses6Png,
    },
  },
};

export function convertToLocalePrice(price) {
  return new Intl.NumberFormat("zh-TW", {
    minimumFractionDigits: 0,
  }).format(price);
}
