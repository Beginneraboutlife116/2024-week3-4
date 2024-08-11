import { getStoreData, getAllStoresIdAndName } from "../../../../fake-data";

export async function loader({ params }) {
  const { storeId } = params;
  const store = await getStoreData(parseInt(storeId, 10));
  const idAndNames = await getAllStoresIdAndName();
  return { store, idAndNames };
}
