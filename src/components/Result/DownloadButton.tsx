function DownloadButton() {
  return (
    <button
      onClick={() => alert('Downloaded!')}
      className="w-[40px] h-[40px] absolute top-[200px] left-[200px] bg-primary-500 rounded-full 
      flex items-center justify-center hover:scale-105 active:scale-95"
    >
      <img src="/images/download_icon.svg" className="w-[28px] h-[28px]" />
    </button>
  )
}
export default DownloadButton
