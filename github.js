let button = document.querySelector('.button');
let display = document.querySelector('.display');
let quotes = [
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. — Albert Einstein",
  "So many books, so little time. — Frank Zappa",
  "A room without books is like a body without a soul. — Marcus Tullius Cicero",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "Be the change that you wish to see in the world. — Mahatma Gandhi",
  "In three words I can sum up everything I've learned about life: it goes on. — Robert Frost",
  "If you tell the truth, you don't have to remember anything. — Mark Twain",
  "Always forgive your enemies; nothing annoys them so much. — Oscar Wilde",
  "Without music, life would be a mistake. — Friedrich Nietzsche",
  "We accept the love we think we deserve. — Stephen Chbosky",
  "It is better to be hated for what you are than to be loved for what you are not. — André Gide",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "Happiness depends upon ourselves. — Aristotle",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "Everything you can imagine is real. — Pablo Picasso",
  "Whatever you are, be a good one. — Abraham Lincoln",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Not all those who wander are lost. — J.R.R. Tolkien",
  "It does not do to dwell on dreams and forget to live. — J.K. Rowling",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Life is really simple, but we insist on making it complicated. — Confucius",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "Act as if what you do makes a difference. It does. — William James",
  "Opportunities don't happen. You create them. — Chris Grosser",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "You miss 100% of the shots you don't take. — Wayne Gretzky",
  "Whether you think you can or you think you can’t, you’re right. — Henry Ford",
  "I have not failed. I've just found 10,000 ways that won't work. — Thomas A. Edison",
  "Dream big and dare to fail. — Norman Vaughan",
  "Everything has beauty, but not everyone sees it. — Confucius",
  "What we achieve inwardly will change outer reality. — Plutarch",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "If opportunity doesn’t knock, build a door. — Milton Berle",
  "Doubt kills more dreams than failure ever will. — Suzy Kassem",
  "Failure is the condiment that gives success its flavor. — Truman Capote",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "Limit your ‘always’ and your ‘nevers’. — Amy Poehler",
  "Nothing will work unless you do. — Maya Angelou",
  "Don’t wait. The time will never be just right. — Napoleon Hill",
  "Do what you feel in your heart to be right – for you’ll be criticized anyway. — Eleanor Roosevelt",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "The purpose of our lives is to be happy. — Dalai Lama",
  "Life is what happens when you’re busy making other plans. — John Lennon",
  "Love the life you live. Live the life you love. — Bob Marley",
  "Get busy living or get busy dying. — Stephen King",
  "If you want to live a happy life, tie it to a goal, not to people or things. — Albert Einstein",
  "Don’t cry because it’s over, smile because it happened. — Dr. Seuss",
  "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
  "The best way to predict the future is to invent it. — Alan Kay",
  "If you judge people, you have no time to love them. — Mother Teresa",
  "An unexamined life is not worth living. — Socrates",
  "Do not pray for an easy life, pray for the strength to endure a difficult one. — Bruce Lee",
  "The mind is everything. What you think you become. — Buddha",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "If you’re going through hell, keep going. — Winston Churchill",
  "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
  "Go confidently in the direction of your dreams! Live the life you’ve imagined. — Henry David Thoreau",
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
  "Fall seven times and stand up eight. — Japanese Proverb",
  "What we think, we become. — Buddha",
  "It always seems impossible until it’s done. — Nelson Mandela",
  "I can, therefore I am. — Simone Weil",
  "Keep your eyes on the stars and your feet on the ground. — Theodore Roosevelt",
  "The harder I work, the luckier I get. — Samuel Goldwyn",
  "Don’t quit. Suffer now and live the rest of your life as a champion. — Muhammad Ali",
  "We become what we think about. — Earl Nightingale",
  "Do not let making a living prevent you from making a life. — John Wooden",
  "Life is short, and it is up to you to make it sweet. — Sarah Louise Delany",
  "A person who never made a mistake never tried anything new. — Albert Einstein",
  "The way to get started is to quit talking and begin doing. — Walt Disney",
  "Perfection is not attainable, but if we chase perfection we can catch excellence. — Vince Lombardi",
  "I never dreamed about success, I worked for it. — Estee Lauder",
  "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment. — Buddha",
  "Life is either a daring adventure or nothing at all. — Helen Keller",
  "The best way out is always through. — Robert Frost",
  "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
  "Action is the foundational key to all success. — Pablo Picasso",
  "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
  "Opportunities multiply as they are seized. — Sun Tzu",
  "Do what you love and the money will follow. — Marsha Sinetar",
  "The best revenge is massive success. — Frank Sinatra",
  "Try not to become a man of success. Rather become a man of value. — Albert Einstein",
  "Success is walking from failure to failure with no loss of enthusiasm. — Winston Churchill",
  "Courage is grace under pressure. — Ernest Hemingway",
  "What you do makes a difference, and you have to decide what kind of difference you want to make. — Jane Goodall",
  "The secret of getting ahead is getting started. — Mark Twain",
  "Success is how high you bounce when you hit bottom. — George S. Patton",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis"
];
let lastQuote = null;
button.addEventListener('click', function() {
  let randomQuote;
  do {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (randomQuote === lastQuote);

  display.innerHTML = randomQuote;
  lastQuote = randomQuote;
});
 const video = document.getElementById("video");
const muteBtn = document.getElementById("muteBtn");
muteBtn.addEventListener("click", () =>{
  if(video.muted){
    video.muted = false;
    muteBtn.textContent = "Mute";
  }else{
    video.muted = true;
    muteBtn.textContent = "Unmute";
  }
}
);

  