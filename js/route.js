'use strict';

function Route(routeName, htmlName, defaultRoute){
    try {
        if(!routeName || !htmlName){
            throw 'error: routeName and htmlName params are mandatories'
        }
        this.routerConstructor(routeName, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    routeName: undefined,
    htmlName: undefined,
    defaultRoute: undefined,
    routerConstructor: function (routeName, htmlName, defaultRoute) {
        this.routeName = routeName;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.htmlName;
    }
}