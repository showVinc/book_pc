export default {
  GetQueryString(name,data) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    data = data||''
    let r = window.location.hash.replace(`#/${data}?`, '').match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }
}
