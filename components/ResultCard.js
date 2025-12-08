import { useState } from "react";

export default function ResultCard({ result, imagePreview }) {
  const [showJson, setShowJson] = useState(false);

  if (!result) return null;

  // Handle confidence as number (0-1) or string percentage
  const confidenceValue =
    typeof result.confidence === "string"
      ? Number.parseFloat(result.confidence.replace("%", ""))
      : result.confidence * 100;
  const confidencePercent = confidenceValue.toFixed(2);

  // Format label for display (remove underscores and format)
  const formatLabel = (label) => {
    return label
      .replace(/_/g, " ")
      .replace(/___/g, " — ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div className="result-card">
      <div className="result-header">
        {imagePreview && (
          <img
            src={imagePreview}
            alt="الصورة المحللة"
            className="result-thumbnail"
          />
        )}
        <div className="result-info">
          <h3 className="result-label">
            {formatLabel(result.label || result.predicted_label || "Unknown")}
          </h3>
          <div className="result-confidence">
            مستوى الثقة: {confidencePercent}%
          </div>
          <div className="confidence-bar">
            <div
              className="confidence-fill"
              style={{ width: `${confidencePercent}%` }}></div>
          </div>
        </div>
      </div>

      {result.recommendation && (
        <div className="result-recommendation">
          <div className="recommendation-title">التوصية:</div>
          <p style={{ whiteSpace: "pre-line" }}>{result.recommendation}</p>
        </div>
      )}

      
    </div>
  );
}
