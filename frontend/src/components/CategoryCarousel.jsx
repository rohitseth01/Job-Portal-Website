import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { setsearchedQuery } from "../redux/jobSlice";
import { useNavigate } from 'react-router-dom';

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "FullStack Developer",
];

const CategoryCarousel = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate();

  const searchJobHandler=(query)=>{
      dispatch(setsearchedQuery(query))
      navigate("/browse")
  }


  return (
    <div className="w-full max-w-xl mx-auto py-4">
      <Carousel>
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <Button onClick={()=>searchJobHandler(cat)} variant="outline" className="w-full rounded-full">{cat}</Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;


// import React from "react";
// import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
// import { Button } from '@/components/ui/button';

// const category = [
//   "Frontend Developer",
//   "Backend Developer",
//   "Data Science",
//   "Graphic Designer",
//   "FullStack Developer",
// ];

// const CategoryCarousel = () => {
//   return (
//     <div>
//       <Carousel>
//         <CarouselContent>
//           {category.map((cat, index) => (
//             <CarouselItem>
//               <Button>{cat}</Button>
//             </CarouselItem>
//           ))
//         }
//         </CarouselContent>
//       </Carousel>
//     </div>
//   );
// };

// export default CategoryCarousel;
