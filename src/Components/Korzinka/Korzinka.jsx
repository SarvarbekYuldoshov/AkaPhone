import { useState } from 'react';
import "./Korzinka.css";
import Cars from '../Card/Card';
import useSharedStore from '../Store/Store';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

const Korzinka = () => {
  const { cars, setCars } = useSharedStore();
  const [add, setAdd] = useState({});

  const addCard = (item) => {
    setCars([...cars, item]);
    setAdd((prev) => ({ ...prev, [item.name]: true }));
  }
  return (
    <div className='korzinka'>
      <h1>Card</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation]}
        className="mySwiper-card"
      >
        {Cars && Cars.map((item, index) => (
          <SwiperSlide className='card-item' key={index} >
            <div className='card1'>
              <h1>{item.name}</h1>
              <h2>{item.price}</h2>
              <h3>{item.img}</h3>
              <h4>{item.img}</h4>
              <h4>{item.title}</h4>
              <h4>{item.text}</h4>
              <h4>{item.button}</h4>
              <button disabled={add[item.name]} onClick={() => addCard(item)}>
                {add[item.name] ? "Qushilgan" : "Qushish"}
              </button>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

    </div>
  );
};

export default Korzinka;
