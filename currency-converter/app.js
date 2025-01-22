import https from 'https';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = '7092ae061d4a1612dba51b09';
const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/INR`;

const convertCurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (response) => {
  let data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    const rates = JSON.parse(data).conversion_rates;
    console.log(rates);

    rl.question('ENter the amount in INR : ', (amount) => {
      rl.question('ENter the target currency : ', (currency) => {
        const rate = rates[currency.toUpperCase()];
        if (rate) {
          console.log(
            `${amount} INR is approx ${convertCurrency(amount, rate)} ${currency}`
          );
        } else {
          console.log('Invalid currency code');
        }
        rl.close();
      });
    });
  });
});
