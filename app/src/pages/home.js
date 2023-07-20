import React from 'react';


export default function Home() {
  return (
    <div>
       <main className='bg-white px-10'>
        <section className= ' min-h-screen'>
       
          <div className='relative mx-auto overflow-hiddens mt-20 flex justify-center'>
            <img src="/images/headshotphotoshop.png" alt="Picture of the author" className='rounded-full w-80 h-80 object-cover'/>
          </div>
          <div className='text-center p-10'>
            <h2 className='text-5xl  mb-4 py-2'>Connor McGrew</h2>
            <h3 className='text-2xl py-2'>Fullstack Developer and Student</h3>
            <p className='text-md py-5 leading-8'>
              I am currently a student at the University of Utah Professional Education Bootcamps studying fullstack development
            </p>
          </div>
        </section>
     
      </main>
    </div>
  );
}


