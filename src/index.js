import  worker  from 'workerize-loader!./worker'

(function() {

  if (typeof window !== "undefined") {
    window["GlobalWebWorker"] = worker();
    window["card-counter-app"]();
    window["angular-app"]();
  }


})();