document.addEventListener("DOMContentLoaded", function () {
    // Debugging check: Is rawData defined?
    if (typeof rawData === "undefined") {
        console.error("❌ Error: rawData is not loaded. Check if data.js is correctly linked.");
        return;
    }

    console.log("✅ Data successfully loaded:", rawData);

    // Ensure required columns exist
    const requiredColumns = ['drug_involved', 'drug_overdose_deaths', 'death_year'];
    const hasRequiredColumns = requiredColumns.every(col => rawData[0].hasOwnProperty(col));

    if (hasRequiredColumns) {
        // Define the years to filter
        const years = [2019, 2020, 2021, 2022, 2023, 2024];

        // Populate the year dropdown
        const yearFilter = document.getElementById('year-filter');
        years.forEach(year => {
            let option = document.createElement('option');
            option.value = year;
            option.textContent = year;
            yearFilter.appendChild(option);
        });

        // Initialize cumulative data
        let cumulativeData = {};

        // Create a function to generate a donut chart for the selected year
        function generateYearlyChart(year) {
            let filteredData = rawData.filter(entry => entry.death_year === parseInt(year));

            let drugSums = {};
            filteredData.forEach(entry => {
                if (!drugSums[entry.drug_involved]) {
                    drugSums[entry.drug_involved] = 0;
                }
                drugSums[entry.drug_involved] += entry.drug_overdose_deaths;

                // Add to cumulative data
                if (!cumulativeData[entry.drug_involved]) {
                    cumulativeData[entry.drug_involved] = 0;
                }
                cumulativeData[entry.drug_involved] += entry.drug_overdose_deaths;
            });

            let drugInvolved = Object.keys(drugSums);
            let overdoseDeaths = Object.values(drugSums);

            // Create the donut chart for the year
            let data = [{
                values: overdoseDeaths,
                labels: drugInvolved,
                type: 'pie',
                hole: 0.4,
                textinfo: 'label+percent',
                textposition: 'inside'
            }];

            let layout = {
                title: `Drug Overdose Deaths by Drug Involved (${year})`,
                annotations: [
                    {
                        font: {
                            size: 14,
                            color: 'black'
                        },
                        showarrow: false,
                        text: `Total Deaths: ${overdoseDeaths.reduce((a, b) => a + b).toLocaleString()}`,
                        x: 1.1,
                        y: -0.3,
                        align: 'right'
                    }
                ]
            };

            Plotly.newPlot('yearly-chart', data, layout);
        }

        // Generate the cumulative donut chart
        function generateCumulativeChart() {
            let cumulativeDrugInvolved = Object.keys(cumulativeData);
            let cumulativeOverdoseDeaths = Object.values(cumulativeData);

            let cumulativeDataPlot = [{
                values: cumulativeOverdoseDeaths,
                labels: cumulativeDrugInvolved,
                type: 'pie',
                hole: 0.4,
                textinfo: 'label+percent',
                textposition: 'inside'
            }];

            let cumulativeLayout = {
                title: "Cumulative Drug Overdose Deaths by Drug Involved (2019-2024)",
                annotations: [
                    {
                        font: {
                            size: 14,
                            color: 'black'
                        },
                        showarrow: false,
                        text: `Total Deaths: ${cumulativeOverdoseDeaths.reduce((a, b) => a + b).toLocaleString()}`,
                        x: 1.1,
                        y: -0.3,
                        align: 'right'
                    }
                ]
            };

            Plotly.newPlot('cumulative-chart', cumulativeDataPlot, cumulativeLayout);
        }

        // Initialize charts
        generateYearlyChart(years[0]);
        generateCumulativeChart();

        // Update the yearly chart based on dropdown selection
        yearFilter.addEventListener('change', function () {
            generateYearlyChart(this.value);
        });

    } else {
        console.error("Error: Required columns ('drug_involved', 'drug_overdose_deaths', 'death_year') not found in the data.");
    }
});
