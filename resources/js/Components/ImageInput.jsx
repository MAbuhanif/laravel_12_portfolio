import { useState, useRef } from 'react';

export default function ImageInput({ label, name, error, onChange, className = '' }) {
    const [preview, setPreview] = useState(null);
    const fileInput = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setPreview(URL.createObjectURL(file));
            onChange(file);
        }
    };

    const triggerClick = () => {
        fileInput.current.click();
    };

    const clearImage = (e) => {
        e.stopPropagation();
        setPreview(null);
        onChange(null);
        if (fileInput.current) {
            fileInput.current.value = '';
        }
    };

    return (
        <div className={className}>
            <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
            <div 
                onClick={triggerClick}
                className={`relative border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors ${
                    error ? 'border-red-500 hover:border-red-400' : 'border-dark-border hover:border-primary-500'
                } ${preview ? 'bg-dark-bg' : 'bg-dark-surface'}`}
            >
                <input
                    type="file"
                    name={name}
                    ref={fileInput}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                />

                {preview ? (
                    <div className="relative">
                        <img 
                            src={preview} 
                            alt="Preview" 
                            className="max-h-48 mx-auto rounded-lg object-contain" 
                        />
                        <button
                            type="button"
                            onClick={clearImage}
                            className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <div className="space-y-2 py-4">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="text-sm text-gray-400">
                            <span className="font-medium text-primary-500 hover:text-primary-400">Upload a file</span>
                            <span className="pl-1">or drag and drop</span>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                    </div>
                )}
            </div>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}
