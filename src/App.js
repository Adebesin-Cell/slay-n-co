import './scss/styles.scss';
import { gsap } from 'gsap';
import { ReactComponent as SearchIcon } from './assets/svgs/icon-search.svg';
import { ReactComponent as PlayIcon } from './assets/svgs/icon-play.svg';
import { ReactComponent as PauseIcon } from './assets/svgs/icon-pause.svg';
import { ReactComponent as ExploreIcon } from './assets/svgs/icon-explore.svg';
import TwitterIcon from './assets/images/twitter.png';
import InstagramIcon from './assets/images/instagram.png';
import RedditIcon from './assets/images/reddit.png';
import PinterestIcon from './assets/images/pinterest.png';
import avatar from './assets/images/avatar.png';
import avatarOne from './assets/images/avatar--1.png';
import avatarTwo from './assets/images/avatar--2.png';
import image from './assets/images/release.png';
import imageOne from './assets/images/release--1.png';
import imageTwo from './assets/images/release--2.png';
import blog from './assets/images/blog.png';
import blogOne from './assets/images/blog--1.png';
import blogTwo from './assets/images/blog--2.png';
import blogThree from './assets/images/blog--3.jpg';
import partner from './assets/images/partner.png';
import partnerOne from './assets/images/partner--1.png';
import partnerTwo from './assets/images/partner--2.png';
import star from './assets/images/star.png';
import video from './assets/video/video.mp4';
import { useState, useRef, useEffect } from 'react';
import * as Tab from '@radix-ui/react-tabs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Mousewheel } from 'swiper';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const headingRef = useRef(null);

  const playVideo = function () {
    videoRef.current.play();
  };

  const playVideoOnHover = function () {
    setIsPlaying(true);
    videoRef.current.play();
  };

  const pauseVideoOnHover = function () {
    setIsPlaying(false);
    videoRef.current.pause();
  };

  const pauseVideo = function () {
    videoRef.current.pause();
  };

  const toggleVideoPlayHandler = function () {
    setIsPlaying(!isPlaying);
    isPlaying ? pauseVideo() : playVideo();
  };

  useEffect(() => {
    // gsap.from(headingRef.current, {
    //   duration: 1,
    //   autoAlpha: 1,
    //   ease: 'none',
    //   delay: 1,
    //   opacity: 0,
    //   visibility: 'hidden',
    // });

    gsap.from(headingRef.current, {
      duration: 1,
      autoAlpha: 1,
      ease: 'none',
      delay: 1,
    });
  }, [headingRef, videoRef]);

  return (
    <div className='wrapper'>
      <header className='header container'>
        <div className='header__menu'>
          <span className='header__menu--line'></span>
          <span className='header__menu--line header__menu--line--2'></span>
          <span className='header__menu--line'></span>
        </div>
        <div className='header__logo'>
          <a href='/' className='header__logo--link'>
            <h1 className='header__logo--text'>Slay & Co</h1>
          </a>
        </div>
        <div className='header__search'>
          <SearchIcon />
        </div>
      </header>
      <section className='section-intro container'>
        <div className='intro'>
          <h1 className='intro__heading' ref={headingRef}>
            "Style is something each of us already has, all we need to do is
            find it."
          </h1>
          <p className='intro__text'>-Diane von Furstenberg-</p>
          <div className='intro__container'>
            <div className='intro__overlay'>&nbsp;</div>
            <video
              muted={true}
              ref={videoRef}
              src={video}
              preload='metadata'
              controls={false}
              className='intro__video'
              onEnded={() => setIsPlaying(false)}
              onClick={toggleVideoPlayHandler}
              onMouseEnter={() => playVideoOnHover()}
              onMouseLeave={() => pauseVideoOnHover()}
            ></video>
            <button className='intro__button' onClick={toggleVideoPlayHandler}>
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className='intro__art'>
              <img src={star} alt='star' className='intro__art-image' />
            </div>
          </div>
        </div>
      </section>
      <section className='section-categories container'>
        <div className='categories'>
          <Tab.Root defaultValue='men'>
            <Tab.List className='categories__list' aria-label='tabs'>
              <Tab.Trigger value='men' className='categories__button'>
                <div className='categories__overlay'>&nbsp;</div>
                <img
                  src={avatar}
                  alt={`men's slay n co`}
                  className='categories__thumb'
                />
              </Tab.Trigger>
              <Tab.Trigger value='women' className='categories__button'>
                <div className='categories__overlay'>&nbsp;</div>
                <img
                  src={avatarOne}
                  alt={`women's slay n co`}
                  className='categories__thumb'
                />
              </Tab.Trigger>
              <Tab.Trigger value='kids' className='categories__button'>
                <div className='categories__overlay'>&nbsp;</div>
                <img
                  src={avatarTwo}
                  alt={`kid's slay n co`}
                  className='categories__thumb'
                />
              </Tab.Trigger>
            </Tab.List>
            <Tab.Content value='men' className='categories__content'>
              <div className='categories__content--1'>
                <div className='categories__info'>
                  <h1 className='categories__heading'>Men</h1>
                  <p className='categories__paragraph'>
                    Check out our top collections for men
                  </p>
                  <button className='categories__link'>
                    <span className='text'>Explore</span>
                    <span className='icon'>
                      <ExploreIcon />
                    </span>
                  </button>
                </div>
                <div className='categories__banner'>
                  <img
                    src={avatar}
                    alt="men's slay n co"
                    className='categories__image'
                  />
                </div>
              </div>
            </Tab.Content>
            <Tab.Content value='women' className='categories__content'>
              <div className='categories__content--2'>
                <div className='categories__banner'>
                  <img
                    src={avatarOne}
                    alt="men's slay n co"
                    className='categories__image'
                  />
                </div>
                <div className='categories__info'>
                  <h1 className='categories__heading'>Women</h1>
                  <p className='categories__paragraph'>
                    Check out our top collections for ladies
                  </p>
                  <button className='categories__link'>
                    <span className='text'>Explore</span>
                    <span className='icon'>
                      <ExploreIcon />
                    </span>
                  </button>
                </div>
              </div>
            </Tab.Content>
            <Tab.Content value='kids' className='categories__content'>
              <div className='categories__content--3'>
                <div className='categories__info'>
                  <div className='categories__info'>
                    <h1 className='categories__heading'>Kids</h1>
                    <p className='categories__paragraph'>
                      Check out our top collections for kids
                    </p>
                    <button className='categories__link'>
                      <span className='text'>Explore</span>
                      <span className='icon'>
                        <ExploreIcon />
                      </span>
                    </button>
                  </div>
                </div>
                <div className='categories__banner'>
                  <img
                    src={avatarTwo}
                    alt="men's slay n co"
                    className='categories__image'
                  />
                </div>
              </div>
            </Tab.Content>
          </Tab.Root>
        </div>
      </section>
      <section className='section-releases container'>
        <div className='releases'>
          <h1 className='releases__heading'>Our Top Releases</h1>
          <div className='releases__wrapper'>
            <div className='releases__card'>
              <img src={image} alt='release' className='releases__image' />
              <div className='releases__overlay'>
                <div className='releases__content'>
                  <h1 className='releases__title'>Slay Grey Gown</h1>
                  <h3 className='releases__price'>$499.98</h3>
                </div>
              </div>
            </div>
            <div className='releases__card'>
              <img src={imageOne} alt='release' className='releases__image' />
              <div className='releases__overlay'>
                <div className='releases__content'>
                  <h1 className='releases__title'>Slay Grey Gown</h1>
                  <h3 className='releases__price'>$499.98</h3>
                </div>
              </div>
            </div>
            <div className='releases__card'>
              <img src={imageTwo} alt='release' className='releases__image' />
              <div className='releases__overlay'>
                <div className='releases__content'>
                  <h1 className='releases__title'>Slay Stripes turtle neck</h1>
                  <h3 className='releases__price'>$499.98</h3>
                </div>
              </div>
            </div>
          </div>
          <button className='releases__button'>See all</button>
        </div>
      </section>
      <section className='section-blogs container'>
        <div className='blogs'>
          <h1 className='blogs__heading'>Our Blog</h1>
          <Swiper
            direction={'horizontal'}
            slidesPerView={'auto'}
            spaceBetween={50}
            mousewheel={true}
            modules={[Mousewheel]}
            className='blogs__wrapper'
          >
            <SwiperSlide className='blogs__card'>
              <div className='blogs__image-box'>
                <img src={blog} alt='blog' className='blogs__image' />
              </div>
              <h1 className='blogs__title'>
                The unseen of spending three years at Pixelgrade.
              </h1>
              <p className='blogs__time'>2 min</p>
            </SwiperSlide>
            <SwiperSlide className='blogs__card'>
              <div className='blogs__image-box'>
                <img src={blogOne} alt='blog' className='blogs__image' />
              </div>
              <h1 className='blogs__title'>
                How to build a loyal community online and offline?
              </h1>
              <p className='blogs__time'>5 min</p>
            </SwiperSlide>
            <SwiperSlide className='blogs__card'>
              <div className='blogs__image-box'>
                <img src={blogTwo} alt='blog' className='blogs__image' />
              </div>
              <h1 className='blogs__title'>
                How to choose the right customer for your photo business?
              </h1>
              <p className='blogs__time'>10 min</p>
            </SwiperSlide>
            <SwiperSlide className='blogs__card'>
              <div className='blogs__image-box'>
                <img src={blogThree} alt='blog' className='blogs__image' />
              </div>
              <h1 className='blogs__title'>Slay with friends and family.</h1>
              <p className='blogs__time'>3 min</p>
            </SwiperSlide>
          </Swiper>
          <button className='blogs__button'>See all</button>
        </div>
      </section>
      <section className='section-partners container'>
        <div className='partners'>
          <div className='partners__wrapper'>
            <div className='partners__card'>
              <img src={partner} alt='red carpet' className='partners__image' />
            </div>
            <div className='partners__card'>
              <img
                src={partnerOne}
                alt='Metamask'
                className='partners__image'
              />
            </div>
            <div className='partners__card'>
              <img
                src={partnerTwo}
                alt='Billboard'
                className='partners__image'
              />
            </div>
          </div>
        </div>
      </section>
      <footer className='footer container'>
        <div className='footer__box footer__group'>
          <h1 className='footer__heading'>Explore</h1>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Men'>
                Men
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Women'>
                Women
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Kids'>
                Kids
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Shoes'>
                Shoes
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Bags'>
                Bags
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Accessories'>
                Accessories
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__box footer__group'>
          <h1 className='footer__heading'>LEGAL TERMS AND CONDITIONS</h1>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Legal Notice'>
                Legal Notice
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Policy Privacy'>
                Policy Privacy
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Cookie Policy'>
                Cookie Policy
              </a>
            </li>
            <li className='footer__item'>
              <a href='/' className='footer__link' name='Sitemap'>
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className='footer__box footer__newletter'>
          <h1 className='footer__title'>Never get left out</h1>
          <p className='footer__paragraph'>
            Subscribe to our newsletter to get recent updates
          </p>
          <form action='' className='footer__form'>
            <input
              type='email'
              name='email'
              placeholder='Email'
              className='footer__input'
            />
            <button className='footer__button' type='submit'>
              Subscribe
            </button>
          </form>
          <div className='footer__socials'>
            <h1 className='footer__cta'>Join Us:</h1>
            <div className='footer__icons'>
              <a href='/' className='footer__icon' name='twitter handle'>
                <img src={TwitterIcon} alt='icon twitter' className='' />
              </a>
              <a href='/' className='footer__icon'>
                <img src={InstagramIcon} alt='icon instagram' className='' />
              </a>
              <a href='/' className='footer__icon'>
                <img src={RedditIcon} alt='icon reddit' className='' />
              </a>
              <a href='/' className='footer__icon'>
                <img src={PinterestIcon} alt='icon pinterest' className='' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
