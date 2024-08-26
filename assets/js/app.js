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



document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category');
    const tbody = document.querySelector('tbody');

    categories.forEach(category => {
        category.addEventListener('click', function() {
            // Remove active class from all categories
            categories.forEach(cat => cat.classList.remove('active'));
            // Add active class to the clicked category
            this.classList.add('active');

            // Update the table based on the selected category
            const categoryType = this.dataset.category;
            updateTable(categoryType);
        });
    });

    function updateTable(category) {
        let data = [];
        
        if (category === 'management') {
            data = [
                { position: "Chairman", count: 1 },
                { position: "Manager", count: 1 },
                { position: "Finance Manager", count: 1 },
                { position: "ADMIN./HR Manager", count: 1 }
            ];
        } else if (category === 'project-management') {
            data = [
                { position: "Project Manager", count: 1 },
                { position: "Technical Lead", count: 1 }
            ];
        } else if (category === 'administration') {
            data = [
                { position: "Admin Assistant", count: 2 },
                { position: "Receptionist", count: 1 }
            ];
        } else if (category === 'work-site') {
            data = [
                { position: "Site Engineer", count: 3 },
                { position: "Laborer", count: 10 }
            ];
        }

        tbody.innerHTML = data.map(item => `
            <tr>
                <td>${item.position}</td>
                <td>${item.count}</td>
            </tr>
        `).join('');
    }

    // Initialize table with management data
    updateTable('management');
});
