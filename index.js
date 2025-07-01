const isValid = (s) => {
    let flag =true;
    let checkList = [];
    let receiveList=[];
    receiveList= s.split('');
    //when only 1 set of symbol is used in ()[]{}, j-i must be 1, which mean (j-i)%2 must be 1
    //when 2 sets of symbol are used, (j-i)%2 must be 1
    //when 3 sets of symbol are used, (j-i) is gonna be 1 or 3, but if every calculated number is 3. it is false
    for(let i=0; i<receiveList.length; i++){
        // judge []
        if (receiveList[i] ==="["){
            for(let j=0; j<receiveList.length; j++){
                if(receiveList[j]==="]"){
                    let check = j-i;
                    checkList.push(check);
                    if(check%2 !=1){
                        flag = false
                    }
                }
            }
        // judge ()
        }else if (receiveList[i] ==="("){
            for(let j=0; j<receiveList.length; j++){
                if(receiveList[j]===")"){
                    let check = j-i;
                    checkList.push(check)
                    if(check%2 !=1){
                        flag = false;
                    }
                }
            }   
        // judge {}   
        }else if (receiveList[i] ==="{"){
            for(let j=0; j<receiveList.length; j++){
                if(receiveList[j]==="}"){
                    let check = j-i;
                    checkList.push(check);
                    if(check%2 !=1){
                        flag = false;
                    }
                }
            }
        }
    }
    // when all check === 3, for example("{([})]"), it is false 
    // only when every symbol is used, this problem is happened
    let sum = 0
    checkList.forEach(num =>sum+=num)
    if(sum===9){
        flag=false;
    }

    if(flag===true){
        return true;
    }else{
        return false;
    }
}
console.log(isValid(""));  //input here