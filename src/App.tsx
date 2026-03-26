import { useState } from 'react'

import UserProfile from './components/UserProfile.tsx'

function App() {
  return (
    <main className="w-screen min-h-screen relative flex items-center flex-col">
      <div className="w-screen h-[108px] px-[40px] bg-white flex justify-between items-center">
        <img src="/images/devcamp_logo.svg" className="w-[96px] h-[74px]" />
        <UserProfile />
      </div>

      <div className="w-[832px] h-[301px] bg-white rounded-lg flex flex-col items-center gap-[10px]">
        <div className="w-[832px] h-[65px] justify-center items-center flex">
          <h1 className="text-6xl font-bold text-primary-500">Devcamp URL Shortener</h1>
        </div>

        <div className="w-[832px] h-[65px] justify-center items-center flex">
          <h2 className="text-[28px] text-primary-500">
            Simplify, Organize, and Share: URL Management Made Easy
          </h2>
        </div>

        <div className="w-[832px] h-[151px] justify-center items-center flex">
          <InputBox />
        </div>
      </div>
    </main>
  )
}

function InputBox() {
  const [url, setUrl] = useState('')
  const [showResult, setShowResult] = useState(false)
  return (
    // shadow-[x_y_blur_spread_color]; rgba(11,40,120,0.3) = 0B2878 30% opacity
    <div className="w-[800px] h-[119px] px-[28px] py-[20px] shadow-[0_4px_47px_rgba(11,40,120,0.3)] rounded-lg flex flex-col gap-[8px]">
      <h2 className="text-xl font-semibold text-primary-500">Your long URL</h2>
      <div className="w-[744px] h-[42px] flex gap-[38px]">
        <URLInput value={url} onChange={setUrl} />
        <ShortenButton onClick={() => setShowResult(true)} disabled={!url} />
      </div>
      {showResult && <Result onClose={() => setShowResult(false)} />}
    </div>
  )
}

function URLInput({ value, onChange }: { value: string; onChange: (url: string) => void }) {
  return (
    <div className="w-[608px] h-[42px] flex border border-gray-300 rounded-lg relative">
      <img
        src="/images/icon.svg"
        className="w-[20px] h-[20px] absolute top-1/2 -translate-y-1/2 left-[8px]"
      />
      <div className="w-0 h-[26px] absolute top-1/2 -translate-y-1/2 left-[36px] border border-gray-300"></div>

      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Input the URL you want to shorten"
        className="w-[608px] h-[42px] px-[48px] absolute top-0 left-0 placeholder:text-primary-300 text-primary-500 text-xs font-semibold placeholder:font-normal focus:outline-primary-500 rounded-lg"
      ></input>
    </div>
  )
}

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

function Result({ onClose }: { onClose?: () => void }) {
  const shortenedURL = 'https://furl.one/myshortenlink'
  return (
    <div className="fixed inset-0 bg-black/30 flex flex-col items-center justify-center">
      <div
        className="w-[400px] h-[469px] relative bg-shade-white rounded-lg
        overflow-hidden flex gap-[38px]"
      >
        <CloseButton onClose={onClose} />
        <BGResult />
        <QRCode />
        <h1 className="text-center text-[24px] font-bold text-primary-500 absolute top-[292px] left-[115px]">
          Link shortened!
        </h1>
        <h2
          className="w-[260px] h-[42px] text-center text-[14px] text-primary-500 
        absolute top-[331px] left-[70px]"
        >
          Access the “My URL” page to view statistics on your shortened links
        </h2>

        <div className="w-[276px] h-[40px] absolute top-[389px] left-[38px] rounded-lg border border-primary-500 px-[12px] py-[8px] text-[16px] text-primary-500 font-medium">
          {shortenedURL}
        </div>
        <CopyButton shortenedURL={shortenedURL} />
      </div>
    </div>
  )
}

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

function BGResult() {
  return (
    <div className="w-[400px] h-[196px] bg-primary-500">
      <img
        src="/images/QR_pattern.svg"
        className="w-[80px] h-[80px] absolute top-[32px] right-[332px]"
      />
      <img
        src="/images/QR_pattern2.svg"
        className="w-[80px] h-[80px] absolute top-[64px] left-[332px]"
      />
    </div>
  )
}

function QRCode() {
  return (
    <div
      className="w-[220px] h-[220px] bg-shade-white flex items-center justify-center
    shadow-[0_4px_12px_rgba(11,40,120,0.16)] absolute left-1/2 top-[40px] -translate-x-1/2 rounded-lg"
    >
      <img src="/images/QR_code.svg" className="w-[200px] h-[200px] rounded-lg" />
      <DownloadButton />
    </div>
  )
}
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

export default App
