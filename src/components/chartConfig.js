export const data = {
    // labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    
    datasets: [
        {
             backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
            data: [659, 59, 80, 81],
            borderWidth: 0.2,

        }
    ]
}

export const options={
      legend: {
        display: false // Hide the legend
    },
    
     tooltips: {
        enabled: false // Hide tooltips
    },
    plugins: {
        labels: {
            render: 'label',
            fontColor: '#fff',
            position: 'outside',
            arc: true,
            textMargin: 8
        }
    },
}


