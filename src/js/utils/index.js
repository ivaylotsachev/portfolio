export const lettering = ( node, string, classname ) => {
    const nodeEl = document.querySelector(`.${node}`);

    if (nodeEl) {
        [...string].map((char, index) => {
            const span = document.createElement('span');
            span.className = `${classname}-char${index}`;
            span.innerText = char;
            span.style.zIndex = `${index}`;

            if (char === " ") span.classList.add('spacer')
            if (index > 8) span.classList.add('on-hover');

            nodeEl.appendChild(span);
        })
    }
}