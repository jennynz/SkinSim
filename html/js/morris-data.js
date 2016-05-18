$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2016 W1',
            you: 2666,
            group: null,
            fourthyear: 2647
        }, {
            period: '2016 W2',
            you: 2778,
            group: 2294,
            fourthyear: 2441
        }, {
            period: '2016 W3',
            you: 4912,
            group: 1969,
            fourthyear: 2501
        }, {
            period: '2016 W4',
            you: 3767,
            group: 3597,
            fourthyear: 5689
        }, {
            period: '2016 W5',
            you: 6810,
            group: 1914,
            fourthyear: 2293
        }, {
            period: '2016 W6',
            you: 5670,
            group: 4293,
            fourthyear: 1881
        }, {
            period: '2016 W7',
            you: 4820,
            group: 3795,
            fourthyear: 1588
        }, {
            period: '2016 W8',
            you: 15073,
            group: 5967,
            fourthyear: 5175
        }, {
            period: '2016 W9',
            you: 10687,
            group: 4460,
            fourthyear: 2028
        }, {
            period: '2016 W10',
            you: 8432,
            group: 5713,
            fourthyear: 1791
        }],
        xkey: 'period',
        ykeys: ['you', 'group', 'fourthyear'],
        labels: ['You', 'Lab Group', 'UoA MBChB'],
				xLabels: "week",
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });
		
		Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'AS1001 Skin cancer surgery',
            a: 80,
            b: 92
        }, {
            y: 'AS1002 Dermoscopy essentials',
            a: 75,
            b: 85
        }, {
            y: '1003 Suture techniques',
            a: 42,
            b: 75
        }, {
            y: '1004 Direct closure',
            a: 71,
            b: 83
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Formative Grade', 'Summative Grade'],
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

});
