document.addEventListener("DOMContentLoaded", function () {
    // Debugging check: Is rawData defined?
    if (typeof rawData === "undefined") {
        console.error("❌ Error: rawData is not loaded. Check if data.js is correctly linked.");
        return;
    }

    console.log("✅ Data successfully loaded:", rawData);

    try {
        // Filter out "United States" totals
        let filteredData = rawData.filter(entry => entry.jurisdiction_occurrence !== "United States");

        // Aggregate deaths per year, jurisdiction, and drug type
        let annualDeaths = {};
        filteredData.forEach(entry => {
            let key = `${entry.death_year}-${entry.jurisdiction_occurrence}-${entry.drug_involved}`;
            if (!annualDeaths[key]) {
                annualDeaths[key] = {
                    year: entry.death_year,
                    jurisdiction: entry.jurisdiction_occurrence,
                    drug: entry.drug_involved,
                    deaths: 0
                };
            }
            annualDeaths[key].deaths += entry.drug_overdose_deaths;
        });

        // Convert object to array
        let aggregatedData = Object.values(annualDeaths);

        // Get unique drug types
        let drugTypes = [...new Set(aggregatedData.map(item => item.drug))];

        // Populate dropdown
        const drugFilter = document.getElementById("drug-filter");
        drugTypes.forEach(drug => {
            let option = document.createElement("option");
            option.value = drug;
            option.textContent = drug;
            drugFilter.appendChild(option);
        });

        // Chart setup
        const ctx = document.getElementById("overdose-chart").getContext("2d");
        let chart;

        function updateChart(selectedDrug) {
            let filtered = aggregatedData.filter(entry => entry.drug === selectedDrug);

            // Group by year
            let grouped = {};
            filtered.forEach(entry => {
                if (!grouped[entry.year]) grouped[entry.year] = {};
                grouped[entry.year][entry.jurisdiction] = entry.deaths;
            });

            let years = Object.keys(grouped).sort();
            let jurisdictions = [...new Set(filtered.map(item => item.jurisdiction))];

            let datasets = jurisdictions.map(jurisdiction => ({
                label: jurisdiction,
                data: years.map(year => grouped[year][jurisdiction] || 0),
                backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.7)`,
            }));

            if (chart) chart.destroy();
            chart = new Chart(ctx, {
                type: "bar",
                data: {
                    labels: years,
                    datasets: datasets
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { title: { display: true, text: "Year" } },
                        y: { title: { display: true, text: "Overdose Deaths" } }
                    }
                }
            });
        }

        // Initialize chart with first drug
        updateChart(drugTypes[0]);

        // Update chart on dropdown change
        drugFilter.addEventListener("change", function () {
            updateChart(this.value);
        });

    } catch (error) {
        console.error("❌ Error processing data:", error);
    }
});
