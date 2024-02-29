import { useEffect, useRef } from "react";

import Glide from "@glidejs/glide";

import Footer from "components/footer";

import Breadcrumb, { BreadcrumbItem } from "components/breadcrumb";

import { carouselData } from "mock_data";

const ExtrasCarousel = () => {
  const carouselRef = useRef();

  useEffect(() => {
    const dir = () => {
      if (document.dir === "rtl") {
        return "rtl";
      } else {
        return "ltr";
      }
    };

    const sliderConfiguration = {
      direction: dir(),
      type: "carousel",
      perView: 4,
      gap: 20,
      breakpoints: {
        640: {
          perView: 1,
        },
        768: {
          perView: 2,
        },
      },
    };

    const slider = new Glide(carouselRef.current, sliderConfiguration);

    slider.mount();

    return () => slider.destroy();
  }, []);

  return (
    <main className="workspace overflow-hidden main">
      <Breadcrumb title="Carousel" className="Breadcrumb">
        <BreadcrumbItem link="#no-link">UI</BreadcrumbItem>
        <BreadcrumbItem link="#no-link">Extras</BreadcrumbItem>
        <BreadcrumbItem>Carousel</BreadcrumbItem>
      </Breadcrumb>

      <div className="card p-5">
        <h3>Style 1</h3>
        <div ref={carouselRef} id="carousel-style-1" className="glide mt-5">
          <div className="glide__track" data-glide-el="track">
            <div className="glide__slides">
              {carouselData.map((data,index) => {
                const { title, value } = data;
                return (
                  <div className="glide__slide carouselItem" key={index}>
                    <div className="border border-divider rounded-lg px-4 py-8 text-center">
                      <span className="text-primary text-5xl leading-none la la-sun"></span>
                      <p className="mt-2">{title}</p>
                      <div className="text-primary mt-5 text-3xl leading-none">
                        <p>{value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0"></button>
            <button className="glide__bullet" data-glide-dir="=1"></button>
            <button className="glide__bullet" data-glide-dir="=2"></button>
          </div>
          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <span className="la la-arrow-left"></span>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <span className="la la-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default ExtrasCarousel;