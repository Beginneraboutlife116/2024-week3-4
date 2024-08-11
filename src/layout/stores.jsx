import { Outlet } from "react-router-dom";

export default function StoresLayout() {
  return (
    <main className="container section">
      <h2 className="title title--decorate px-start-4">門市據點</h2>
      <Outlet />
    </main>
  );
}
