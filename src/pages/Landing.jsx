import "swiper/css";
import "swiper/css/pagination";
import "./Landing.scss";
import { ReactComponent as LinkedIn } from "../assets/linkedin.svg";
import { ReactComponent as X } from "../assets/x.svg";
import { ReactComponent as Insta } from "../assets/insta.svg";
import { ReactComponent as Facebook } from "../assets/fb.svg";
import { ReactComponent as YT } from "../assets/yt.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

export default function Landing() {
  return (
    <section className="landing">
      <Mail />
      <Slider />
    </section>
  );
}

function Mail() {
  return (
    <section className="mail">
      <aside className="nav">
        <div className="logo">Ventarca</div>

        <button className="btn">Email Us</button>
      </aside>

      <aside className="content">
        <div className="text">
          <p>— Coming Soon</p>
          <h2>
            Get Notified <br /> When we Launch
          </h2>
          <p>And get 3 months free access...</p>
        </div>

        <form className="form">
          <input
            className="email"
            type="email"
            placeholder="Enter your email address"
          />
          <button className="btn">Notify Me</button>
        </form>

        <p>*Don’t worry, we will not spam you.</p>
      </aside>

      <aside className="footer">
        <div className="socials">
          <LinkedIn />
          <X />
          <Insta />
          <Facebook />
          <YT />
        </div>

        <p>© Copyright 2025.</p>
      </aside>

      <div className="ellipse"></div>
    </section>
  );
}

function Slider() {
  return (
    <section className="slider">
      <Swiper
        pagination={{
          clickable: true,
        }}
        // centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        // spaceBetween={48}
        breakpoints={{
          320: {
            spaceBetween: "24px",
          },
          990: {
            spaceBetween: "48px",
          },
        }}
        className="mySwiper slider__wrapper"
      >
        <SwiperSlide className="slide__item">
          <h3>Connect. Negotiate. Close.</h3>
          <p>
            Whether you’re buying or selling, Ventarca gives you the tools to
            manage the full journey. From saved searches and alerts to
            in-platform messaging and due diligence reports, you stay in control
            at every step.
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide__item">
          <h3>Every Business, Crystal Clear.</h3>
          <p>
            Browse high-quality, vetted listings with key details like
            valuation, revenue, and growth potential. Our smart filters and
            search tools make it easy to find the perfect match for your goals.
          </p>
        </SwiperSlide>

        <SwiperSlide className="slide__item">
          <h3>Deals Built on Trust.</h3>
          <p>
            With verified accounts, clear pricing plans, and optional brokerage
            support, you never have to guess what’s behind the curtain. Ventarca
            is designed to make every transaction fair, simple, and transparent.
          </p>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
