const rawData = [
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3420.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3434.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3443.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3440.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3439.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3461.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3464.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3539.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3553.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3620.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3653.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3719.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3763.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3815.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3833.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3926.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4030.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4039.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4112.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4062.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4105.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4091.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4093.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4117.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4194.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4201.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4283.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4288.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4278.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4335.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4342.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4469.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4570.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4665.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4738.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4775.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4766.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4805.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4819.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4845.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4840.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4835.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4842.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4805.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4781.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4830.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4857.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4871.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4898.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4900.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4847.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4824.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4848.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4833.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4800.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4767.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4739.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4586.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4498.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4426.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4339.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4236.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4181.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4051.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3883.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3766.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4328.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4389.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4381.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4331.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4277.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4252.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4296.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4311.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4333.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4347.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4411.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4512.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4656.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4744.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4879.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5076.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5362.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5512.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5615.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5737.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5824.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5895.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5986.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6013.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6205.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6258.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6415.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6455.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6375.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6471.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6569.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6677.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6833.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6979.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7037.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7148.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7155.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7214.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7170.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7194.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7238.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7210.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7243.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7236.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7247.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7255.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7345.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7398.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7407.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7417.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7427.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7536.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7574.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7634.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7588.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7600.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7496.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7433.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7289.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7192.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7042.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6930.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6752.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6516.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6251.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5928.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6069.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6079.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6072.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6081.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6037.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6037.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6071.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6148.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6188.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6262.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6420.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6596.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6721.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6869.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7025.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7278.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7702.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7978.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8262.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8477.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8749.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8912.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9055.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9146.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9386.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9536.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9722.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9786.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9768.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9791.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9843.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9839.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9825.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9833.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9826.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9893.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9846.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9842.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9798.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9673.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9537.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9489.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9406.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9446.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9365.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9417.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9470.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9535.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9570.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9550.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9587.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9643.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9687.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9686.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9710.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9565.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9486.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9420.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9273.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9080.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8798.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8611.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8263.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7967.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7637.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7325.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5747.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5773.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5933.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6046.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6090.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6219.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6342.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6468.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6684.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6896.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7068.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7286.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7469.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7741.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8161.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8772.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9802.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10433.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11021.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11605.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12060.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12431.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12860.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13273.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13902.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 14363.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 14906.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 15380.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 15335.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 15596.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 15812.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 16068.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 16397.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 16812.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17034.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17390.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17368.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17575.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17634.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17502.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17490.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17476.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17630.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17728.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17780.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17854.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17977.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18018.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18179.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18202.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18173.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18196.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18317.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18292.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18138.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 18064.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17912.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17631.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17342.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 17046.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 16693.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 16260.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 15641.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 15032.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 14318.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13646.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7207.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7187.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7240.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7297.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7450.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7479.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7506.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7554.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7640.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7747.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7974.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8069.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8230.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8483.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8594.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8973.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9655.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10174.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10476.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10742.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11022.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11240.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11373.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11625.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11908.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11996.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12398.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12652.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12406.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12306.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12476.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12686.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12818.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12971.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13156.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13277.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13458.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13637.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13562.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13331.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13235.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13244.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13196.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13200.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13120.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13214.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13227.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13280.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13213.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13203.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13218.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13282.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13322.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13290.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13186.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 13084.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12992.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12716.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12400.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 12092.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11734.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 11376.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10954.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10547.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10083.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9647.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 626.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 652.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 638.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 642.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 647.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 650.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 687.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 715.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 760.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 822.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 876.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 901.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 965.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1002.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1097.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1217.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1381.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1550.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1686.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1841.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1950.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2033.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2126.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2264.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2425.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2604.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2848.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3027.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3168.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3277.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3427.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3544.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3692.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3829.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3981.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4106.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4204.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4361.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4405.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4465.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4525.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4580.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4628.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4677.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4735.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4882.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4917.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5028.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5055.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5039.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5073.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5133.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5157.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5206.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5225.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5253.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5230.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5150.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5154.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5052.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5015.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4947.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4840.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4712.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4570.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4395.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1007.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1001.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 998.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 987.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 985.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 959.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 955.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 985.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1004.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1016.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1035.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1056.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1074.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1121.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1165.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1257.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1356.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1436.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1503.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1526.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1532.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1563.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1579.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1613.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1655.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1687.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1752.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1792.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1819.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1856.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1891.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1972.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2024.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2050.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2080.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2111.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2138.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2158.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2156.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2149.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2115.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2123.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2121.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2105.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2125.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2145.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2187.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2200.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2213.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2205.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2237.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2225.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2221.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2194.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2167.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2135.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2097.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2070.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2022.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1966.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1914.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1886.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1794.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1741.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1683.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1629.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 215.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 231.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 230.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 234.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 256.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 277.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 296.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 373.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 406.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 435.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 476.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 537.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 577.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 620.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 668.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 715.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 745.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 777.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 786.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 829.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 844.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 880.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 925.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 957.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1017.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1060.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1112.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1178.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1212.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1259.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1313.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1357.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1401.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1430.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1415.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1415.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1378.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1375.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1349.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1334.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1356.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1377.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1411.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1430.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1453.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1469.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1520.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1568.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1648.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1672.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1693.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1695.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1711.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1738.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1708.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1672.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1646.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1653.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1626.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1597.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1544.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1440.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1480.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1551.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1635.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1726.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1793.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1924.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2028.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2117.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2246.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2394.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2562.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2724.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2919.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3156.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3416.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3781.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4154.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4531.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4947.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5192.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5497.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 5767.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6008.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6347.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6574.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 6856.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7123.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7315.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7525.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7655.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 7770.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8012.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8211.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8350.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8506.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8519.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8653.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8683.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8701.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8696.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8672.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8761.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8752.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8811.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8841.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8915.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9031.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9194.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9230.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9389.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9534.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9721.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9827.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10006.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10135.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10129.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10118.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 10069.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9980.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9874.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9762.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9575.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9333.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 9050.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 8850.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 325.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 347.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 345.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 345.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 360.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 358.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 377.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 389.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 406.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 420.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 557.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 640.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 688.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 754.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 808.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 849.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 880.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 928.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 976.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1040.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1084.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1180.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1241.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1320.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1405.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1497.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1608.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1721.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1846.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 1925.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2002.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2086.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2207.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2262.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2297.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2333.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2400.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2469.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2560.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2596.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2663.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 2811.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3048.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3214.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3298.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3460.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3637.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3787.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 3912.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4086.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4165.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4323.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4427.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4454.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4442.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4459.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4530.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4518.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4479.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4431.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Fentanyl",
        "drug_overdose_deaths": 4345.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 114.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 115.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 130.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 137.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 146.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 150.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 153.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 170.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 179.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 196.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 211.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 233.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 250.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 264.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 262.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 276.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 297.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 324.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 329.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 349.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 371.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 387.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 388.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 404.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 415.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 438.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 442.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 450.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 441.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 457.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 468.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 462.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 476.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 475.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 490.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 490.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 489.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 502.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 505.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 516.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 525.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 500.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 487.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 478.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 476.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 474.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 452.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 430.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 422.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 420.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 437.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 423.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 164.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 166.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 171.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 163.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 172.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 180.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 212.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 217.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 236.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 246.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 267.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 282.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 342.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 370.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 375.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 417.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 441.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 446.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 467.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 486.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 500.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 516.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 548.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 556.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 588.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 591.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 615.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 620.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 642.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 648.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 662.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 687.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 689.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 679.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 675.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 674.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 685.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 688.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 684.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 695.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 713.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 739.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 760.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 758.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 769.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 780.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 793.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 798.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 793.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 797.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 790.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 785.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 766.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 741.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 702.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 681.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 681.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 658.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 646.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 645.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 635.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 744.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 771.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 801.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 809.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 821.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 816.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 853.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 861.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 861.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 910.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 945.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1005.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1030.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1076.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1111.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1201.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1305.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1415.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1467.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1553.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1645.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1699.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1784.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1825.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1914.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2003.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2118.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2184.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2229.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2237.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2272.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2317.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2339.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2358.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2377.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2393.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2411.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2419.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2401.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2352.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2313.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2341.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2349.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2337.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2321.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2329.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2328.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2364.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2357.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2339.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2330.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2344.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2367.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2364.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2357.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2341.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2340.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2309.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2263.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2208.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2154.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2132.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2050.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1990.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1904.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1832.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2384.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2404.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2460.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2534.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2639.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2691.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2772.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2829.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2904.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2997.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3085.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3132.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3184.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3289.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3455.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3678.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3869.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4019.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4173.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4392.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4502.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4569.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4733.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4921.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5215.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5455.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5683.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5949.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6134.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6403.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6638.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6788.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7084.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7422.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7592.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7811.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7882.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8025.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8118.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8032.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8066.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8080.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8146.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8217.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8193.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8227.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8266.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8324.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8355.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8381.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8436.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8525.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8551.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8568.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8543.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8540.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8491.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8354.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8225.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8061.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7927.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7705.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7413.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7147.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6907.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6607.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1532.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1501.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1583.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1624.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1670.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1719.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1742.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1792.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1852.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1905.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1950.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1997.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2030.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2140.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2187.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2283.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2418.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2502.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2592.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2672.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2707.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2737.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2810.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2893.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2997.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3056.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3161.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3296.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3334.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3401.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3498.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3587.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3691.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3772.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3871.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3913.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3956.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4034.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4070.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4000.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3984.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3992.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3991.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3964.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3916.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3972.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3948.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4010.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4020.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4008.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3968.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4010.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4025.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4064.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4037.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4044.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4027.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3931.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3891.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3785.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3678.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3584.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3500.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3378.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3291.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3129.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1533.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1535.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1572.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1621.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1637.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1646.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1670.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1734.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1774.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1802.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1870.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1940.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2022.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2093.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2141.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2224.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2300.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2362.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2468.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2553.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2605.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2656.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2702.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2765.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2848.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2928.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3059.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3147.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3214.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3300.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3367.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3451.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3544.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3607.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3675.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3734.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3791.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3892.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3922.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3898.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3940.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4005.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4059.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4016.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4025.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4062.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4083.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4126.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4119.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4094.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4071.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4110.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4145.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4143.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4152.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4292.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4283.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4249.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4234.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4207.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4200.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4174.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4124.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4076.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3999.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3920.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 588.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 623.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 635.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 651.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 657.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 648.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 682.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 707.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 753.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 766.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 779.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 804.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 815.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 824.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 839.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 879.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 925.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 953.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 952.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 981.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 976.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1002.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1013.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1022.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1028.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1037.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1080.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1091.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1122.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1156.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1190.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1218.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1248.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1255.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1269.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1301.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1334.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1350.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1355.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1358.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1339.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1347.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1353.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1337.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1341.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1364.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1387.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1398.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1399.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1393.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1386.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1375.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1380.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1359.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1358.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1357.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1351.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1351.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1330.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1295.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1273.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1283.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1265.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1254.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1226.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1225.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 616.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 630.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 643.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 645.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 649.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 659.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 666.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 664.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 666.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 678.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 690.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 702.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 712.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 706.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 725.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 761.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 795.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 792.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 803.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 842.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 863.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 868.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 878.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 879.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 927.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 960.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 987.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 998.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1024.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1082.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1123.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1143.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1177.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1204.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1219.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1251.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1256.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1254.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1265.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1233.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1217.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1186.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1167.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1146.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1139.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1133.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1170.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1193.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1197.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1217.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1202.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1254.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1269.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1292.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1304.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1320.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1317.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1345.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1355.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1311.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1313.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1319.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1341.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1341.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1342.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1356.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3540.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3601.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3602.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3649.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3717.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3796.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3836.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3874.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3955.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4026.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4089.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4098.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4144.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4214.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4342.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4464.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4647.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 4846.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5105.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5476.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5656.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 5850.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6023.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6261.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6531.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6703.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 6929.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7104.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7266.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7419.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7525.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7532.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7660.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7786.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7872.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7925.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7928.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7966.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7937.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7940.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7911.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7926.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8001.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 7978.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8098.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8082.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8123.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8209.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8295.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8369.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8491.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8606.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8731.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8668.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8848.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8924.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8816.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8826.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8745.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8671.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8561.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8539.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8460.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8306.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8140.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 8169.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 844.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 873.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 885.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 887.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 877.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 909.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 925.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 933.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 960.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 988.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 986.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 978.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 974.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 974.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 991.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1022.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1080.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1104.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1112.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1143.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1153.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1161.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1190.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1229.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1291.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1336.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1400.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1475.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1543.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1605.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1686.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1770.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1836.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1920.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 1984.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2021.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2040.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2068.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2077.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2063.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2055.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2060.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2089.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2107.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2115.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2131.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2210.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2389.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2497.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2567.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2702.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2798.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2891.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 2984.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3080.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3145.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3255.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3354.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3410.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3377.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3419.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3483.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3481.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3487.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3456.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Methamphetamine",
        "drug_overdose_deaths": 3404.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1455.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1461.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1470.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1490.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1480.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1477.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1492.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1514.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1526.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1577.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1612.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1655.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1671.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1725.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1765.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1823.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1891.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1885.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1924.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1910.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1914.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1910.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1908.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1894.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1925.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1904.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1944.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1958.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1962.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2017.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2023.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2100.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2178.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2239.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2307.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2379.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2407.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2472.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2499.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2523.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2528.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2523.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2543.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2539.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2531.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2579.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2600.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2597.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2637.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2661.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2661.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2671.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2693.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2733.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2741.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2745.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2759.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2689.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2665.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2672.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2640.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2592.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2581.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2520.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2461.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2407.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2231.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2276.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2246.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2233.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2206.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2175.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2189.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2198.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2205.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2199.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2248.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2299.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2372.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2406.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2478.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2526.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2623.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2707.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2737.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2738.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2796.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2794.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2788.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2764.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2832.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2830.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2894.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2948.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2943.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2983.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3048.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3181.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3281.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3419.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3512.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3602.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3639.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3723.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3723.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3775.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3804.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3852.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3909.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3926.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3953.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4009.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4088.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4197.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4285.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4337.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4424.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4542.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4643.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4672.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4681.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4754.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4710.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4692.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4652.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4605.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4564.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4530.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4414.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4276.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4111.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3968.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2931.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2936.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2922.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2887.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2838.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2828.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2799.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2835.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2855.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2902.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2978.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3070.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3109.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3146.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3220.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3314.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3414.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3450.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3495.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3486.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3520.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3525.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3494.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3449.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3480.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3528.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3548.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3566.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3593.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3653.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3746.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3811.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3877.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3976.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4029.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4147.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4209.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4241.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4286.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4279.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4292.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4316.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4309.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4364.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4355.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4364.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4464.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4539.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4586.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4627.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4688.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4763.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4841.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4889.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4951.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4957.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4958.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5010.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4986.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4924.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4843.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4784.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4657.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4496.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4328.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4214.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3125.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3126.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3131.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3132.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3147.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3186.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3201.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3255.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3348.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3441.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3504.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3545.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3610.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3708.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3874.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4023.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4293.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4407.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4537.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4636.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4711.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4699.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4723.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4783.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4915.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4950.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5043.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5233.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5228.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5351.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5459.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5606.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5723.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5891.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6062.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6233.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6301.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6433.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6495.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6442.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6461.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6448.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6490.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6500.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6570.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6636.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6636.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6667.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6734.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6753.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6744.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6781.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6879.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6991.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 7016.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 7090.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 7042.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6995.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6994.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6933.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6815.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6689.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6512.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6312.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6076.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5800.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3364.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3331.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3293.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3308.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3354.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3366.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3387.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3426.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3467.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3498.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3571.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3594.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3652.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3747.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3791.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 3925.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4037.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4129.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4098.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4060.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4036.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4035.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4018.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4025.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4080.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4085.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4179.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4225.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4247.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4278.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4460.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4616.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4745.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 4878.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5016.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5199.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5288.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5376.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5421.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5399.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5416.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5480.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5488.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5553.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5632.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5694.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5796.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5893.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6010.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6070.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6152.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6235.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6273.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6337.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6410.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6446.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6425.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6387.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6288.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6170.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 6015.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5907.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5761.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5618.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5465.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 5278.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1000.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 971.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 984.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 983.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 973.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 960.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 989.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 977.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 980.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1006.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1033.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1040.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1084.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1139.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1157.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1232.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1294.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1336.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1375.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1438.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1472.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1475.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1474.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1515.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1542.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1559.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1641.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1656.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1648.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1651.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1648.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1649.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1702.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1713.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1760.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1769.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1782.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1811.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1783.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1796.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1834.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1861.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1905.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1956.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1973.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2027.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2024.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2076.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2076.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2087.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2121.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2133.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2172.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2212.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2217.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2222.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2243.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2250.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2264.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2236.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2246.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2266.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2247.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2242.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2212.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2172.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 185.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 196.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 198.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 210.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 225.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 229.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 234.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 245.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 252.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 285.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 309.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 311.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 317.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 324.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 328.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 325.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 332.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 360.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 377.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 393.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 413.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 420.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 419.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 428.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 444.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 469.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 494.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 496.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 489.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 481.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 487.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 480.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 473.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 482.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 492.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 508.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 499.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 486.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 470.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 489.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 488.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 497.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 492.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 497.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 499.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 510.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 507.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 500.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 506.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 514.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 528.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 510.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 514.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 512.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 505.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 224.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 216.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 210.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 210.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 205.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 208.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 217.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 229.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 256.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 285.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 328.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 340.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 355.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 357.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 355.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 368.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 357.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 354.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 357.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 376.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 393.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 407.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 415.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 422.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 427.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 443.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 425.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 416.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 388.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 388.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 386.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 379.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 386.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 380.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 377.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 380.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 390.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 387.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 406.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 404.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 410.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 419.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 424.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 430.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 437.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 438.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 437.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 441.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 438.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 451.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 893.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 890.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 907.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 923.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 949.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 955.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 995.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1011.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1033.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1053.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1095.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1135.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1177.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1205.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1251.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1328.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1408.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1486.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1541.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1622.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1644.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1668.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1673.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1674.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1713.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1745.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1767.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1779.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1745.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1737.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1739.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1729.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1754.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1809.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1844.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1870.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1866.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1896.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1899.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1883.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1908.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1910.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1908.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1903.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1924.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1917.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1906.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1936.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1974.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 1981.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2007.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2020.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2055.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2071.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2105.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2160.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2167.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2170.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2199.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2195.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2191.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2174.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2158.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2138.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2105.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 2098.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 206.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 199.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 206.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 204.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 201.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 203.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 211.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 230.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 240.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 239.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 261.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 290.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 297.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 283.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 293.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 294.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 297.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 302.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 300.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 311.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 302.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 288.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 340.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 351.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 353.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 370.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 375.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 386.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 400.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 427.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 434.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 452.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 477.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 508.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 550.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 577.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 593.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 614.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 650.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 671.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 694.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 736.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 760.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 795.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 815.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 813.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 828.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 835.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 841.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 859.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 859.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 866.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Cocaine",
        "drug_overdose_deaths": 861.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 998.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1009.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1003.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 975.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 960.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 936.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 920.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 918.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 911.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 894.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 875.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 861.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 833.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 808.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 766.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 746.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 722.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 696.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 655.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 617.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 601.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 570.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 564.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 526.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 519.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 497.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 487.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 465.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 437.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 409.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 395.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 379.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 362.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 319.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 290.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 268.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 265.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 257.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 251.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 240.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 234.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 231.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 219.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 210.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 182.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 184.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 171.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 155.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 147.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 149.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 142.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 142.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 137.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2542.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2578.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2560.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2500.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2440.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2388.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2386.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2350.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2299.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2247.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2260.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2235.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2263.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2273.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2260.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2282.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2339.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2307.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2279.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2247.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2239.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2206.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2136.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2076.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2054.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1988.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1960.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1889.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1767.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1735.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1689.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1644.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1606.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1591.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1570.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1544.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1505.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1484.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1426.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1402.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1384.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1366.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1353.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1348.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1333.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1294.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1282.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1277.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1221.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1179.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1166.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1151.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1135.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1121.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1087.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1056.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1024.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1015.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 964.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 943.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 934.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 909.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 876.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 842.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 821.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 780.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2253.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2214.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2188.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2142.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2118.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2063.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2037.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1972.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1951.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1932.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1946.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1945.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1928.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1916.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1894.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1919.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1964.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1969.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1953.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1940.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1941.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1908.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1837.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1777.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1759.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1690.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1638.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1558.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1450.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1376.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1323.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1278.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1232.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1186.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1142.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1103.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1046.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1031.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 997.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 927.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 889.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 872.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 843.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 814.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 765.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 741.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 714.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 686.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 654.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 632.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 614.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 610.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 591.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 562.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 535.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 505.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 490.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 472.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 457.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 436.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 418.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 371.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 374.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 363.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2534.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2547.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2582.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2626.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2606.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2643.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2638.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2642.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2617.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2636.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2646.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2620.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2629.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2627.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2639.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2665.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2788.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2808.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2830.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2821.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2786.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2711.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2633.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2592.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2558.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2477.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2388.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2311.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2119.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1986.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1884.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1769.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1691.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1657.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1596.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1526.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1438.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1373.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1275.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1153.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1071.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1019.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 952.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 912.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 861.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 796.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 741.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 707.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 669.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 632.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 598.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 562.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 545.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 524.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 507.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 474.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 456.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 436.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 420.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 393.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 369.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 354.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 335.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 311.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3269.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3213.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3162.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3151.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3140.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3099.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 3027.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2984.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2938.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2856.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2870.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2831.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2778.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2778.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2744.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2770.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2838.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2863.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2839.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2778.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2698.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2621.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2543.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2482.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2394.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2291.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2257.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 2149.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1948.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1837.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1799.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1767.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1721.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1688.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1616.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1547.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1554.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1524.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1435.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1393.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1345.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1306.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1221.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1142.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1122.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1088.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1074.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1056.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 983.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 977.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 959.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 930.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 922.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 927.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 905.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 900.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 891.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 877.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 858.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 839.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 827.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 811.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 788.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 780.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 756.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 711.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1088.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1090.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1110.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1125.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1147.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1149.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1168.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1174.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1172.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1206.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1236.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1256.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1289.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1312.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1319.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1340.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1357.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1381.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1403.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1410.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1415.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1389.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1366.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1365.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1333.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1323.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1341.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1326.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1303.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1262.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1234.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1226.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1209.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1189.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1167.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1137.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1104.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1074.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1013.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 971.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 931.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 904.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 866.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 808.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 773.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 756.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 735.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 723.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 718.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 714.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 698.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 700.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 673.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 660.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 630.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 625.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 617.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 596.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 572.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 548.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 542.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 524.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 500.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 463.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 457.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 425.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 412.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 396.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 373.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 369.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 339.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 330.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 332.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 315.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 306.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 310.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 315.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 314.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 286.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 277.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 265.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 258.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 263.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 265.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 259.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 252.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 247.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 239.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 228.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 215.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 201.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 186.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 178.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 166.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 157.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 151.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 132.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 114.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 108.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 104.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 105.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 107.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 109.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 105.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 96.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 89.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 75.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 75.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 72.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 63.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 60.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 52.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 45.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 37.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 38.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 40.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 37.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 38.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 449.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 439.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 417.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 408.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 414.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 420.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 412.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 419.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 419.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 411.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 406.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 407.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 416.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 430.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 433.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 434.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 439.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 434.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 439.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 438.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 442.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 444.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 438.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 436.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 430.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 416.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 418.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 418.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 415.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 403.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 386.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 337.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 298.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 276.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 261.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 203.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 198.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 185.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 170.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 149.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 145.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 138.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 134.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 132.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 108.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 99.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 100.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 106.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 100.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 92.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 91.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1336.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1372.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1379.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1393.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1434.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1450.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1453.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1468.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1482.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1475.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1468.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1435.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1423.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1410.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1414.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1428.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1416.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1423.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1429.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1438.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1439.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1440.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1442.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1448.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1464.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1447.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1430.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1399.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1371.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1332.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1286.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1223.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1197.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1171.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1119.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1071.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1017.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 1009.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 966.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 936.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 890.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 845.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 809.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 779.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 747.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 710.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 687.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 672.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 642.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 609.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 587.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 578.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 570.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 567.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 556.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 548.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 511.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 470.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 457.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 427.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 401.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 385.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 364.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 342.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 581.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 581.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 584.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 586.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 573.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 573.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 579.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 578.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 597.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 607.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 606.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 598.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 592.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 583.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 596.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 586.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 618.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 628.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 648.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 663.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 653.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 653.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 672.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 681.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 694.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 710.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 707.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 743.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 748.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 739.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 726.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 729.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 737.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 732.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 707.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 693.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 669.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 648.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 634.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 590.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 550.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 518.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 443.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 410.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 379.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 360.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 339.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 318.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 300.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 258.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 236.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 207.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 166.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 155.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 138.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 106.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 95.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 89.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Heroin",
        "drug_overdose_deaths": 82.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 297.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 317.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 317.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 315.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 317.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 316.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 318.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 328.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 326.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 325.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 320.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 314.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 313.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 306.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 304.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 314.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 288.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 279.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 277.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 313.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 314.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 314.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 318.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 321.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 319.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 319.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 315.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 309.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 302.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 288.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 286.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 279.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 285.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 271.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 272.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 281.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 271.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 266.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 276.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 271.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 265.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 259.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 246.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 247.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 233.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 224.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 210.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 211.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 209.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 208.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 515.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 513.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 496.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 487.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 477.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 472.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 475.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 468.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 470.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 473.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 481.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 477.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 510.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 510.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 523.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 526.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 536.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 530.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 530.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 540.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 547.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 549.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 547.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 560.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 550.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 556.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 567.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 575.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 572.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 592.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 587.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 590.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 585.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 578.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 566.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 559.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 561.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 557.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 543.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 537.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 526.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 518.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 526.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 512.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 512.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 514.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 517.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 511.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 492.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 486.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 499.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 506.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 502.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 482.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 488.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 470.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 458.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 449.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 437.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 439.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 429.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 415.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 390.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 371.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 346.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 619.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 619.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 609.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 616.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 609.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 593.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 576.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 576.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 570.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 573.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 573.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 566.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 566.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 555.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 568.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 551.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 576.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 589.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 617.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 624.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 628.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 622.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 636.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 634.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 638.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 648.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 663.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 675.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 655.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 656.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 641.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 634.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 631.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 624.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 608.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 611.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 593.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 581.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 549.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 528.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 512.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 480.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 462.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 455.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 459.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 457.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 453.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 452.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 456.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 449.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 451.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 450.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 456.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 452.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 446.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 432.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 425.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 416.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 411.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1396.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1399.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1395.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1367.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1352.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1344.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1342.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1323.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1306.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1327.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1311.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1328.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1353.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1348.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1356.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1400.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1445.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1454.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1469.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1480.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1478.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1473.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1479.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1471.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1463.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1496.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1494.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1501.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1487.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1504.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1483.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1521.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1546.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1543.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1545.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1541.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1539.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1531.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1536.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1508.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1475.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1443.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1451.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1403.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1385.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1383.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1369.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1368.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1346.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1322.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1314.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1311.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1317.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1314.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1309.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1320.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1300.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1292.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1284.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1270.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1274.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1240.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1186.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1149.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1098.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 1050.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 630.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 602.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 591.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 575.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 573.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 571.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 575.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 563.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 565.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 548.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 558.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 551.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 544.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 553.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 552.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 563.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 590.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 608.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 601.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 610.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 607.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 625.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 614.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 604.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 609.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 617.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 626.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 644.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 628.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 616.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 621.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 619.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 627.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 616.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 616.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 614.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 599.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 594.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 572.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 555.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 537.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 526.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 522.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 517.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 512.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 517.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 520.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 520.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 518.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 510.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 521.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 525.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 529.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 533.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 529.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 522.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 504.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 499.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 489.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 485.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 482.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 475.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 432.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 412.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 324.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 310.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 306.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 294.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 304.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 296.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 297.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 319.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 338.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 341.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 361.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 370.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 378.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 387.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 394.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 397.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 383.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 391.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 387.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 388.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 378.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 379.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 371.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 359.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 360.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 360.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 334.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 338.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 342.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 342.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 340.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 345.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 334.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 338.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 324.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 311.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 286.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 270.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 260.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 246.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 233.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 180.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 178.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 174.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 178.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 179.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 179.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 182.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 171.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 171.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 170.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 162.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 159.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 152.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 154.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 145.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 141.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 143.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 150.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 151.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 155.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 163.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 155.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 170.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 167.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 162.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 164.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 168.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 167.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 168.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 164.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 158.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 150.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 150.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 146.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 145.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 137.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 123.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 128.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 127.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 120.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 119.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 123.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 128.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 126.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 307.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 306.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 290.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 273.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 273.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 266.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 283.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 284.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 282.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 276.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 282.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 276.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 293.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 309.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 313.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 298.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 290.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 281.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 293.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 283.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 263.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 252.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 256.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 253.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 253.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 249.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 251.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 252.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 248.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 254.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 262.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 260.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 257.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 241.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 237.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 241.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 236.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 237.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 235.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 219.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 205.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 201.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 208.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 218.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 216.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 215.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 219.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 221.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 228.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 565.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 551.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 534.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 516.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 506.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 505.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 483.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 475.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 479.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 467.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 472.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 456.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 453.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 464.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 471.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 476.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 506.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 505.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 514.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 525.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 507.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 518.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 520.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 536.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 542.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 536.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 530.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 523.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 505.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 499.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 476.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 475.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 467.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 470.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 459.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 458.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 459.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 453.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 461.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 469.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 461.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 466.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 468.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 454.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 442.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 451.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 443.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 436.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 425.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 423.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 417.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 408.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 411.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 402.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 394.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 397.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 389.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 383.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 378.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 380.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 191.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 184.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 170.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 172.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 174.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 179.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 181.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 183.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 192.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 191.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 188.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 188.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 190.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 197.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 190.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 191.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 196.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 192.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 185.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 185.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 172.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 166.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 171.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 158.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 167.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 174.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 182.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 183.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 191.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 198.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 203.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 203.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Oxycodone",
        "drug_overdose_deaths": 196.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 26.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 39.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 46.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 56.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 71.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 88.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 101.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 107.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 121.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 132.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 147.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 157.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 166.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 178.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 205.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 235.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 265.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 288.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 322.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 351.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 371.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 395.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 417.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 418.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 426.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 436.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 450.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 479.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 485.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 489.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 489.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 496.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 492.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 508.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 530.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 556.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 569.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 581.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 559.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 554.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 564.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 571.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 585.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 600.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 628.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 641.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 655.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 670.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 698.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 726.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 783.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 803.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 823.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 853.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 37.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 40.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 41.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 49.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 53.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 58.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 62.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 67.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 71.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 80.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 97.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 105.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 108.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 130.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 141.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 157.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 183.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 219.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 271.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 318.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 371.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 410.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 472.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 525.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 580.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 633.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 697.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 740.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 795.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 842.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 862.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 882.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 904.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 939.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 933.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 956.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 964.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 982.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1014.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1038.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1035.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1028.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1035.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1080.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1130.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1173.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1229.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1269.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1312.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1332.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1365.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1386.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1433.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1467.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1476.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1451.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1405.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1350.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1285.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 115.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 157.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 178.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 184.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 212.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 239.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 258.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 273.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 322.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 334.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 370.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 389.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 415.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 464.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 507.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 544.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 568.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 607.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 663.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 724.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 786.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 879.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 960.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1013.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1068.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1125.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1167.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1213.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1248.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1280.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1283.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1271.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1299.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1299.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1284.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1302.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1295.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1276.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1253.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1220.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1231.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1208.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1206.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1222.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1235.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1216.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1233.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1232.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1215.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1234.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1279.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1315.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1320.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1379.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1457.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1509.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1561.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1619.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1662.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1687.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1746.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1738.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1715.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 44.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 47.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 49.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 52.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 54.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 53.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 57.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 62.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 83.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 89.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 97.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 102.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 116.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 129.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 144.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 188.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 197.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 206.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 216.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 218.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 237.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 260.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 317.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 353.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 397.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 476.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 524.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 569.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 618.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 671.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 724.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 766.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 797.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 850.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 868.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 889.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 904.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 918.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 937.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 966.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 980.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1000.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1006.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1010.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1002.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 981.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 996.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1021.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1032.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1054.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1084.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1099.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1109.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1113.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1103.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1094.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1115.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 43.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 48.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 54.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 68.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 92.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 107.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 118.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 145.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 151.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 183.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 188.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 227.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 219.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 228.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 236.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 228.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 241.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 247.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 246.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 270.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 369.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 398.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 431.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 458.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 492.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 509.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 547.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 557.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 580.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 607.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 628.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 647.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 654.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 665.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 665.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 675.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 674.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 695.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 697.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 755.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 780.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 810.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 837.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 864.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 892.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 934.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 992.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1035.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1077.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1103.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1141.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1141.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1142.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1119.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1118.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 1102.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 24.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 30.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 28.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 33.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 39.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 39.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 41.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 43.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 56.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 60.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 62.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 78.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 76.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 86.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 91.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 91.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 89.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 85.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 82.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 82.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 85.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 89.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 83.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 87.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 88.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 84.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 88.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 95.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 93.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 86.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 83.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 86.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 84.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 82.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 84.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 76.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 76.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 72.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 75.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 80.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 13.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 24.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 43.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 48.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 56.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 65.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 72.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 87.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 98.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 111.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 128.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 126.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 128.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 127.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 137.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 147.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 149.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 191.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 199.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 207.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 229.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 230.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 243.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 245.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 249.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 261.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 264.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 255.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 253.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 252.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 24.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 25.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 27.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 25.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 24.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 17.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 24.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 25.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 26.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 29.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 33.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 33.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 33.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 32.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 31.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 32.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 30.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 31.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 30.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 28.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 37.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 38.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 39.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 47.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 47.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 47.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 48.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 53.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 52.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 53.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 53.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 54.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 55.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 69.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 67.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 66.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 67.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 63.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 65.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 63.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 66.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 68.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 63.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 66.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 69.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 72.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 73.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 69.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 61.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 61.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 58.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 65.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 68.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 73.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 75.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 78.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 84.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 85.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 84.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 87.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 94.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 101.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 96.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 120.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 137.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 140.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 145.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 151.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 164.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 186.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 11.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 11.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 12.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 13.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 13.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 14.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 15.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 15.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 15.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 14.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 15.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 12.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 12.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 12.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 11.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 11.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 10.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 13.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 11.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 10.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": NaN
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 12.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 13.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 15.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 17.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 17.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 18.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 15.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 17.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 16.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 20.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 19.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 21.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 22.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 26.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 23.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 24.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 25.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 27.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 27.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 32.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 38.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 36.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 41.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 43.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 49.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 49.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 59.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 61.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 72.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Xylazine",
        "drug_overdose_deaths": 77.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 44.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 46.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 49.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 52.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 51.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 63.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 85.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 104.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 120.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 140.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 163.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 182.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 204.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 227.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 263.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 338.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 349.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 348.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 354.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 355.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 355.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 361.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 378.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 377.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 369.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 357.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 364.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 374.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 375.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 375.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 383.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 386.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 399.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 401.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 379.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 378.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 381.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 384.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 381.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 389.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 390.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 406.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 401.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 428.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 449.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 453.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 455.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 441.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 436.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 429.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 434.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 433.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 428.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 424.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 401.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 381.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 381.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 378.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 380.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 374.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 377.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 1",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 359.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 187.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 185.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 184.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 213.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 234.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 253.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 258.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 260.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 294.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 303.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 325.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 351.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 367.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 373.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 374.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 364.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 350.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 347.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 334.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 316.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 337.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 339.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 338.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 357.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 346.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 357.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 356.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 361.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 361.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 369.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 359.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 354.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 344.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 340.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 340.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 339.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 298.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 295.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 294.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 296.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 293.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 2",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 226.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 231.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 236.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 239.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 228.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 226.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 231.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 233.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 229.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 240.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 249.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 249.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 276.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 293.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 302.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 316.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 339.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 353.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 360.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 367.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 376.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 392.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 411.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 418.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 405.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 409.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 424.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 424.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 429.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 420.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 439.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 456.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 461.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 468.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 488.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 492.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 503.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 497.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 493.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 484.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 504.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 494.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 488.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 485.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 482.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 463.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 462.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 460.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 455.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 452.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 450.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 440.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 435.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 431.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 423.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 414.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 412.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 388.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 375.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 367.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 342.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 329.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 3",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 664.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 669.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 660.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 652.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 640.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 671.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 682.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 671.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 674.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 707.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 730.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 747.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 764.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 794.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 835.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 905.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 979.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1008.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1064.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1113.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1153.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1181.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1209.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1231.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1266.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1289.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1306.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1307.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1285.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1299.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1274.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1286.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1287.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1280.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1252.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1263.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1237.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1226.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1222.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1202.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1206.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1207.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1219.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1216.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1229.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1229.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1249.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1246.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1236.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1250.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1262.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1253.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1250.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1225.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1227.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1217.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1184.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1161.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1136.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1104.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1088.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 1029.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 962.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 928.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 871.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 4",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 828.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 308.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 322.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 337.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 346.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 368.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 387.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 410.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 445.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 481.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 499.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 517.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 538.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 560.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 590.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 630.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 648.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 677.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 687.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 681.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 669.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 649.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 661.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 676.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 671.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 682.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 703.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 693.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 710.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 711.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 716.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 726.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 749.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 767.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 772.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 780.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 790.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 781.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 773.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 779.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 769.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 758.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 767.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 766.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 769.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 779.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 776.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 770.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 765.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 782.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 786.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 759.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 772.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 764.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 749.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 754.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 728.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 708.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 697.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 693.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 688.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 664.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 634.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 627.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 5",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 605.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 82.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 78.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 72.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 69.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 67.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 81.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 90.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 103.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 112.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 154.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 193.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 211.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 206.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 198.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 208.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 212.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 216.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 221.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 227.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 228.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 242.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 246.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 252.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 266.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 269.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 286.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 280.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 280.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 279.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 275.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 284.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 283.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 274.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 279.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 297.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 290.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 273.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 278.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 274.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 277.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 282.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 268.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 267.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 255.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 257.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 6",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 256.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 37.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 33.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 34.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 33.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 37.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 44.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 43.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 45.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 51.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 55.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 59.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 61.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 59.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 57.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 55.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 55.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 60.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 62.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 62.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 70.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 71.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 77.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 76.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 75.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 74.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 78.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 83.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 79.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 82.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 85.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 93.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 92.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 97.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 104.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 114.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 117.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 118.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 127.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 130.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 135.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 136.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 134.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 141.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 132.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 118.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 116.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 112.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 109.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 107.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 102.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 7",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 100.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 111.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 113.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 111.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 109.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 106.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 98.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 104.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 98.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 103.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 111.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 117.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 125.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 132.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 137.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 142.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 149.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 166.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 176.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 179.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 180.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 189.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 190.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 202.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 197.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 205.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 215.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 216.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 225.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 225.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 224.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 222.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 218.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 216.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 208.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 205.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 205.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 195.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 190.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 188.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 180.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 194.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 201.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 200.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 211.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 204.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 210.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 207.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 220.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 221.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 220.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 223.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 217.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 215.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 214.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 220.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 225.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 231.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 229.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 233.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 8",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 240.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 240.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 242.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 233.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 232.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 236.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 231.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 238.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 245.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 253.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 268.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 271.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 283.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 292.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 299.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 340.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 347.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 364.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 380.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 365.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 366.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 358.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 353.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 352.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 353.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 338.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 333.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 322.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 323.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 322.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 326.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 319.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 315.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 312.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 309.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 301.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 287.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 285.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 288.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 290.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 284.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 291.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 302.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 315.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 324.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 331.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 341.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 343.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 337.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 327.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 326.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 326.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 330.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 317.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 313.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 307.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 9",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 305.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 48.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 40.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 40.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 42.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 44.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 46.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 50.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 51.0
    },
    {
        "death_year": 2019,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 49.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 58.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 64.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 71.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 80.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 88.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 87.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 88.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 101.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 99.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 99.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 104.0
    },
    {
        "death_year": 2020,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 106.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 102.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 103.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 109.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 110.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 117.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 124.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 133.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 134.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 145.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 152.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 161.0
    },
    {
        "death_year": 2021,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 167.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 175.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 178.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 165.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 160.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 154.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 158.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 153.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 148.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2022,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 142.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 136.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 135.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 128.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 139.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 151.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 169.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 177.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 173.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 172.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 179.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 184.0
    },
    {
        "death_year": 2023,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 184.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 192.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 203.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 207.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 206.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 217.0
    },
    {
        "death_year": 2024,
        "jurisdiction_occurrence": "Region 10",
        "drug_involved": "Gabapentin",
        "drug_overdose_deaths": 213.0
    }
];