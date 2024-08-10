import { getLocationsData } from "../../../fake-data";

export const LocationEnums = {
  0: "全部",
  2: "台北市",
  4: "台中市",
  7: "高雄市",
};

export async function loader({ params }) {
  const { location } = params;
  const locations = await getLocationsData(location);
  return locations;
}
