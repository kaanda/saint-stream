import { useEffect } from 'react';

const ScrollArrows = () => {
    useEffect(() => {
        const arrowRight = document.getElementById('arrow-right');
        const arrowLeft = document.getElementById('arrow-left');
        const contentMovieList = document.querySelector('.content-movie-list');

        if (arrowRight && arrowLeft && contentMovieList) {
            arrowRight.addEventListener('click', function() {
                contentMovieList.scrollBy({ top: 0, left: 200, behavior: 'smooth' });
            });

            arrowLeft.addEventListener('click', function() {
                contentMovieList.scrollBy({ top: 0, left: -200, behavior: 'smooth' });
            });
        }
    }, []);

    return (
        <>
            <button id="arrow-left" className="arrow" />
            <button id="arrow-right" className="arrow" />
        </>
    );
};

export default ScrollArrows;