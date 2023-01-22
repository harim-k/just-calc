from flask import Flask, render_template, request
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = Flask(__name__)

def compound_interest(principal, rate, years):
    interest = []
    for i in range(years + 1):
        interest.append(principal * (1 + rate) ** i)
    return interest

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        principal = float(request.form['principal'])
        rate = float(request.form['rate'])
        years = int(request.form['years'])

        results = compound_interest(principal, rate, years)

        # Plot the results
        plt.plot(range(years + 1), results)
        plt.xlabel('Years')
        plt.ylabel('Value')
        plt.title('Compound Interest')

        # Create a BytesIO object
        buffer = BytesIO()

        # Save the plot to the BytesIO object
        plt.savefig(buffer, format='png')

        # Seek to the beginning of the BytesIO object
        buffer.seek(0)

        # Encode the plot in base64
        plot_url = base64.b64encode(buffer.getvalue()).decode()

        return render_template('index.html', plot_url=plot_url)
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
