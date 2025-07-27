import React, { useState } from "react";
// import Swiper from "swiper";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Trailer = ({ media }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   console.log(media);
  if (!media?.length) return null;
  //   const videoId = media[0].url.split("v=")[1]?.split("&")[0] || media[0].url.split("/embed/")[1];
  // console.log('hello media', media)
  return (
    <div className="w-full aspect-video">
      <div>
        <Swiper
        autoplay={{delay: 5000}}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="w-full mb-4 rounded-lg overflow-hidden"
      >
        {media.filter((img) => img?.thumbnail_url).map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img.thumbnail_url} alt={img.thumbnail_url} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Thumbnails */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full"
      >
        {media.filter((img) => img?.thumbnail_url).map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.thumbnail_url}
              alt={`Thumbnail ${i + 1}`}
              className="cursor-pointer border border-gray-300 rounded hover:border-blue-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Trailer;
