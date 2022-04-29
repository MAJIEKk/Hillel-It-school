(function () {
    const container = document.querySelector('.itemsList');
    const pageBody = document.querySelector("body");

    const createListItem = ({
        title,
        date,
        preview,
        isPopular
    }) => {
        return `<div class="showItem">
        <span class="showTitle">${title}</span>
        <span class="showDate">${date}</span>
        <span class="showPreview">${preview}</span>
        ${isPopular?'<span class="showIsPopular">Popular</span>':""}
        <button class="moreBTN">More...</button>
    </div>`;
    };

    const createPopupItem = ({
        title,
        date,
        description
    }) => {
        const popup = document.createElement("div");
        popup.className = "popup";
        popup.innerHTML =
            `<div class="popup-content">
                <span class="showTitlePopup">${title}</span>
                <span class="showDatePopup">${date}</span>
                <a class="popup-close" href="#">&times;</a>
                <span class="showDescriptionPopup">${description}</span>
            </div>`;
        return popup;
    }

    const showPopup = (data) => {
        const popup = createPopupItem(data);
        pageBody.append(popup);
        pageBody.querySelector(".popup-close").onclick = () => {
            popup.remove();
        }
    }

    //--- f create block-list whith btn ---// 
    const render = () => {
        const blockItems = notes.map((item) => {
            const blockItem = document.createElement("div");
            blockItem.className = "blockItemPic";

            blockItem.innerHTML = createListItem(item);
            const tbtn = blockItem.querySelector(".moreBTN");
            tbtn.onclick = () => {
                showPopup(item);
            }
            return blockItem;
        })

        container.append(...blockItems)
    }

    render()

})();