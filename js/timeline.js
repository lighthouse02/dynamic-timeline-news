// Your activity data - add as many as you want
const activities = [
  {
    time: "2 min",
    title: "Citi Set to Raise €2.75 Billion From Bond Offering in Europe",
    link: "https://example.com/article1",
    description: ""
  },
  {
    time: "12 min",
    title: "Finma to Appeal Court Decision on Credit Suisse AT1s",
    link: "https://example.com/article2",
    description: ""
  },
  {
    time: "25 min",
    title: "Croatia Pipeline Firm Seeks New Sales as US Curbs Hit Key Client",
    link: "https://example.com/article3",
    description: ""
  },
  {
    time: "29 min",
    title: "Copper Rebounds as Traders See $12,000 Within Reach After Rally",
    link: "https://example.com/article4",
    description: ""
  },
  {
    time: "40 min",
    title: "Stocks Gain as Strong Earnings Soothe Trade Fears",
    link: "https://example.com/article5",
    description: ""
  }
  // Add more activities here...

];

// Function to render the timeline
function renderTimeline(limit = null) {
  const timeline = document.getElementById('timeline');
  const itemsToShow = limit ? activities.slice(0, limit) : activities;
  
  itemsToShow.forEach((activity, index) => {
    const li = document.createElement('li');
    li.className = index === itemsToShow.length - 1 ? 'ms-4' : 'mb-10 ms-4';
    
    li.innerHTML = `
      <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time class="mb-1 text-sm font-bold leading-none text-red-600 dark:text-red-500">${activity.time}</time>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
        <a href="${activity.link || '#'}" target="_blank" class="hover:underline hover:text-blue-600 dark:hover:text-blue-400">
          ${activity.title}
        </a>
      </h3>
      ${activity.description ? `<p class="text-base font-normal text-gray-500 dark:text-gray-400">${activity.description}</p>` : ''}
    `;
    
    timeline.appendChild(li);
  });
}

// Check if we're on the main page or all activities page
const isAllPage = window.location.pathname.includes('all-activities');
if (isAllPage) {
  renderTimeline(); // Show all activities
} else {
  renderTimeline(5); // Show only 5 latest activities
}
