const quotes = [
    "The best way to predict the future is to create it. – Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Life is what happens when you’re busy making other plans. – John Lennon",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "You learn more from failure than from success. Don’t let it stop you. – Anonymous",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you. – Steve Jobs",
    "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
    "Act as if what you do makes a difference. It does. – William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett"
  ];
  
  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("quote-btn");
  
  button.onclick =  () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  };
         