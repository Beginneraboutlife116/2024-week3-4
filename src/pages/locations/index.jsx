import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";

import { LocationEnums } from "./utils";

import { CallDarkSvg, TimeDarkSvg, LocationSvg } from "assets-images/icons";

export default function Locations() {
  const allLocations = useLoaderData();
  const optionsValues = [
    0,
    ...new Set(allLocations.map(({ locationId }) => locationId)),
  ];
  const [locations, setLocations] = useState(allLocations);

  const _handleOnChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (value === 0) {
      setLocations(allLocations);
    } else {
      setLocations(
        allLocations.filter(({ locationId }) => locationId === value)
      );
    }
  };

  return (
    <main className="container section | locations">
      <h2 className="title px-start-4">門市據點</h2>
      <div className="locations__selector">
        <label htmlFor="location">選擇地區</label>
        <span className="locations__selector-wrapper">
          <select name="location" id="location" onChange={_handleOnChange}>
            {optionsValues.map((value) => (
              <option key={value} value={value} selected={value === 0}>
                {LocationEnums[value]}
              </option>
            ))}
          </select>
        </span>
      </div>
      <ul className="locations__stores">
        {locations.map(
          ({ id, image, name, tel, openAt, closeAt, address, locationId }) => (
            <li key={id}>
              <div className="d-flex flex-column | card">
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
                  to={`./${locationId}`}
                  className="bg-neutral-900 text-align-center | button">
                  詳細資訊
                </NavLink>
              </div>
            </li>
          )
        )}
      </ul>
    </main>
  );
}
