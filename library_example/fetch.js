const contentElement = document.querySelector('.content');

async function getStudents(){
    const response = await fetch('students.json');
    console.log(response);
    const list = await response.json();
    console.log(list);

    for (let i = 0; i < list.length; i++){
        const idEl = document.createElement('div');
        contentElement.appendChild(idEl);
        const newID = new Student(idEl, list[i].name, list[i].grade, list[i].gpa)
        newID.displayID();
    }
}

getStudents()