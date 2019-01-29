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
    // change airtable record into data points
    function addRecordToGroupedData(record, groupedData) {
        let start = record.fields['Start Date'];
        if (start === undefined) return;
        let label = record.fields['Event'];
        let category = record.fields['Category'];
        let end = record.fields['End Date'];
        // group
        let datapoint = end ?
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
        if (groupedData[category] !== undefined) groupedData[category].push(datapoint); else groupedData[category] = [datapoint];
    }

    // get data from airtable, transform, render
    $.get({
        url: "https://api.airtable.com/v0/YOUR_ENDPOINT",
        headers: {"Authorization" : "Bearer YOUR_API_KEY"},
        success: function (result) {
            let groupedData = {};
            result.records.forEach(record => addRecordToGroupedData(record, groupedData));
            let chartData = Object.entries(groupedData).map(keyDataTuple => {
                return {
                    "label": keyDataTuple[0],
                    "data": keyDataTuple[1]
                }
            });
            console.log(chartData);

            // render chart
            const element = document.getElementById('chart');
            new TimelineChart(element, chartData, {
                enableLiveTimer: true,
                tip: datumToTip
            });
        },
        error: function (error) {
            const element = document.getElementById('chart');
            element.innerText = "Failed to load data. See console for errors.";
            console.error(error);
        }
    });

});
