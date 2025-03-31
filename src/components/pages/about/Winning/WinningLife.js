import winning from "../../../../assets/winning.png";

const WinningLife = () => {
  return (
    <div
      className="w-full bg-cover p-8 bg-center flex items-center justify-center mb-14"
      style={{
        backgroundImage: `url(${winning})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex items-center justify-between h-full px-8 max-w-6xl mx-auto">
        {/* Text content */}
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Winning is our way of life
          </h2>
          <p className="  mb-6 max-w-xl mx-auto">
            Over the last 3 decades, Artech has consistently outperformed
            expectations, winning accolades and recognitions from peers,
            industry and media.
          </p>
          <button className="bg-blue-800 hover:bg-white hover:text-blue-800 hover:border hover:border-blue-800 text-white font-medium py-2 px-8 rounded-full transition-all duration-300 ease-in-out">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WinningLife;
