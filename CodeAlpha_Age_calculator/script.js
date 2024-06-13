document.getElementById('ageForm').addEventListener('submit', function(e) {
    
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if(m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age -- ;
    }
    document.getElementById('result').innerText = `You are ${age} year old,`;
    document.querySelector('.calculator').classList.add('flipped');


});

document.getElementById('backBtn').addEventListener('click', function() {
    document.querySelector('.calculator').classList.remove('flipped');
});


   