
export default function resizableGrid(table) {
    let row = table.getElementsByTagName('tr')[0],
    cols = row ? row.children : undefined;
    if (!cols) return;

    let tableHeight = table.offsetHeight;

    for (let i = 0; i < cols.length; i++) {
        if (cols[i].children.length < 2) {
            let div = createDiv(tableHeight);
            cols[i].appendChild(div);
            cols[i].style.position = 'relative';
            setListeners(div);
        }
    }
    function setListeners(div) {
        let pageX, curCol, nxtCol, curColWidth, nxtColWidth;

        div.addEventListener('mousedown', function (e) {
            curCol = e.target.parentElement;
            nxtCol = curCol.nextElementSibling;
            pageX = e.pageX;

            let padding = paddingDiff(curCol);

            curColWidth = curCol.offsetWidth - padding;
            if (nxtCol)
                nxtColWidth = nxtCol.offsetWidth - padding;
        });

        div.addEventListener('mouseover', function (e) {
            e.target.style.borderRight = '2px solid #bcbcbc';
        })

        div.addEventListener('mouseout', function (e) {
            e.target.style.borderRight = '';
        })

        document.addEventListener('mousemove', function (e) {
            if (curCol) {
                let diffX = e.pageX - pageX;
                if (nxtCol)
                    nxtCol.style.width = (nxtColWidth - (diffX)) + 'px';
                    nxtCol.style.maxWidth = (nxtColWidth - (diffX)) + 'px';
                    nxtCol.classList.add('changeWidth')

                curCol.style.width = (curColWidth + diffX) + 'px';
                curCol.style.maxWidth = (curColWidth + diffX) + 'px';
                curCol.classList.add('changeWidth')
            }
        });

        document.addEventListener('mouseup', function (e) {
            nxtCol != undefined ? nxtCol.classList.remove('changeWidth') : ''
            curCol != undefined ? curCol.classList.remove('changeWidth') : ''
            curCol = undefined;
            nxtCol = undefined;
            pageX = undefined;
            nxtColWidth = undefined;
            curColWidth = undefined;
        });
    }

    function createDiv(height) {
        let div = document.createElement('div');
        div.classList.add('table__item-border');
        div.style.top = 0;
        div.style.right = 0;
        div.style.width = '5px';
        div.style.position = 'absolute';
        div.style.cursor = 'col-resize';
        div.style.userSelect = 'none';
        div.style.height = height + 'px';
        return div;
    }

    function paddingDiff(col) {

        if (getStyleVal(col, 'box-sizing') == 'border-box') {
            return 0;
        }

        let padLeft = getStyleVal(col, 'padding-left');
        let padRight = getStyleVal(col, 'padding-right');
        return (parseInt(padLeft) + parseInt(padRight));

    }

    function getStyleVal(elm, css) {
        return (window.getComputedStyle(elm, null).getPropertyValue(css))
    }
};