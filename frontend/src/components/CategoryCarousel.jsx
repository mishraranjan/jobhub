import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate('/browse')
    }
    return (
        <div>
            <Carousel className='w-full max-w-xl mx-auto my-auto'>
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem
                                key={index}
                                className='basis-1/3'>
                                <Button onClick={() => searchJobHandler(cat)} className='rounded-full' variant='outline'>{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default CategoryCarousel;
