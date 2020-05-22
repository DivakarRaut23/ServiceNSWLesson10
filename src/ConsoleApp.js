const readline = require('readline');
const path = require("path");
const {StudentDataReader, TeacherDataReader} = require("./DataLayer");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function askQuestion(question) {
    let answer;

    return new Promise((resolve, reject) => {
        rl.question(question, (ans) => {
            resolve(ans);
        })
    });
}


async function Program() {
        const baseFilePath = path.join(__dirname, "../", "JSONData");
        const _studentDataReader = new StudentDataReader(path.join(baseFilePath, "Students.json"));
        const _teacherDataReader = new TeacherDataReader(path.join(baseFilePath, "Students.json"));

        console.log(_studentDataReader.getArrayFromFile());
        console.log(_teacherDataReader.getArrayFromFile());


        // let shouldLoop = true;

        // while (shouldLoop){

  



    // Your Code Here...
}

Program().then(() => {
    process.exit(0);
});