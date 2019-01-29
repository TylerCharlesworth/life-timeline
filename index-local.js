$( document ).ready(function() {

    function dateToString(date) {
        return date.toLocaleString("en-us", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        })
    }
    function datumToTip(datum) {
        return datum.label + "<br>" + (
            datum.at === undefined ?
                dateToString(datum.from) + " - " + dateToString(datum.to) :
                dateToString(datum.at)
        );
    }
    function fieldDateToDate(fieldDate) {
        let date = new Date(fieldDate);
        date.setHours(date.getHours() + date.getTimezoneOffset()/60);
        return date;
    }

    function createGroupedData(category, recordsArray) {
        return {
            "label": category,
            "data": recordsArray.map(recordArray => {
                let label = recordArray[0];
                let start = recordArray[1];
                let end = recordArray[2];
                return end ?
                    {
                        type: TimelineChart.TYPE.INTERVAL,
                        label: label,
                        from: fieldDateToDate(start),
                        to: fieldDateToDate(end),
                        customClass: "data-" + category.toLowerCase().replace(" ", "-")
                    } : {
                        type: TimelineChart.TYPE.POINT,
                        label: label,
                        at: fieldDateToDate(start),
                        customClass: "data-" + category.toLowerCase().replace(" ", "-")
                    };
            })
        }
    }

    // render chart
    const chartData = [
        createGroupedData("Common Lives", [
            ["The average American lifespan is 79 years.", "2065-10-02"],
            ["The average American retirement age is 62.", "2048-10-02"],
            ["The average graduate student age is 33.", "2019-10-02"]
        ]),
        createGroupedData("Inspired Lives", [
            ["Kevin Systrom co-founded instagram at age 24.", "2010-10-02"],
            ["Martha Stewart published her first book at age 41.", "2027-10-02"]
        ]),
        createGroupedData("Health", [
            ["Born", "1986-10-02"],
            ["Broke arm", "1996-07-15"]
        ]),
        createGroupedData("Professional", [
            ["Intern", "2012-07-02"],
            ["Job at Company A", "2013-08-02", "2014-12-31"],
            ["Job at Company B", "2015-01-15", "2019-01-28"]
        ]),
        createGroupedData("Education", [
            ["Elementary School", "1994-09-15", "2005-07-29"],
            ["High School", "2005-09-01", "2009-06-28"],
            ["University", "2009-10-01", "2013-07-15"]
        ]),
        createGroupedData("Relationships", [
            ["Relationship A", "2012-11-06", "2013-12-22"],
            ["Relationship B", "2015-10-02", "2016-05-01"],
            ["Relationship C", "2016-05-02", "2019-01-28"]
        ]),
        createGroupedData("Adventures", [
            ["Study Abroad", "2011-02-02", "2011-05-10"],
            ["Europe Trip.", "2014-10-22"],
            ["South America Trip", "2018-03-01"]
        ])
    ];
    const element = document.getElementById('chart');
    new TimelineChart(element, chartData, {
        enableLiveTimer: true,
        tip: datumToTip
    }).onVizChange(e => console.log(e));

});
