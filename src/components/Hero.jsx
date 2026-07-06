import { toast } from "react-toastify";

const Hero = ({ handleClaimCoin }) => {
  const handleClick = () => {
    handleClaimCoin();
    toast.success("600000 coins added successfully");
  };

  return (
    <section className="max-w-[1320px] mx-auto mt-8 px-4">
      <div
        className="hero rounded-3xl overflow-hidden bg-[#131313]"
        style={{
          backgroundImage: "url('/assets/bg-shadow.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
        }}
      >
        <div className="hero-content text-center text-white py-16">

          <div>

            <img
              src="/assets/banner-main.png"
              alt="Banner"
              className="w-60 md:w-72 mx-auto mb-8"
            />

            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>

            <p className="py-6 text-xl md:text-2xl text-gray-300 font-medium">
              Beyond Boundaries Beyond Limits
            </p>

            <div className="inline-block border-2 border-[#E7FE29] rounded-2xl p-2">

              <button
                onClick={handleClick}
                className="btn bg-[#E7FE29] hover:bg-[#d7ee22] border-none text-black font-bold rounded-xl px-8"
              >
                Claim Free Credit
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;