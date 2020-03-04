export const normalTime = (time) => {
    if (time) {
        let oDate = new Date();
        oDate.setTime(time);
        let y = oDate.getFullYear();
        let month = oDate.getMonth() + 1;
        let d = oDate.getDate();
        let h = oDate.getHours();
        let minutes = oDate.getMinutes();
        let s = oDate.getSeconds();
        return y + '-' + month + '-' + d + ' ' + h + ':' + minutes + ':' + s;
    }
}