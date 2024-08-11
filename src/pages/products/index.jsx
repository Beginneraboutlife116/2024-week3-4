import { NavLink, useParams, useLoaderData } from "react-router-dom";

import Pagination from "../../components/pagination";

import { images, convertToLocalePrice } from "./utils";

const { BASE_URL } = import.meta.env;

export default function Products() {
  const { category } = useParams();
  const { mainSentence, products } = useLoaderData();
  const { products: productImages = {} } = images[category] || {};

  if (category !== "optical" && category !== "sunglasses") {
    return (
      <header>
        <nav className="container | products__nav">
          <ul className="d-flex">
            <li className="w-100">
              <NavLink
                to={`${BASE_URL}products/optical`}
                className="clr-neutral-900 font-roboto fw-medium text-align-center">
                OPTICAL
              </NavLink>
            </li>
            <li className="w-100">
              <NavLink
                to={`${BASE_URL}products/sunglasses`}
                className="clr-neutral-900 font-roboto fw-medium text-align-center">
                SUNGLASSES
              </NavLink>
            </li>
            <li className="w-100">
              <NavLink
                to={`${BASE_URL}products/functional`}
                className="clr-neutral-900 font-roboto fw-medium text-align-center">
                FUNCTIONAL
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="text-align-center fz-600 section">{category}</div>
      </header>
    );
  }

  return (
    <main className="products">
      <header>
        <nav className="container | products__nav">
          <ul className="d-flex">
            <li className="w-100">
              <NavLink
                to={`${BASE_URL}products/optical`}
                className="clr-neutral-900 font-roboto fw-medium text-align-center">
                OPTICAL
              </NavLink>
            </li>
            <li className="w-100">
              <NavLink
                to={`${BASE_URL}products/sunglasses`}
                className="clr-neutral-900 font-roboto fw-medium text-align-center">
                SUNGLASSES
              </NavLink>
            </li>
            <li className="w-100">
              <NavLink
                to={`${BASE_URL}products/functional`}
                className="clr-neutral-900 font-roboto fw-medium text-align-center">
                FUNCTIONAL
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="products__gallery">
          <div className={`products__gallery--${category}`}></div>
          <div className={`products__gallery--${category}`}></div>
        </div>
      </header>
      <section className="container section">
        {mainSentence.length > 0 && (
          <div className="text-align-center | products__title">
            <h1 className="font-roboto fw-medium">{mainSentence[0]}</h1>
            <p>{mainSentence[1]}</p>
          </div>
        )}
        <div className="grid-columns" data-category={category}>
          {products.map(({ id, image, price, productName }) => (
            <div key={id}>
              <img src={productImages[image]} alt="" />
              <div className="d-flex justify-content-between font-roboto fz-500">
                <span>{productName}</span>
                <span className="fw-medium clr-primary-400">
                  {"NTD" + convertToLocalePrice(price)}
                </span>
              </div>
              <div>
                <button
                  type="button"
                  className="bg-primary-700 rounded-1 border-none | products__color-button">
                  <span className="invisible">color1</span>
                </button>
                <button
                  type="button"
                  className="bg-primary-600 rounded-1 border-none | products__color-button">
                  <span className="invisible">color2</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </section>
    </main>
  );
}
