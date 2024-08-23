document.getElementById('job-role').addEventListener('change', filterJobs);
document.getElementById('job-type').addEventListener('change', filterJobs);
document.getElementById('job-location').addEventListener('change', filterJobs);

function filterJobs() {
    const role = document.getElementById('job-role').value;
    const type = document.getElementById('job-type').value;
    const location = document.getElementById('job-location').value;

    // Example logic to filter jobs (you would replace this with your own logic)
    if (role === 'Engineer' && type === 'Full Time' && location === 'All Locations') {
        // Show or hide job listings based on filters
    }
}
