import pandas as pd
import plotly.express as px

# Load the dataset
csv_file = "data/PDOD_specific_cleaned.csv"  # Ensure this path is correct
pdod_df = pd.read_csv(csv_file)

# Exclude US totals
df = pdod_df[pdod_df['jurisdiction_occurrence'] != 'United States']

# Aggregate overdose deaths per year, jurisdiction, and drug type
annual_deaths = df.groupby(['death_year', 'jurisdiction_occurrence', 'drug_involved'])['drug_overdose_deaths'].sum().reset_index()

# Generate the interactive Plotly figure
fig = px.bar(
    annual_deaths,
    x="death_year",
    y="drug_overdose_deaths",
    color="jurisdiction_occurrence",
    labels={"death_year": "Year", "drug_overdose_deaths": "Overdose Deaths"},
    barmode="group",
    hover_data={"drug_overdose_deaths": True, "jurisdiction_occurrence": True}
)

# Save the chart as an HTML file with the new name
fig.write_html("Overdose_by_Year_Jurisdiction_and_Type.html")

print("✅ Overdose by Year, Jurisdiction, and Type saved successfully as 'Overdose_by_Year_Jurisdiction_and_Type.html'")
