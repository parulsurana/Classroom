export const GetSectionCollection = [
    { id: '1', title: 'Class I' },
    { id: '2', title: 'Class II' },
    { id: '3', title: 'Class III' },
    { id: '4', title: 'Class IV' },
    { id: '5', title: 'Class V' },
    { id: '6', title: 'Class VI' },
    { id: '7', title: 'Class VII' },
    { id: '8', title: 'Class VIII' },
    { id: '9', title: 'Class IX' },
    { id: '10', title: 'Class X' },
];

export default function employeeServices(){
const KEYS = {
    employees: "employees",
    employeeId: "employeeId",
}


 function insertEmployee(data) {
    let employees = getAllEmployees();
    data['id'] = generateEmployeeId();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

 function generateEmployeeId() {
    if (localStorage.getItem(KEYS.employeeId) == null)
        localStorage.setItem(KEYS.employeeId, "0")
    var id = parseInt(localStorage.getItem(KEYS.employeeId))
        localStorage.setItem(KEYS.employeeId, (++id).toString());
    return id;
}

 function getAllEmployees() {
    if (localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees));
}
}