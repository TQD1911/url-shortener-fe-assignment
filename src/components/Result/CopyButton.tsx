function CopyButton({ shortenedURL }: { shortenedURL: string }) {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(shortenedURL)
        alert('Copied to clipboard!')
      }}
      className="w-[40px] h-[40px] absolute bottom-[42px] right-[40px] bg-primary-500 rounded-lg 
      flex items-center justify-center hover:scale-105 active:scale-95"
    >
      <img src="/images/copy.svg" className="w-[20px] h-[20px]" />
    </button>
  )
}
export default CopyButton
