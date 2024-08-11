import { NavLink, useFetcher } from "react-router-dom";

import { PaidSvg, TimeSvg, HeartSvg, GlassesSvg } from "assets-images/icons";
import {
  ModelBlackWhitePng1,
  ModelBlackWhitePng2,
  ModelBlackWhitePng3,
  ModelAlliancePng,
  ModelAlliancePngSM,
  ProductAlliancePng,
  ProductAlliancePngSM,
} from "assets-images/products";
import {
  Client1Png,
  Client2Png,
  Client3Png,
  Client4Png,
} from "assets-images/clients";

const { BASE_URL } = import.meta.env;

export default function Home() {
  const fetcher = useFetcher();

  return (
    <main className="home">
      <section className="clr-primary-700 | home__banner">
        <div className="container d-grid align-content-center text-align-right | home__banner-container">
          <h1 className="fw-regular">
            <em>Promise-Desert 2020 早春系列</em>
          </h1>
          <em className="fw-bold">看得清，才能看得遠</em>
          <NavLink
            to={`${BASE_URL}products/optical`}
            className="bg-primary-400 mx-start-auto fz-400 fw-medium">
            立即購買
          </NavLink>
        </div>
      </section>
      <section className="bg-neutral-200 section">
        <div className="container">
          <h2 className="clr-primary-700 text-align-center my-end-6 title">
            用專業的心，做專業的事
          </h2>
          <ul className="grid-columns">
            <li className="d-flex flex-column align-items-center">
              <img src={PaidSvg} alt="" />
              <h3 className="clr-primary-700 fz-500 my-start-4 my-end-2">
                單一價格
              </h3>
              <p>無論任何度數皆不需追加費用即可擁有適合自己的薄型球面鏡片。</p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <img src={TimeSvg} alt="" />
              <h3 className="clr-primary-700 fz-500 my-start-4 my-end-2">
                20 分鐘即可取件
              </h3>
              <p>
                為了您的寶貴時間著想，以豐富專業知識與技術將結帳到交件的時間縮減至最快
                20 分鐘即可完成。
              </p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <img src={HeartSvg} alt="" />
              <h3 className="clr-primary-700 fz-500 my-start-4 my-end-2">
                安心售後服務
              </h3>
              <p>
                我們提供長達 120
                天的保固售後服務，不限會員資格皆享有免費深層保養及專業維修服務。
              </p>
            </li>
            <li className="d-flex flex-column align-items-center">
              <img src={GlassesSvg} alt="" />
              <h3 className="clr-primary-700 fz-500 my-start-4 my-end-2">
                關於鏡片
              </h3>
              <p>使用世界知名頂級品牌，抗UV、防汙鍍膜薄型非球面鏡片。</p>
            </li>
          </ul>
        </div>
      </section>
      <section className="container section | home__products">
        <h3 className="title clr-primary-700 text-align-center">
          經典系列鏡框
        </h3>
        <ul className="d-flex font-roboto">
          <li>
            <NavLink to={`${BASE_URL}products/optical`}>
              <img src={ModelBlackWhitePng1} alt="optical" />
              <h4 className="clr-primary-400 fz-600 bg-neutral-100 py-2 text-align-center font-style-italic">
                OPTICAL
              </h4>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${BASE_URL}products/sunglasses`}>
              <img src={ModelBlackWhitePng2} alt="sunglasses" />
              <h4 className="clr-primary-400 fz-600 bg-neutral-100 py-2 text-align-center font-style-italic">
                SUNGLASSES
              </h4>
            </NavLink>
          </li>
          <li>
            <NavLink to={`${BASE_URL}products/functional`}>
              <img src={ModelBlackWhitePng3} alt="functional" />
              <h4 className="clr-primary-400 fz-600 bg-neutral-100 py-2 text-align-center font-style-italic">
                FUNCTIONAL
              </h4>
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="section | home__products home__products--background">
        <div className="container">
          <h3 className="title clr-neutral-100 text-align-center">
            聯名設計鏡框
          </h3>
          <ul className="d-flex font-roboto">
            <li>
              <NavLink to={`${BASE_URL}products/double-a`}>
                <img
                  srcSet={`${ModelAlliancePngSM} 696w, ${ModelAlliancePng} 1296w`}
                  sizes="(max-width: 600px) 696px, 1296px"
                  src={ModelAlliancePng}
                  alt="double a+"
                />
                <h4 className="clr-primary-400 fz-600 bg-neutral-100 py-2 text-align-center font-style-italic">
                  DOUBLE A+
                </h4>
              </NavLink>
            </li>
            <li>
              <NavLink to={`${BASE_URL}products/youth`}>
                <img
                  srcSet={`${ProductAlliancePngSM} 696w, ${ProductAlliancePng} 1296w`}
                  sizes="(max-width: 600px) 696px, 1296px"
                  src={ProductAlliancePng}
                  alt="youth"
                />
                <h4 className="clr-primary-400 fz-600 bg-neutral-100 py-2 text-align-center font-style-italic">
                  YOUTH
                </h4>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <section className="section | home__recommend">
        <div className="container">
          <h3 className="title clr-primary-700 text-align-center">顧客推薦</h3>
          <section className="grid-columns">
            <div className="rounded-1 shadow card d-flex flex-column">
              <img src={Client1Png} alt="jessy" />
              <div className="p-4 flex-grow d-flex flex-column">
                <p className="fw-medium my-end-2">Jessy</p>
                <p>眼鏡品質優良，下次還會想來這邊購買！</p>
                <span className="clr-neutral-600 fz-300 my-start-auto">
                  2021/06/20
                </span>
              </div>
            </div>
            <div className="rounded-1 shadow card d-flex flex-column">
              <img src={Client2Png} alt="凱倫" />
              <div className="p-4 flex-grow d-flex flex-column">
                <p className="fw-medium my-end-2">凱倫</p>
                <p>做工細緻、鏡架很輕盈，待久也不會覺得有負擔，推薦給大家！</p>
                <span className="clr-neutral-600 fz-300 my-start-auto">
                  2021/04/18
                </span>
              </div>
            </div>
            <div className="rounded-1 shadow card d-flex flex-column">
              <img src={Client3Png} alt="悠悠" />
              <div className="p-4 flex-grow d-flex flex-column">
                <p className="fw-medium my-end-2">悠悠</p>
                <p>
                  謝謝客服人員的詳細回答，成功買到了喜歡的眼鏡，下次會再回購！
                </p>
                <span className="clr-neutral-600 fz-300 my-start-auto">
                  2020/12/25
                </span>
              </div>
            </div>
            <div className="rounded-1 shadow card d-flex flex-column">
              <img src={Client4Png} alt="Kyuan" />
              <div className="p-4 flex-grow d-flex flex-column">
                <p className="fw-medium my-end-2">Kyuan</p>
                <p>服務很好，品質沒有任何問題，非常喜歡。</p>
                <span className="clr-neutral-600 fz-300 my-start-auto">
                  2020/10/31
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="bg-neutral-200 section">
        <div className="container">
          <div className="home__form-container">
            <h3 className="title clr-primary-700 text-align-center">
              聯絡我們
            </h3>
            <p className="my-end-6">
              我們相當重視您的意見，若您有任何疑問，可先參考「常見問題」，若仍有任何問題，請填妥以下資料，我們會在近期與您聯繫。
            </p>
            <fetcher.Form>
              <div className="d-flex flex-column my-end-4">
                <label htmlFor="name" className="my-end-2">
                  姓名
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="陳小明"
                  required
                />
              </div>
              <div className="d-flex flex-column my-end-4">
                <label htmlFor="phone" className="my-end-2">
                  聯絡電話
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="0912-345-678"
                  required
                />
              </div>
              <div className="d-flex flex-column my-end-4">
                <label htmlFor="email" className="my-end-2">
                  電子郵件
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  required
                />
              </div>
              <div className="d-flex flex-column my-end-4">
                <label htmlFor="opinion" className="my-end-2">
                  意見反應
                </label>
                <textarea
                  name="message"
                  id="opinion"
                  placeholder="請輸入您的意見"
                />
              </div>
              <div>
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  className="d-none"
                />
                <label htmlFor="agreement">
                  我同意隱私權政策，並同意依隱私權政策中所述的方式處理自己的資料。
                </label>
              </div>
              <button className="bg-primary-400 clr-neutral-100 mx-auto d-block w-100 button">
                確認送出
              </button>
            </fetcher.Form>
          </div>
        </div>
      </section>
    </main>
  );
}
