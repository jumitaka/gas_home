/* 
  Actionクラス
  抽象クラスとして使用
 */
class Action {
  isTarget(e) {
    if (e.parameter == undefined) {
      return false;
    }

    var name = this.getParameterName();

    if (e.parameter[name] == undefined) {
      return false;
    }

    return true;
  }
  execPost() {
    return undefined;
  }
  execGet() {
    return undefined;
  }

  getParameterName() {
    return undefined;
  }
}