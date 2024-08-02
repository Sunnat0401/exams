import styles from './species.module.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { baa, discount1, discount2, discount3, misr, turkey, yevro } from '../../../public';
import Link from 'next/link';

const Species: React.FC = () => {
  return  (
    <div className={styles.species}>
    <div className={styles.species_container}>
      <h1 className={styles.species_title}>Turlar</h1>
      <Swiper
  navigation={true}
  modules={[Navigation, Autoplay]}
  className={styles.carusel}
  slidesPerView={4}         // 4 ta slayd ko'rsatish
  spaceBetween={20}         // Slaydlar orasidagi bo'shliq
  loop={true}               // Cheksiz loop
  autoplay={{
    delay: 2000,            // Har 2 sekundda avtomatik o'zgarish
    disableOnInteraction: false,
  }}
>

        <SwiperSlide className={styles.carusel_card}>
        <Link href={'/turkey'}>
          <Image  className={styles.swiper_picture} src={turkey} alt='img'/>
          <h3 className={styles.swiper_heading}> Turkiya</h3>
          <div className={styles.swiper_hr}></div>
          <p className={styles.swiper_text}>Toshkent Istanbul </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.carusel_card}>
          <Link href={'/yevro'} >
          <Image className={styles.swiper_picture} src={yevro} alt='img'/>
          <h3 className={styles.swiper_heading}> Yevropa</h3>
          <div className={styles.swiper_hr}></div>
          <p className={styles.swiper_text}>Toshkent Parij </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.carusel_card}>
          <Link href={'/misr'}>
          <Image  className={styles.swiper_picture} src={misr  } alt='img'/>
          <h3 className={styles.swiper_heading}> Misr</h3>
          <div className={styles.swiper_hr}></div>
          <p className={styles.swiper_text}>Toshkent Qohira </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.carusel_card}>
          <Link href={'/baa'}>
          <Image  className={styles.swiper_picture}  src={baa} alt='img'/>
          <h3 className={styles.swiper_heading}> BAA</h3>
          <div className={styles.swiper_hr}></div>
          <p className={styles.swiper_text}>Toshkent Dubay </p>
          </Link>
        </SwiperSlide>
        <SwiperSlide className={styles.carusel_card}>
          <Link href={'/tailand'}>
          <Image className={styles.swiper_picture} src={yevro} alt='img'/>
          <h3 className={styles.swiper_heading}> Tailand</h3>
          <div className={styles.swiper_hr}></div>
          <p className={styles.swiper_text}>Toshkent Parij </p>
          </Link>
        </SwiperSlide>
       
      </Swiper>
      <div className={styles.discount}>
        <div className={styles.discount_left}>
         <p className={styles.discount_title}>
          <span className={styles.discount_info}>15-Noyabrgacha</span>
             Yevropa uchun tur band qiling 
         </p>
         <p className={styles.discount_paragraph}>
          <span className={styles.discout_information}>10%</span>
          chegirmaga ega bo'ling 
         </p>
        </div>
        <div className={styles.discount_right}>
        <Image className={styles.discount_image} src={discount1} alt='image'/>
        <Image className={styles.discount_images}  src={discount3} alt='image'/>
        <Image className={styles.discount_picture}  src={discount2}  alt='image'/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Species;
