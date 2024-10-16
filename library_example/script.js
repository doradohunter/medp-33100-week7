// const ids = [
//     {
//         name: "Massimo Viviano",
//         grade: "9th",
//         gpa: 3.1
//     },
//     {
//         name: "Sal Viviano",
//         grade: "10th",
//         gpa: 3.7
//     },
//     {
//         name: "Dora do",
//         grade: "12th",
//         gpa: 3.8
//     }
// ]

class Student{
    constructor(element, name, grade, gpa){
        this.element = element; //creates the overall element
        this.name = name; //creates the name 
        this.grade = grade; //creates grade
        this.gpa = gpa; //creates gpa

        this.element.classList.add('ID');
        // console.log(this);
    }

    displayID (){
        this.element.innerHTML = "";

        const nameElement = document.createElement('p');
        nameElement.classList.add('name');
        nameElement.innerText = this.name;

        const gradeElement = document.createElement('p');
        gradeElement.classList.add('grade');
        gradeElement.innerText = this.grade;

        const gpaElement = document.createElement('p');
        gpaElement.classList.add('gpa');
        gpaElement.innerText = this.gpa;

        this.element.appendChild(nameElement);
        this.element.appendChild(gradeElement);
        this.element.appendChild(gpaElement);

        // if (this.grade == "9th"){
        //     this.classList.add('ninth')
        // }
        // else if(this.grade == "10th"){
        //     this.classList.add('tenth')
        // }
        // else if( this.grade == "11th"){
        //     this.classList.add('eleventh')
        // }
        // else{
        //     this.classList.add('twelfth')
        // }
    }
}

// const idElement = document.querySelector(".content");

// for (let i = 0; i < ids.length; i++){
//     const id1Element = document.createElement("div");
//     idElement.appendChild(id1Element);
//     const id1 = new student(id1Element, ids[i].name, ids[i].grade,ids[i].gpa)
//     id1.displayID();
// }