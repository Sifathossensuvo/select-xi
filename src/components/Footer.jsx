import footerLogo from "/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="relative mt-60 bg-[#06091A] text-white">

      {/* Newsletter */}

      <div className="max-w-6xl mx-auto px-4">

        <div className="relative -top-28 rounded-3xl border-3 border-[#f7f4f4d5] p-5">

          <div
            className="rounded-3xl py-16 px-6 text-center border-3 bg-white border-gray-300"
            style={{
              backgroundImage: "url('/assets/bg-shadow.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2 className="text-4xl font-bold text-black">
              Subscribe to our Newsletter
            </h2>

            <p className="text-gray-500 mt-4 text-lg">
              Get the latest updates and news right in your inbox!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="input text-black input-bordered w-full sm:w-96"
              />

              <button className="btn border-none bg-gradient-to-r from-pink-300 via-yellow-300 to-orange-300 text-black font-bold px-8">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="max-w-7xl mx-auto px-4 pb-10 -mt-10">

        <div className="flex justify-center">

          <img
            src={footerLogo}
            alt=""
            className="w-28 mb-16"
          />

        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {/* About */}

          <div>

            <h2 className="text-xl font-bold mb-5">
              About Us
            </h2>

            <p className="text-gray-400 leading-8">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>

          </div>

          {/* Links */}

          <div>

            <h2 className="text-xl font-bold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-400">

              <li>• Home</li>
              <li>• Services</li>
              <li>• About</li>
              <li>• Contact</li>

            </ul>

          </div>
                    {/* Subscribe */}

          <div>

            <h2 className="text-xl font-bold mb-5">
              Subscribe
            </h2>

            <p className="text-gray-400 mb-6 leading-7">
              Subscribe to our newsletter for the latest updates.
            </p>

            <div className="flex">

              <input
                type="email"
                placeholder="Enter your email"
                className="input rounded-r-none text-black w-full"
              />

              <button className="btn rounded-l-none border-none bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-400 text-black px-8">
                Subscribe
              </button>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-800">

        <div className="py-8 text-center text-gray-400">

          @2026 Mr' Shuvo All Rights Reserved.

        </div>

      </div>

    </footer>
  );
};

export default Footer;