import { TUTORIALS } from '../../app/shared/TUTORIALS';

export const selectAllPortfolio = () => {
    return TUTORIALS;
};

export const selectRandomPortfolio = () => {
    return TUTORIALS[Math.floor(TUTORIALS.length * Math.random())];
};