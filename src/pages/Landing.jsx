import * as React from 'react';
import Hero from './landing/Hero';
import Option from './landing/Option';
import Detail from './landing/Detail';
import Footer from './landing/Footer';

// Uso de react memo para evitar renderizar nuevamente la pagina si no ha tenido cambios
function Landing() {

  return (
    <>

       <Hero />
       <Option />
       <Detail />
       <Footer />
    </>
  )
}

export default React.memo(Landing);