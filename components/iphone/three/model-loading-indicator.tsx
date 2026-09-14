type ModelLoadingIndicatorProps = {
  isLoading: boolean;
  productName: string;
};

export function ModelLoadingIndicator({
  isLoading,
  productName,
}: ModelLoadingIndicatorProps) {
  if (!isLoading) return null;

  return (
    <div
      className="model-loading"
      role="status"
      aria-label={`Đang tải mô hình 3D ${productName}`}
    >
      <span className="model-loading__rings" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}
