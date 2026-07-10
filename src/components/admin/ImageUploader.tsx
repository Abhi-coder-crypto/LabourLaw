import { useRef, useState } from 'react';
import { Upload, Loader2, X } from 'lucide-react';
import { uploadFile } from '../../lib/api';

const PP = 'Poppins, sans-serif';

export default function ImageUploader({
  label,
  value,
  onChange,
  accept = 'image/*',
}: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  accept?: string;
}) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const isVideo = accept.includes('video');

  const handleFile = async (file: File | null) => {
    if (!file) return;
    setError('');
    setUploading(true);
    try {
      const { url } = await uploadFile(file);
      onChange(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold mb-2" style={{ fontFamily: PP, color: '#333' }}>
        {label}
      </label>
      <div className="flex items-center gap-3">
        {value ? (
          <div className="relative w-24 h-16 rounded-lg overflow-hidden border border-gray-200 shrink-0 bg-gray-50">
            {isVideo ? (
              <video src={value} className="w-full h-full object-cover" muted />
            ) : (
              <img src={value} className="w-full h-full object-cover" alt="" />
            )}
            <button
              type="button"
              onClick={() => onChange('')}
              className="absolute top-0.5 right-0.5 bg-black/60 rounded-full p-0.5 text-white hover:bg-black/80"
            >
              <X size={11} />
            </button>
          </div>
        ) : (
          <div className="w-24 h-16 rounded-lg border border-dashed border-gray-300 flex items-center justify-center text-gray-300 shrink-0">
            <Upload size={16} />
          </div>
        )}
        <div className="flex-1">
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            className="hidden"
            onChange={(e) => handleFile(e.target.files?.[0] || null)}
          />
          <button
            type="button"
            disabled={uploading}
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-xs font-semibold transition-colors disabled:opacity-60"
            style={{ fontFamily: PP, color: '#a83a00', borderColor: '#a83a00' }}
          >
            {uploading ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
            {uploading ? 'Uploading…' : value ? 'Replace' : 'Upload'}
          </button>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="or paste a URL"
            className="mt-2 w-full px-3 py-1.5 rounded-lg border text-xs outline-none"
            style={{ fontFamily: PP, borderColor: '#e5e7eb' }}
          />
          {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
        </div>
      </div>
    </div>
  );
}
