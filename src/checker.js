export const Checker = (checkerColor) => {

    let checkerElement = document.createElement('img');
    checkerElement.src = `../assets/${checkerColor}-checker.png`;

    const getColor = () => {
        return checkerColor;
    };

    const getElement = () => {
        return checkerElement;
    }

    return { getColor, getElement };
};