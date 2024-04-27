const Header = () => {
  return (
    <div className="carousel w-full mt-10 rounded-2xl">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src="/assets/images/s1.jpg" className="w-full opacity-75" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold leading-[60px] text-[#2c1b11] text-5xl w-[70%]">
              Welcome to CraftyFiber.com! Explore the Art of Textile Crafts.
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src="/assets/images/s2.jpg" className="w-full opacity-75" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold leading-[60px] text-[#2c1b11] text-5xl w-[70%]">
              Discover Handcrafted Knits for Every Season. Shop Now!
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src="/assets/images/s3.jpg" className="w-full opacity-75" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold leading-[60px] text-[#2c1b11] text-5xl w-[70%]">
              Wrap Yourself in Comfort and Style with Our Quilted Creations.
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src="/assets/images/s4.jpg" className="w-full opacity-75" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold leading-[60px] text-[#2c1b11] text-5xl w-[70%]">
              Adorn Yourself with Unique Beaded Jewelry. Find Your Statement
              Piece.
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <div className="w-full relative">
          <img src="/assets/images/s5.jpg" className="w-full opacity-75" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h1 className="text-center font-bold leading-[60px] text-[#2c1b11] text-5xl w-[70%]">
              Bring Nature Indoors with Beautiful Macrame Creations. Shop Now!
            </h1>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
