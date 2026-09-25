import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Library from '@/components/Library/Library';
import React from 'react';

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <Library></Library>
      <Footer></Footer>
    </div>
  );
};

export default page;