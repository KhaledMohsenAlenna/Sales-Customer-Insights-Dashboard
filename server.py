from flask import Flask, jsonify, render_template
import pandas as pd

# Load the dataset
df = pd.read_csv("sales_and_customer_insights.csv")

app = Flask(__name__)

# Route for the main page
@app.route('/')
def index():
    return render_template("index.html")

# Endpoint for Chart 1: Purchase Frequency by Region
@app.route('/get-datchar')
def get_datachart():
    chart1_data = df.groupby('Region')['Purchase_Frequency'].sum().reset_index()
    data = [{"class": row['Region'], "value": row['Purchase_Frequency']} for _, row in chart1_data.iterrows()]
    return jsonify(data)

# Endpoint for Chart 2: Average Order Value by Category
@app.route('/get-datchar2')
def get_datachart2():
    chart2_data = df.groupby('Most_Frequent_Category')['Average_Order_Value'].mean().reset_index()
    data = [{"class": row['Most_Frequent_Category'], "value": row['Average_Order_Value']} for _, row in chart2_data.iterrows()]
    return jsonify(data)

# Endpoint for Chart 3: Customer Satisfaction by StoreType
@app.route('/get-datchar3')
def get_datachart3():
    # تجميع البيانات واستخدام الأعمدة الموجودة
    chart3_data = df.groupby('Most_Frequent_Category')['Churn_Probability'].mean().reset_index()
    
    # تنسيق البيانات لتكون جاهزة للاستخدام
    data = chart3_data.to_dict(orient='records')
    return jsonify(data)



# Endpoint for Chart 4: Time Series Data
@app.route('/get-datchar4')
def get_datachart4():
    chart4_data = df[['Date', 'Value']].dropna()
    data = chart4_data.to_dict(orient='records')
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
