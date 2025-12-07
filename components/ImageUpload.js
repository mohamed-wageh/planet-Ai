import { useState, useRef } from 'react';

export default function ImageUpload({ onImageSelect, onAnalyze, isLoading }) {
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (file) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        onImageSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleClear = () => {
    setPreview(null);
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onImageSelect(null);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="upload-container">
      <div
        className={`upload-box ${isDragging ? 'dragover' : ''}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        {preview ? (
          <div>
            <img 
              src={preview} 
              alt="معاينة الصورة" 
              className="image-preview"
            />
          </div>
        ) : (
          <div>
            <div className="upload-icon">📸</div>
            <p className="upload-text">
              اضغط أو اسحب الصورة هنا للرفع
            </p>
            <p className="upload-text" style={{ fontSize: '0.9rem' }}>
              الصيغ المدعومة: JPG, PNG, WEBP
            </p>
          </div>
        )}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleInputChange}
          className="file-input"
        />
      </div>

      {preview && (
        <div className="upload-actions">
          <button 
            className="btn" 
            onClick={() => onAnalyze(selectedFile)}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span className="loading"></span>
                جاري التحليل...
              </>
            ) : (
              'تحليل الصورة'
            )}
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleClear}
            disabled={isLoading}
          >
            مسح
          </button>
        </div>
      )}
    </div>
  );
}

