/**
 * @author yaniky
 * @description 全屏翻页组件
 */

export class FullScreenPage {
    constructor(options) {
        this._options = options;
        this._els = [];
        this._nowActive = 0;
        this._body = document.body;
        this._oldPageY = null;
        this._AniWay = {
            Up: 1,
            Down: -1
        };
        this._nowAni = 0;
        this._maxMove = 0;
        this._moveAniTime = 60;
        this._pageHeight = this._options.container.getBoundingClientRect().height;
        this._initPage();
        this._addStartEventListen();
        this._addMoveLintener();
        this._addEndEvent();
    }

    _initPage() {
        this._nowActive = 0;
        this._body.style.padding = 0;
        this._body.style.margin = 0;
        this._els = document.getElementsByClassName(this._options.class);
        this._maxMove = this._pageHeight * (this._els.length - 1);
        for (const el of this._els) {
            el.style.position = "relative";
            el.style.width = "100%";
            el.style.height = this._pageHeight + "px";
        }
    }

    _addStartEventListen() {
        document.addEventListener("touchstart", e => {
            this._oldPageY = e.touches[0].pageY;
        });
    }

    _addMoveLintener() {
        document.addEventListener("touchmove", e => {
            const newY = e.changedTouches[0].pageY;
            const moveY = newY - this._oldPageY;

            const oldTop = parseInt(this._els[0].style.marginTop.replace("px", ""), 10) || 0;

            if (oldTop + moveY > 0) {
                this._els[0].style.marginTop = 0;
            } else if (oldTop + moveY < -1 * this._maxMove) {
                this._els[0].style.marginTop = -1 * this._maxMove + "px";
                return;
            } else {
                this._els[0].style.marginTop = oldTop + moveY + "px";
                if (moveY > 0) {
                    this._nowAni = this._AniWay.Down;
                } else {
                    this._nowAni = this._AniWay.Up;
                }
            }

            this._oldPageY = newY;
        });
    }

    _getNowPosition() {
        const marginTop = -1 * parseInt(this._els[0].style.marginTop.replace("px", ""), 10);
        const nowPage = marginTop / this._pageHeight;

        return nowPage;
    }

    _addEndEvent() {
        document.addEventListener("touchend", () => {
            switch (this._nowAni) {
            case this._AniWay.Down: {
                if (parseInt(this._getNowPosition(), 10) === this._nowActive) {
                    this._toNowPage();
                } else {
                    this._toLastPage();
                }
                break;
            }
            case this._AniWay.Up: {
                if (parseInt(this._getNowPosition(), 10) !== this._nowActive) {
                    this._toNowPage();
                } else {
                    this._toNextPage();
                }
                break;
            }

            default: {
                break;
            }
            }
        });
    }

    _toNowPage() {
        this._updatePage();
    }

    _toLastPage() {
        if (this._nowActive > 0) {
            this._nowActive--;
        }
        this._updatePage();
    }

    _toNextPage() {
        if (this._nowActive < this._els.length - 1) {
            this._nowActive++;
        }
        this._updatePage();
    }

    moveTo(page) {
        if (this._nowActive < 0) {
            this._nowActive = 0;
        } else if (this._nowActive > this._els.length - 1) {
            this._nowActive = this._els.length - 1;
        } else {
            this._nowActive = page;
        }
        this._updatePage();
    }

    _updatePage() {
        const move = this._nowActive * this._pageHeight;

        this._els[0].style.marginTop = -1 * move + "px";
    }
}