DROP TABLE Provisional_drug_overdose ;
DROP TABLE VSRR_Provisional_Drug_Overdose;
CREATE TABLE Provisional_drug_overdose (
	-- id INT PRIMARY KEY,
	data_as_of DATE ,
	death_year INT,
	death_month INT,
	jurisdiction_occurence VARCHAR,
	drug_involved VARCHAR,
	time_period VARCHAR,
	month_ending_date DATE,
	drug_overdose_deaths INT,
	footnote TEXT
);

CREATE TABLE VSRR_Provisional_Drug_Overdose (
	-- id INT PRIMARY KEY,
	State VARCHAR,
	Year INT,
	Month VARCHAR,
	Period VARCHAR,
	Indicator VARCHAR,
	Data_Value FLOAT,
	Percent_Complete FLOAT,
	Percent_Pending_Investigation FLOAT,
	State_Name VARCHAR,
	Footnote VARCHAR,
	Footnote_Symbol VARCHAR,
	Predicted_Value INT
);

ALTER TABLE VSRR_Provisional_Drug_Overdose
DROP COLUMN Footnote,
DROP COLUMN Footnote_Symbol,
DROP COLUMN Predicted_Value,
DROP COLUMN Percent_Pending_Investigation,
DROP COLUMN Percent_Complete,
DROP COLUMN Data_Value,
DROP COLUMN Period;

ALTER TABLE Provisional_drug_overdose
DROP COLUMN time_period,
DROP COLUMN footnote;

ALTER TABLE VSRR_Provisional_Drug_Overdose
RENAME COLUMN Year TO death_year;

ALTER TABLE VSRR_Provisional_Drug_Overdose
RENAME COLUMN Month TO death_month;

ALTER TABLE VSRR_Provisional_Drug_Overdose
RENAME COLUMN Indicator TO drug_involved;

