class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
    }
  

  start(printTimeCallback) {
    this.intervalId = setInterval( () => {
      this.currentTime += 1

      if (printTimeCallback){  // if prinTimeCallBack exists...
        printTimeCallback();  // chamar a própria função. Se não existe - null.
      }
         }, 1000);

      // this.intervalId = setInterval( () => {
      // this.currentTime += 1 // 1 centisegundo = 10 milisegundos

      // if (printTimeCallback){  // if prinTimeCallBack exists...
      //   printTimeCallback();  // chamar a própria função. Se não existe - null.
      // }
      //    }, 10); //aumentar um centisegundo a cada 10 milisegundos
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60)
    // return Math.floor(this.currentTime / 100 / 60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
    // return Math.floor(this.currentTime / 100 % 60)
  }

  // getCentisegundos(){
  //   return Math.floor(this.currentTime % 100)
  // }

  computeTwoDigitNumber(value) {
    // if (value<10){
    //   return "0" + value; 
    // }
    // else {
    //   return '' + value;  // se um dos argumentos da soma for string, retorna string.
    // }

    return ("0"+value).slice(-2)
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds())
    // return this.computeTwoDigitNumber(this.getMinutes()) + ":" + this.computeTwoDigitNumber(this.getSeconds()) + ":" + this.computeTwoDigitNumber(this.getCentisegundos())
  }
}
