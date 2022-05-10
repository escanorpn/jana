import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

import { enquireScreen } from 'enquire-js';
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});
 

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    
      if(viewerIsOpen){
        // alert(viewerIsOpen);
        setCurrentImage(0);
        setViewerIsOpen(false);
      }
  };
  const al = () => {
    
   alert("foo");
};
  return (
   
    <div  style={{paddingTop:"28px"}}>
      {isMobile ?(
          <div  onClick={closeLightbox}>
               <Gallery photos={photos} onClick={openLightbox} />
               <ModalGateway>
                 {viewerIsOpen ? (
                   <Modal  onClose={closeLightbox}>
                       
                     <Carousel
                       currentIndex={currentImage}
                       views={photos.map(x => ({
                         ...x,
                         srcset: x.srcSet,
                         caption: x.title,
                         title:"hellow world"
                       }))}
                     />
                     
                   </Modal>
                 ) : null}
               </ModalGateway>
               </div>
      ):(    
    <div>    
    <Gallery photos={photos} onClick={openLightbox} >
    <h5>hellow world</h5>
    </Gallery>
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal  onClose={closeLightbox}>
              
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title, 
                title:"hellow world"
              }))}
            >
              
            </Carousel>
           
          </Modal>
        ) : null}
      </ModalGateway>
      </div>  
      )}
 
    </div>
  );
}
// render(<App />, document.getElementById("app"));

export default  App;