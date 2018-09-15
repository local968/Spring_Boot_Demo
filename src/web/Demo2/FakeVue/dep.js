var uid = 0;

function Dep() {
    this.id = uid++;
    this.subs = [];
}
Dep.target = null;

Dep.prototype = {
    addSub: function (sub) {
        this.subs.push(sub);
    },
    depend: function () {
        Dep.target.push(this);
    },
    notify: function () {
        this.subs.forEach(function (sub) {
            sub.update();
        })
    }
};

export default Dep;