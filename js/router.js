'use strict';

function Router(routes) {
    try {
        if(!routes) {
            throw 'error: routes param is mandatory';
        }
        this.routerConstructor(routes);
        this.init();
    } catch (e) {
        console.log(e);
    }
}

Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    routerConstructor: function (routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function () {
        var r = this.routes;
        (function(scope, r){
            window.addEventListener('hashChange', function (e) {
                scope.hasChanged(scope, r);
            });
        })(this, r);
        this.has
    }
}