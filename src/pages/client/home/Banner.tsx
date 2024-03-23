import den from "../../../image/unsplash_pxoZSTdAzeU.png";
const Banner = () => {
  return (
    <div
      style={{
        marginTop: "100px",
        height: "424px",
        background: "black",
        width: "100%",
        position: "relative",
      }}>
      <img
        src={den}
        style={{ position: "absolute", right: 230, top: 0 }}
        alt=''
      />
      <div
        className='container mx-auto flex flex-column gap-10 justify-content-center h-100'
        style={{ color: "white" }}>
        <span>Tagline</span>
        <h1>Sale Up to 50%</h1>
        <button
          style={{
            width: "125px",
            height: "49px",
            color: "white",
            background: "black",
            borderRadius: "10px",
            border: "1px solid white",
          }}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
