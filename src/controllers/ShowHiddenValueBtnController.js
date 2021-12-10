const INPUT_TYPES = {
    PASS: 'password',
    TEXT: 'text',
};

let showHiddenBtns = null;

const toggleVisibility = (e) => {
    e.stopPropagation();

    const showHiddenBtn = e.currentTarget;
    const passField = showHiddenBtn.previousElementSibling;

    if (!passField) {
        return;
    }

    switch (passField.type) {
        case INPUT_TYPES.PASS:
            passField.type = INPUT_TYPES.TEXT;
            return;

        case INPUT_TYPES.TEXT:
            passField.type = INPUT_TYPES.PASS;
            return;

        default:
            return;
    }
}

const removeEventListeners = () => {
    if (showHiddenBtns) {
        for (let i = 0; i < showHiddenBtns.length; i += 1) {
            showHiddenBtns[i].removeEventListener('click', toggleVisibility,
            { capture: true}
            );
        }
    }
}

const ShowHiddenValueBtnController = () => {
    removeEventListeners();

    showHiddenBtns = document.getElementsByClassName('show-hidden-value-btn');

    if (showHiddenBtns) {
        for (let i = 0; i < showHiddenBtns.length; i += 1) {
            showHiddenBtns[i].addEventListener('click', toggleVisibility);
        }
    }
}

window.addEventListener('unload', () => {
    removeEventListeners();
});

export default ShowHiddenValueBtnController;