const student ={
    name:"Helsink",
    age:24,
    projects:{
        dicegame:"Two players dice game using javascript"
    }

}
const {name,age,projects:{dicegame}} = student;
console.log(name,age,dicegame)
