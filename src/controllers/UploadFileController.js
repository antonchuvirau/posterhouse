let form = null;
let fileInput = null;
let progressArea = null;
let uploadedArea = null;
let removeBtns = null;
let closeBtns = null;

const showLoadingInProgressStatus = ({ name, loadedSize, fileSize, fileLoadedPercent }) => {
    const progressHTML = `
        <div class="file-upload-item">
            <div class="file-upload-item__image"></div>
            <div class="file-upload-item__content">
            <div class="file-upload-item__first-line">
                <span class="file-upload-item__filename">${name}</span>
                <div class="file-upload-item__size-container">
                <span class="file-upload-item__size">${loadedSize} / ${fileSize}</span>
                <div class="file-upload-item__action-btn close-small"></div>
                </div>
            </div>
            <progress class="file-upload-item__progress" max="100" value="${fileLoadedPercent}"></progress>
            <div class="file-upload-item__last-line">
                <span class="file-upload-item__status-icon loading-one-icon"></span>
                <span class="file-upload-item__status">Uploading...</span>
            </div>
            </div>
        </div>
    `;

    progressArea.innerHTML = progressHTML;
}

const showLoadingCompletedStatus = (name, fileSize) => {
    progressArea.innerHTML = "";

    const uploadedHTML = `
        <div class="file-upload-item">
            <div class="file-upload-item__image"></div>
            <div class="file-upload-item__content">
            <div class="file-upload-item__first-line">
                <span class="file-upload-item__filename">${name}</span>
                <div class="file-upload-item__size-container">
                <span class="file-upload-item__size">${fileSize}</span>
                <div class="file-upload-item__action-btn trash"></div>
                </div>
            </div>
            <progress class="file-upload-item__progress" max="100" value="100"></progress>
            <div class="file-upload-item__last-line">
                <span class="file-upload-item__status-icon success"></span>
                <span class="file-upload-item__status">Completed</span>
            </div>
            </div>
        </div>
    `;
    uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
}

const showSizeLimitError = (name) => {
    progressArea.innerHTML = "";

    const uploadedHTML = `
        <div class="file-upload-item">
            <div class="file-upload-item__image"></div>
            <div class="file-upload-item__content">
            <div class="file-upload-item__first-line">
                <span class="file-upload-item__filename">${name}</span>
                <div class="file-upload-item__size-container">
                <div class="file-upload-item__action-btn trash"></div>
                </div>
            </div>
            <progress class="file-upload-item__progress"></progress>
            <div class="file-upload-item__last-line">
                <span class="file-upload-item__status-icon warning-filled"></span>
                <span class="file-upload-item__status">The size of your file more than 2MB</span>
            </div>
            </div>
        </div>
    `;

    uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
}

const errorHandler = (name, e) => {
    progressArea.innerHTML = "";

    console.log(e)

    const progressHTML = `
        <div class="file-upload-item">
            <div class="file-upload-item__image"></div>
            <div class="file-upload-item__content">
            <div class="file-upload-item__first-line">
                <span class="file-upload-item__filename">${name}</span>
                <div class="file-upload-item__size-container">
                <div class="file-upload-item__action-btn reload"></div>
                <div class="file-upload-item__action-btn trash"></div>
                </div>
            </div>
            <progress class="file-upload-item__progress"></progress>
            <div class="file-upload-item__last-line">
                <span class="file-upload-item__status-icon warning-filled"></span>
                <span class="file-upload-item__status">Upload failed</span>
            </div>
            </div>
        </div>
    `;

    uploadedArea.insertAdjacentHTML("afterbegin", progressHTML);
}

