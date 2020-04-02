let app = new Vue({
    el: "#main",
    data: {
        name: "Calculator",
        numbers: [1,2,3,4,5,6,7,8,9,0,"."],
        operators: ["+","-","/","*","C","="],
        exp: "",
    },
    methods: {
        click: function(n){
             if (n == "C") return this.exp = "";
             if (n == "=") {
                 console.log(n);
                return this.evaluate();
             }
             this.exp += n;
             
        },
        evaluate: function(e){
            a = 0;
            opr = '+';
            this.exp = this.exp.split(/([^1234567890.])/g);
          // return console.log(this.exp);
            for (let i = 0; i < this.exp.length; i++){
                b = 0;
                if (this.exp[i].match(/([^1234567890.])/)){
                    opr = this.exp[i];
                    continue;
                }
                if (!isNaN(this.exp[i])) b = this.exp[i];
                if (a.toString().match(/\./) || b.toString().match(/\./)) {
                    a = this.calculate(parseFloat(a), opr, parseFloat(b));
                }else{
                    a = this.calculate(parseInt(a), opr, parseInt(b));
                };
                    
                console.log(a)
            }
            this.exp = a.toString();
        },
        calculate: function(a, opr, b){
            switch (opr) {
                case "+":
                    return a + b;
                case "-":
                    return a - b;
                case "/":
                    return a / b;
                case "*":
                    return a * b;
            }
        }
    }
});