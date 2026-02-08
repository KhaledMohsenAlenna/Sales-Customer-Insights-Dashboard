# Sales and Customer Insights Dashboard

<img width="1906" height="893" alt="Screenshot 2026-02-08 213946" src="https://github.com/user-attachments/assets/e16d260d-00d6-4cf2-9dc1-a07279512b2d" />
<img width="1882" height="891" alt="Screenshot 2026-02-08 214007" src="https://github.com/user-attachments/assets/653b55d5-cbec-4900-980d-7ee487f561d0" />



![Dashboard Architecture](dashboard_preview.png)

## Project Description
This repository hosts a full-stack data analytics application designed to visualize sales metrics, revenue trends, and customer demographics. The project demonstrates the integration of a Python-based backend for data processing with a responsive frontend interface for dynamic visualization.

The application ingests raw sales data from CSV format, processes it using the Pandas library, and serves aggregated insights via a RESTful API built with Flask. The frontend consumes this API to render interactive charts using Chart.js.

## Key Features
* **Data Processing Pipeline:** Automated ingestion, cleaning, and aggregation of raw sales data using Python Pandas.
* **RESTful API Architecture:** Decoupled backend architecture serving JSON data endpoints.
* **Interactive Visualization:** Implementation of dynamic charts (Bar, Line, Pie, and Doughnut charts) to represent complex datasets.
* **Responsive Design:** Optimized user interface ensuring compatibility across various display resolutions.

## Technical Stack

### Backend
* **Language:** Python 3.x
* **Framework:** Flask (Web Server Gateway Interface)
* **Data Manipulation:** Pandas
* **Utilities:** Flask-CORS (Cross-Origin Resource Sharing)

### Frontend
* **Structure:** HTML5
* **Styling:** CSS3 (Custom Responsive Layouts)
* **Logic:** JavaScript (ES6+)
* **Visualization Library:** Chart.js

### Data Source
* **Format:** Structured CSV Data (Sales and Customer Records)

## Project Structure
```text
├── sales_and_customer_insights.csv  # Raw data source
├── server.py                        # Main Flask application and API endpoints
├── requirements.txt                 # Python dependencies
├── index.html                       # Main dashboard interface
├── style.css                        # Stylesheet for layout and design
└── chart1.js - chart4.js            # JavaScript modules for data visualization



