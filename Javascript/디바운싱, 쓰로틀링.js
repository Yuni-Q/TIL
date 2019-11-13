/*
 * 디바운싱 : Interval 내 반복되는 이벤트를 무시함.
 */
const debounce = (f, interval = 30) => {
    let now = null;

    return (...param) => {
        if (now) clearTimeout(now);

        now = setTimeout(() => {
            f(...param);
        }, interval);
    }
}

/*
 * 쓰로틀링 : 연이은 이벤트의 Interval 단위 실행을 보장.
 */
const throttling = (f, interval = 300) => {
    let isPending = false;

    return (...param) => {
        if (!isPending) {
            isPending = !!setTimeout(
                () => {
                    f(...param);
                    isPending = false;
                }, interval);
        }
    }
}
