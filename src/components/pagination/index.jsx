export default function Pagination() {
  return (
    <div className="pagination">
      <button type="button">上一頁</button>
      <button type="button">1</button>
      <button type="button" className="active">
        2
      </button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">下一頁</button>
    </div>
  );
}
