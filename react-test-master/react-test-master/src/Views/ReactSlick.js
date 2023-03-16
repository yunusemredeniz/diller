import Slider from "react-slick";

function ReactSlick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main style={{ marginLeft: "300px" }}>
      <h2>Dümenden Slider</h2>
      <Slider {...settings} style={{ maxWidth: "500px" }}>
        <div className="slick-slide">
          <h3>1</h3>
        </div>
        <div className="slick-slide">
          <h3>2</h3>
        </div>
        <div className="slick-slide">
          <h3>3</h3>
        </div>
        <div className="slick-slide">
          <h3>4</h3>
        </div>
      </Slider>
    </main>
  );
}

export default ReactSlick;
