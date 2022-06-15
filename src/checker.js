export const Checker = (checkerColor) => {

    let checkerElement = document.createElement('img');
    checkerElement.src = require(`../assets/${checkerColor}-checker.png`);
    console.log(checkerElement.src + ' first setup');

    const getColor = () => {
        return checkerColor;
    };

    const getElement = () => {
        return checkerElement;
    }

    return {
        getColor,
        getElement
    };
};
