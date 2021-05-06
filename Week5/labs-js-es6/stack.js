// [4, 5, 6, 7, fn]

//{{{{(( )}}}}
//{{{{(( })}}}}

let compileOne = "{{{{(( ))}}}}".split('');
let compileTwo = "{{{{(( })}}}}".split('');

class Stack {
    constructor(){
        this.arr = [];
    }

    push(item){
        this.data.push(item);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length - 1];
    }

    length(){
        return this.data.length;
    }
}

const balancedBrackets = (string) => {
    let opening = {
        "(": true,
        "{": true,
        "[": true
    }
    let closing = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stack = new Stack();
    let executable = "";

    for(let i = 0; i < string.length; i++){
        // Opening
        let char = string[i];
        if (opening[char]){
            stack.push(char);
        }

        // Closing
        // what's evaluated: is the char a key in closing?
        if (char in closing){
            let lastChar = stack.pop();

            if(lastChar != closing[char]){
                return false;
            }
        }
        
    }

    return stack.length() === 0 ? true : false;

}