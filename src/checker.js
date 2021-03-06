export const Checker = (checkerColor) => {

    const getColor = () => {
        return checkerColor;
    };

    const getElement = () => {
        let checkerElement = document.createElement('img');
        checkerElement.classList.add('checker');
        checkerElement.src = require(`../assets/${checkerColor}-checker.png`);
        return checkerElement;
    }

    return {
        getColor,
        getElement
    };
};
