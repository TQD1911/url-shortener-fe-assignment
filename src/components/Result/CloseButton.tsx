function CloseButton({ onClose }: { onClose?: () => void }) {
  return (
    <button
      onClick={onClose}
      className="w-[32px] h-[32px] absolute top-[12px] right-[12px] text-gray-800 bg-gray-100 rounded-full text-base flex items-center justify-center hover:scale-105 active:scale-95"
    >
      <img src="/images/close.svg" className="w-[20px] h-[20px]" />
    </button>
  )
}
export default CloseButton
