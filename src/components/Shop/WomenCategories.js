import CatgoryCard from '../Card/CatgoryCard';
import TitleCard from '../Card/TitleCard';
import { products } from '../../data/data';
import { animateScroll as scroll } from "react-scroll";
import { useEffect } from 'react';



const WomenCategories = () => {
  
    useEffect(()=>{
      scroll.scrollToTop({
        duration: 500,
        smooth: true,
    });
    },[])


    const category = "women";
    const mencategories = products.filter((cat) => cat.category === category);
    const uniqueTags = new Set();
    const uniqueMencategories = mencategories.filter((cat) => {
        if (uniqueTags.has(cat.tag)) {
          return false;
        }
        uniqueTags.add(cat.tag);
        return true;
      });

  return (
    <section className="w-full h-full flex flex-col items-start px-5 xl:px-10 py-10 gap-10">
    <TitleCard title="Categories For Men" />
    {console.log(uniqueMencategories)}
    <section className="w-full h-full flex flex-row gap-10 overflow-x-scroll">
      {uniqueMencategories?.map((cat) => (
        <main key={cat.id}>
          <CatgoryCard img={cat.img} title={cat.tag} category={category}/>
        </main>
      ))}
    </section>
  </section>

  )
}

export default WomenCategories