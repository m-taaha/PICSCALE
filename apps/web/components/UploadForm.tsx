"use client"

import { useRef, useState } from "react"

export const UploadForm = () => {
    const [selectFile, setSelectFile] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const [targetSize, setTargetSize] = useState("thumbnail");
    const fileInputRef = useRef<HTMLInputElement>(null);


    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTargetSize(e.target.value)
    }

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(file) {
            setSelectFile(file);

            const url = URL.createObjectURL(file);
            setPreview(url);
        }
    }


  return (
    <main className="bg-[#FFFDF0] text-zinc-800 max-w-md border-zinc-200 rounded-xl p-6 shadow-sm">
      <section className="flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Target Resolution
          </label>
          <select
            value={targetSize}
            onChange={handleChange}
            className="bg-transparent border border-zinc-200 rounded-md p-2 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 cursor-pointer"
          >
            <option value="Thumbnail">Thumbnail (200px)</option>
            <option value="Mobile">Mobile (800px)</option>
            <option value="Desktop">Desktop (1200px)</option>
          </select>
        </div>

        <button
          onClick={handleButtonClick}
          className="w-full py-2 bg-zinc-900 text-[#FFFDF0] rounded-md text-sm font-medium hover:bg-zinc-800 transition-all"
        >
          Select Image
        </button>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <div>
          {preview && 
            <img
              src={preview}
              alt="image"
              className="mt-4 rounded-lg w-full border border-zinc-200 shadow-inner"
            />
          }
        </div>
      </section>
    </main>
  );
}
