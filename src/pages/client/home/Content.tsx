import banner from "../../../image/banner.jpg";
const Content = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "100px 0",
        }}>
        <div className='' style={{ flex: 1 }}>
          <span style={{ fontSize: "40px" }}>
            Transform Your Home<br></br> with Our Stunning <br></br>{" "}
            <b>Furniture Collection</b>
          </span>
        </div>
        <div className='' style={{ flex: 1 }}>
          <span>
            Transform Your Home with Our Stunning Furniture Collection Welcome
            to our furniture store, where we believe that a well-furnished home
            is a happy home. We offer a wide selection of high-quality furniture
            for every room in your home, from cozy sofas and elegant dining sets
            to stylish office desks and comfortable beds. Shop Now Learn More
          </span>
          <div className=' flex gap-4 mt-[20px]'>
            <button
              style={{
                width: "125px",
                height: "49px",
                color: "white",
                background: "black",
                borderRadius: "10px",
              }}>
              Shop Now
            </button>
            <button
              style={{
                width: "125px",
                height: "49px",
                color: "black",
                border: "1px solid black",
                borderRadius: "10px",
              }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=''>
        <img src={banner} alt='' />
      </div>
    </>
  );
};

export default Content;
