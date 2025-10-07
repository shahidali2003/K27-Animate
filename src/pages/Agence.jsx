import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
  '/fonts/img1.jpg',
  '/fonts/img2.jpg',
  '/fonts/img3.jpg',
  '/fonts/img4.jpg',
  '/fonts/img5.jpg',
  '/fonts/img6.jpg',
  '/fonts/img7.jpg',
  '/fonts/img8.jpg',
  '/fonts/img9.jpg',
  '/fonts/img10.jpg',
  '/fonts/img11.jpg',
  '/fonts/img12.jpg',
  '/fonts/img13.jpg',
  '/fonts/img14.jpg',
]

useGSAP(function () {
  const tween = gsap.to(imageDivRef.current, {
    scrollTrigger: {
      trigger: imageDivRef.current,
      // markers: true,
      start: 'top 28%',
      end: 'top -70%',
      pin: true,
      pinSpacing: true,
      pinReparent: true,
      pinType: 'transform',
      scrub: 1,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    // ...existing code...
onUpdate: (elem) => {
  let imageIndex;
  if (elem.progress < 1) {
    imageIndex = Math.floor(elem.progress * imageArray.length)
  } else {
    imageIndex = imageArray.length - 1
  }
  if (imageRef.current) {
    imageRef.current.src = imageArray[imageIndex]
  }
}
    }
  })
  return () => {
    tween.scrollTrigger && tween.scrollTrigger.kill();
    tween.kill();
  }
})
// ...existing code...


  return (
    <div className='parent'>
      <div id='page1' className='py-1 '>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="./public/fonts/img1.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[55vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[18vw]'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[40%] lg:mt-20 mt-4 p-3'>
            <p className='lg:text-6xl text-xl leading-tight'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      {/* <div id='page2' className=" h-screen">

      </div> */}
    </div>
  )
}

export default Agence