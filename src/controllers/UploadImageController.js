
let removeImageBtns = null;
let customFileInputs = null;

const onImageUpload = (e) => {
    const [uploadedImage] = e.currentTarget.files;
    const uploadedImagesContainer = e.currentTarget.previousElementSibling.firstElementChild;

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-preview__container');

    const removeBtn = document.createElement('div');
    removeBtn.classList.add('close-btn-dark-round');
    removeBtn.classList.add('image-preview__remove');
    removeBtn.addEventListener('click', removeImage);

    const imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(uploadedImage);
    imageElement.classList.add('image-preview__image');

    imageContainer.appendChild(removeBtn);
    imageContainer.appendChild(imageElement);
    uploadedImagesContainer.appendChild(imageContainer);
};

const removeImage = (e) => {
    console.log(e.currentTarget.parentElement);
    e.currentTarget.parentElement.remove();
};

const removeEventListeners = () => {
    if (customFileInputs) {
        for (let i = 0; i < customFileInputs.length; i += 1) {
            customFileInputs[i].removeEventListener('change', onImageUpload);
        }
    }

    if (removeImageBtns) {
        for (let i = 0; i < removeImageBtns.length; i += 1) {
            removeImageBtns[i].removeEventListener('click', removeImage);
        }
    }
};

const UploadImageController = () => {
    removeEventListeners();

    customFileInputs = document.getElementsByClassName('custom-file-input');
    removeImageBtns = document.getElementsByClassName('image-preview__remove');

    if (customFileInputs) {
        for (let i = 0; i < customFileInputs.length; i += 1) {
            customFileInputs[i].addEventListener('change', onImageUpload);
        }
    }

    if (removeImageBtns) {
        for (let i = 0; i < removeImageBtns.length; i += 1) {
            removeImageBtns[i].addEventListener('click', removeImage);
        }
    }
};

window.addEventListener('unload', () => {
    removeEventListeners();
});

export default UploadImageController;