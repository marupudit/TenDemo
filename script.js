function calculateInterest() {
    const amount = parseFloat(document.getElementById('amount').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const duration = document.getElementById('duration').value;

    let interest;
    switch (duration) {
        case 'daily':
            interest = amount * (rate / 100) / 365;
            break;
        case 'monthly':
            interest = amount * (rate / 100) / 12;
            break;
        case 'yearly':
            interest = amount * (rate / 100);
            break;
    }

    document.getElementById('result').innerText = `Interest Amount: ${interest.toFixed(2)}`;
}