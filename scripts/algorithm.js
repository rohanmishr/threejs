const MACHINESORTID = 1;
const FARMINGSORTID = 2;
const FUELTANKSORTID = 3;
const EXTENSIONSORTID = 4;

function SortByPrototype(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor.name == "Machine"){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor.name == "Synthesizer"){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor.name == "Biotech"){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor.name == "FuelTank"){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor.name == "Extension"){
            newArr.push(arr[i]);
        }
    }
    
    return newArr;
}

function SortByGrade(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i].grade == BASIC){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].grade == ADVANCED){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].grade == COMPLEX){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].grade == EXPERT){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].grade == MASTER){
            newArr.push(arr[i]);
        }
    }
    for(var i = 0; i < arr.length; i++){
        if(arr[i].grade == INDUSTRIAL){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}