const calculateLoadingInfo = ({
    loaded,
    total,
}) => {
    const fileLoadedPercent = Math.floor((loaded / total) * 100);

    const fileSizeKB = Math.floor(total / 1024);
    const fileSizeMB = (total / (1024 * 1024)).toFixed(2);

    const loadedSizeKB = Math.floor(loaded / 1024);
    const loadedSizeMB = (loaded / (1024 * 1024)).toFixed(2);

    const fileSize = fileSizeKB < 1024 ? fileSizeKB + "KB" : fileSizeMB + "MB";
    const loadedSize = loadedSizeKB < 1024 ? loadedSizeKB + "KB" : loadedSizeMB + "MB";

    return {
        fileLoadedPercent,
        fileSize,
        loadedSize,
    };
}

let endLoading = false;

const progressHandler = ({ loaded, total, name }) => {
    if (endLoading) {
        return;
    }

    const {
        fileLoadedPercent,
        fileSize,
        loadedSize,
    } = calculateLoadingInfo({
        loaded,
        total,
    });

    if (total > 1048576) {
        endLoading = true;
        return showSizeLimitError(name);
    }

    endLoading = false

    if (loaded === total) {
        return showLoadingCompletedStatus(name, fileSize);
    }

    showLoadingInProgressStatus({ name, loadedSize, fileSize, fileLoadedPercent })
}

const onLoad = () => {
    endLoading = false
}

const uploadFile = (name) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "php/upload.php");

    xhr.upload.addEventListener("progress", ({ loaded, total }) => progressHandler({ loaded, total, name }));
    xhr.upload.addEventListener("error", (e) => errorHandler(name, e));
    xhr.upload.addEventListener("load", onLoad);

    const data = new FormData(form);
    xhr.send(data);
}

const prepareFileName = (fileName) => {
    let resultFileName = fileName;

    if (fileName.length >= 24) {
        const [name, extension] = fileName.split('.');
        resultFileName = name.substring(0, 24) + "... ." + extension;
    }

    return resultFileName;
}

const onInputChangeHandler = (e) => {
    const filesToDownLoad = e.target.files;

    if (!filesToDownLoad || filesToDownLoad.length === 0) {
        return;
    }

    for (let index = 0; index < filesToDownLoad.length; index += 1) {
        const file = filesToDownLoad[index];

        const fileName = prepareFileName(file.name);

        uploadFile(fileName);
    }
}

const removeEventListeners = () => {
    if (fileInput) {
        fileInput.removeEventListener('change', onInputChangeHandler)
    }

    if (removeBtns) {
        for (let index = 0; index < removeBtns.length; index += 1) {
            const removeBtn = removeBtns[index];
            removeBtn.removeEventListener('click', onRemoveBtnClick)
        }
    }

    if (closeBtns) {
        for (let index = 0; index < closeBtns.length; index += 1) {
            const removeBtn = closeBtns[index];
            removeBtn.removeEventListener('click', onRemoveBtnClick)
        }
    }
}

const onRemoveBtnClick = (e) => {
    const removeBtn = e.currentTarget;
    const fileUploadItem = removeBtn.parentElement.parentElement.parentElement.parentElement;
    fileUploadItem.remove();
}

const UploadFileController = () => {
    removeEventListeners();

    form = document.querySelector("form");
    fileInput = document.querySelector(".file-input");
    progressArea = document.querySelector(".progress-area");
    uploadedArea = document.querySelector(".uploaded-area");
    removeBtns = document.querySelectorAll(".file-upload-item__action-btn.trash")
    closeBtns = document.querySelectorAll(".file-upload-item__action-btn.close-small")

    if (fileInput) {
        fileInput.addEventListener('change', onInputChangeHandler)
    }

    if (removeBtns) {
        for (let index = 0; index < removeBtns.length; index += 1) {
            const removeBtn = removeBtns[index];
            removeBtn.addEventListener('click', onRemoveBtnClick)
        }
    }
    if (closeBtns) {
        for (let index = 0; index < closeBtns.length; index += 1) {
            const removeBtn = closeBtns[index];
            removeBtn.addEventListener('click', onRemoveBtnClick)
        }
    }
};

window.addEventListener('unload', () => {
    removeEventListeners();
});

export default UploadFileController;