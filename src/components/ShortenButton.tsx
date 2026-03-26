function ShortenButton({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-[98px] h-[42px] rounded-lg text-base font-bold text-shade-white
      ${
        disabled
          ? 'bg-gray-500 cursor-not-allowed'
          : 'bg-primary-500 hover:scale-105 active:scale-95'
      }
      `}
    >
      Shorten
    </button>
  )
}
export default ShortenButton
