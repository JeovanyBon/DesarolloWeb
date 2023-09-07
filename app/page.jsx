import { Roboto_Mono } from 'next/font/google';

const roboto_Mono = Roboto_Mono({ subsets: ['latin'], weight: ['400'] });

function Home(){
  return (
    <div className="text-center bg-customColor h-screen w-full">
      <h1 className={`text-white text-3xl mt-6 text-center ${roboto_Mono.className}`}>Home</h1>
    </div>
  )
}

export default Home;