import { getStoreData, getAllStoresLocationId } from "../../../fake-data";

export const OptionEnums = {
  0: "全部",
  2: "台北市",
  4: "台中市",
  7: "高雄市",
};

export async function loader() {
  const stores = await getStoreData();
  const storeLocationsId = await getAllStoresLocationId();
  return { stores, storeLocationsId };
}
