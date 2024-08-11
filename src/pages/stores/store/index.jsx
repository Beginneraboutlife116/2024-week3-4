import { useLoaderData, useParams, useNavigate } from "react-router-dom";

import Selector from "../../../components/selector";

import {
  CallDarkSvg,
  TimeDarkSvg,
  LocationSvg,
} from "../../../assets/images/icons";

const { BASE_URL } = import.meta.env;

export default function Store() {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const { store, idAndNames } = useLoaderData();
  const { image, name, tel, openAt, closeAt, address } = store;
  const options = idAndNames.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  const _handleOnChange = (e) => {
    const { value } = e.target;

    if (storeId !== value) {
      navigate(`${BASE_URL}stores/${value}`);
    }
  };

  return (
    <div>
      <Selector
        name="store-name"
        options={options}
        labelName="選擇分店"
        defaultValue={storeId}
        onChange={_handleOnChange}
      />
      <div className="store">
        <div className="d-flex flex-column | card card--store">
          <img src={image} alt="" />
          <div>
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
          </div>
        </div>
        <iframe
          className="border-none | store__map"
          title="Google Maps"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${
            import.meta.env.VITE_GOOGLE_MAPS_API_KEY
          }&q=${address}`}
        />
      </div>
    </div>
  );
}
