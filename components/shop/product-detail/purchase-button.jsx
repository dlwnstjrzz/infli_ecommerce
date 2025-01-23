export function PurchaseButton({ price }) {
  return (
    <div className="px-4 py-3 border-t bg-white/80 backdrop-blur-lg">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-0.5">총 상품 금액</p>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-medium text-gray-900">¥</span>
            <p className="text-xl font-bold text-gray-900">{price}</p>
          </div>
        </div>
        <button className="flex-1 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 py-4 text-white font-medium shadow-lg shadow-blue-200 hover:from-blue-600 hover:to-blue-700 transition-all active:scale-[0.98]">
          구매하기
        </button>
      </div>
    </div>
  );
}
