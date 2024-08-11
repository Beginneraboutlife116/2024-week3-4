import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

import Selector from "../../components/selector";
import Store from "./store";

import { OptionEnums } from "./utils";

import { CallDarkSvg, TimeDarkSvg, LocationSvg } from "assets-images/icons";

export default function Stores() {
  const { stores: allStores, storeLocationsId } = useLoaderData();
  const options = [0, ...storeLocationsId].map((value) => ({
    label: OptionEnums[value],
    value,
  }));
  const [stores, setStores] = useState(allStores);

  const _handleOnChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (value === 0) {
      setStores(allStores);
    } else {
      setStores(allStores.filter(({ locationId }) => locationId === value));
    }
  };

  return (
    <div>
      <Selector
        name="stores"
        options={options}
        labelName="選擇地區"
        defaultValue={0}
        onChange={_handleOnChange}
      />
      <ul className="stores">
        {stores.map(({ id, image, name, tel, openAt, closeAt, address }) => (
          <li key={id}>
            <div className="d-flex flex-column | card card--store">
              <img src={image} alt="" />
              <h3 className="py-2 px-6 fz-500 fw-regular">{name}</h3>
              <div className="py-4 px-6 fz-400 flex-grow justify-content-start | card__content">
                <p className="d-flex align-items-start">
                  <img src={CallDarkSvg} alt="" className="card__icon" />
                  <span>電話：{tel}</span>
                </p>
                <p className="d-flex align-items-start my-start-2">
                  <img src={TimeDarkSvg} alt="" className="card__icon" />
                  <span>
                    營業時間：<span>{openAt}</span>-<span>{closeAt}</span>
                  </span>
                </p>
                <p className="d-flex align-items-start my-start-2">
                  <img src={LocationSvg} alt="" className="card__icon" />
                  <span>地址：{address}</span>
                </p>
              </div>
              <NavLink
                to={`./${id}`}
                className="bg-neutral-900 text-align-center | button">
                詳細資訊
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Store };
