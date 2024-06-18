import imgMobile from '../assets/mobile/image-header.jpg'
import imgDesktop from '../assets/desktop/image-header.jpg'
import arrow from '../assets/icon-arrow-down.svg'
function Main() {
  return (
    <section>
        <picture>
            <source media='(max-width:639px)' srcSet={imgMobile} />
            <source media='(min-width:640px)' srcSet={imgDesktop} />
            <img src={imgMobile} alt="background header" />
        </picture>
        <p className='absolute font-Fraunces text-[40px] top-[144px] w-[327px] left-0 right-0 mx-auto uppercase tracking-[6.25px] text-White text-center
        sm:w-[600px] font-black'>We are creatives</p>
        <img className='absolute top-[294px] left-0 right-0 mx-auto sm:top[220px]' src={arrow} alt="" />
    </section>
  )
}

export default Main
