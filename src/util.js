export function toggleImageInElement(element, imageElement, imageOn) {

    if (imageOn) {
        element.appendChild(imageElement);
    } else if (!imageOn) {
        element.removeChild(imageElement);
    }

};

export function removeAllChildNodes(parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

};