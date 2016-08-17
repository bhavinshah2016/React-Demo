
FusionCharts.ready(function () {
    var myDataSource = {
        chart: {
            caption: "Technology Used",
            startingangle: "120",
            showlabels: "0",
            showlegend: "1",
            enablemultislicing: "0",
            slicingdistance: "15",
            showpercentvalues: "1",
            showpercentintooltip: "0",
            plottooltext: "Technology Used : $label Total visit : $datavalue",
            theme: "ocean"
        },
        data: [
            {
                label: "JAVA",
                value: "10"
            },
            {
                label: ".Net",
                value: "50"
            },
            {
                label: "Angular Js",
                value: "10"
            },
            {
                label: "Jquery",
                value: "10"
            },
            {
                label: "React/Redux",
                value: "5"
            },
            {
                label: "Cloud computing",
                value: "10"
            },
            {
                label: "Oracel",
                value: "5"
            }
        ]
    }
    var props_pie_chart = {
        id: "pie_chart",
        renderAt: "pie_chart_container",
        type: "pie3d",
        width:450,
        height: 300,
        dataFormat: "json",
        dataSource: myDataSource
    };
    React.render(
        <react_fc.FusionCharts {...props_pie_chart} />,
        document.getElementById('TechnologyGraph')
    );
})