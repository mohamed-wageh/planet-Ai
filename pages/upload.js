import { useState } from 'react';
import Head from 'next/head';
import ImageUpload from '../components/ImageUpload';
import ResultCard from '../components/ResultCard';

export default function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageSelect = (file) => {
    setSelectedImage(file);
    setResult(null);
    setError(null);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleAnalyze = async (file) => {
    if (!file) {
      setError('يرجى اختيار صورة أولاً');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.error || 
          `خطأ في الخادم: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(
        err.message || 
        'حدث خطأ أثناء تحليل الصورة. يرجى المحاولة مرة أخرى.'
      );
      console.error('Error analyzing image:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>رفع وتحليل الصورة — PlantAI</title>
        <meta name="description" content="رفع صورة ورقة النبات وتحليلها لاكتشاف الأمراض" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <div className="card">
          <h1 className="card-title">رفع وتحليل الصورة</h1>
          <p className="card-subtitle">
            اختر صورة لورقة النبات وسنقوم بتحليلها لاكتشاف أي أمراض محتملة
          </p>

          {error && (
            <div className="error-message">
              <strong>خطأ:</strong> {error}
            </div>
          )}

          <ImageUpload
            onImageSelect={handleImageSelect}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
          />

          {isLoading && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <div className="loading"></div>
              <p className="loading-text">جاري تحليل الصورة...</p>
            </div>
          )}

          {result && (
            <ResultCard result={result} imagePreview={imagePreview} />
          )}

          {!result && !isLoading && !error && (
            <div className="card" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                💡 نصيحة: للحصول على أفضل النتائج، استخدم صور واضحة وذات إضاءة جيدة 
                لورقة النبات. تأكد من أن الورقة تملأ معظم الصورة.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

