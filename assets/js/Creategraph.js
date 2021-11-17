import Chart from 'chart.js/auto'

export const Creategraph = {

    createGraph: function (){
        let delElement = 0;
        for (let i = 0; i < localStorage.length; i++){
            if (localStorage.getItem(i) === "del"){
                delElement++;
            }
        }
        
        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red'],
                datasets: [{
                    label: 'number of deleted elements',
                    data: [delElement],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}