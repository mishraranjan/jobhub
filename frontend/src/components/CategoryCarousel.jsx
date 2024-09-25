import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
]

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-auto'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem 
                            key={index}
                            className='basis-1/3'>
                                <Button className='rounded-full' variant='outline'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    );
}

export default CategoryCarousel;
