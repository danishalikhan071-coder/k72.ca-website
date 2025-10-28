import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
    'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
    'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
    'https://k72.ca/images/teamMembers/SophieA_480x640.jpg?w=480&h=640&fit=crop&s=fcb556060c29623e706dfbc4eeca87ac',
    'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6',
    'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
    'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
    'https://k72.ca/images/teamMembers/Claire_480x640.jpg?w=480&h=640&fit=crop&s=2a5f6181f85b2d13f7fb30c5555835aa',
    'https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',

  ]


  useGSAP(function () {
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:'top 28%',
        end:'top -70%',
        pin:true,
        pinSpacing:true,
        pinReparent: true,
        pinType:'transform',
        scrub:1,
        anticipatePin: 1,
        invalidateOnRefresh:true,
        onUpdate:(e)=>{
          let imageIndex

          if (e.progress<1) {
            imageIndex = Math.floor(e.progress * imageArray.length)
          }else{
            imageIndex = imageArray.length -1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    
    <div>
      <div className="section1 py-1">
      <div ref={imageDivRef} className="absolute overflow-hidden h-[20vw] rounded-4xl w-[15vw] top-28 left-[29vw] ">
        <img ref={imageRef} className="h-full w-full object-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className="font-[font2] text-black relative">
      <div className="mt-[55vh]">
        <h1 className="text-[20vw] text-center uppercase leading-[18vw]">Soixan7e<br />Douze</h1>
      </div>
      <div className="pl-[40%] mt-20">
        <p className="text-6xl ">&nbsp; &nbsp; &nbsp; &nbsp;  Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
      <div className="section2 h-screen">

      </div>
    </div>
  );
};

export default Agence;
