interface BannerProps {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Banner = ({ message, type }: BannerProps) => {
  return (
    <div
      className={`${type === 'success'
          ? 'bg-green-100 border-green-500 text-green-700'
          : type === 'error'
            ? 'bg-red-100 border-red-500 text-red-700'
            : 'bg-blue-100 border-blue-500 text-blue-700'
        } border px-4 py-3 rounded relative`}
      role="alert"
    >
      <strong className="font-bold">{type === 'success' ? 'Success!' : type === 'error' ? 'Error!' : 'Info!'}</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Banner;
