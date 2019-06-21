
// Initialize Firebase

    var firebaseConfig = {
        apiKey: "AIzaSyC0HUC0upt68UrAgi8sfGb0O63dxMq9noE",
        authDomain: "timesheetpractice-f0000.firebaseapp.com",
        databaseURL: "https://timesheetpractice-f0000.firebaseio.com",
        projectId: "timesheetpractice-f0000",
        storageBucket: "timesheetpractice-f0000.appspot.com",
        messagingSenderId: "45646317065",
        appId: "1:45646317065:web:4582f8d6f9ebe71e"
    };

firebase.initializeApp(firebaseConfig);

let database = firebase.database();


$("#add-employee-btn").on("click", function (event) {
    event.preventDefault();

    let empName = $('#enter-name').val().trim();
    let empRole = $('#enter-job').val().trim();
    let startDate = moment($('#start-date').val().trim(), "MM/DD/YYYY").format("X");
    let monthRate = $('#rate-enter').val().trim();

    let newEmp = {
        name: empName,
        job: empRole,
        start: startDate,
        rate: monthRate
    };

    // Upload new employee data 
    database.ref().push(newEmp);

    console.log(newEmp.name);
    console.log(newEmp.role);
    console.log(newEmp.start);
    console.log(newEmp.rate);

    alert("You got it added, kid!");

    $('#enter-name').val("");
    $('#enter-job').val("");
    $('#start-date').val("");
    $('#rate-enter').val("");

});

database.ref().on('child_added', function(childSnapshot) {
    console.log(childSnapshot.val());

    let empName = childSnapshot.val().name;
    let empRole = childSnapshot.val().job;
    let startDate = childSnapshot.val().start;
    let monthRate = childSnapshot.val().rate;

    console.log(empName);
    console.log(empRole);
    console.log(startDate);
    console.log(monthRate);

    


})




