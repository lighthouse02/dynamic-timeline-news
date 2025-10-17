// Your activity data - add as many as you want
const activities = [
  {
    time: "16 Oktober,",
    title: "Kerja membersihkan puing reruntuhan bangunan",
    link: "https://www.facebook.com/share/v/1FUnLsz8fc/",
    description: "📍Gaza<br>Kini selepas gencatan senjata, kami berusaha membersih dan membuka jalan, agar keluarga Gaza dapat kembali menjejak rumah mereka."
  },
  {
    time: "15 Oktober,",
    title: "🛳 The Kindness Ship Dalam Pelayaran ke Gaza!",
    link: "https://www.facebook.com/share/v/1FUnLsz8fc/",
    description: "Dengan sokongan anda dan di bawah koordinasi AFAD Turki, Kindness Ship telah berlepas dari Pelabuhan Antarabangsa Mersin, membawa bantuan kemanusiaan dan harapan.<br>Terima kasih kerana solidariti bersama Palestin. 🇵🇸"
  },
  {
    time: "14 Oktober, 2025",
    title: "Lori Bantuan di Pelabuhan Mersin",
    link: "https://example.com/article2",
    description: "Di Pelabuhan Mersin, 60 tan bantuan makanan untuk Gaza akan dihantar tidak lama lagi, diselaraskan oleh AFAD, agensi pengurusan bencana Turki.<br>Terima kasih atas sokongan anda!"
  },
  {
    time: "14 Oktober, 2025",
    title: "Kami gandakan misi bantuan di Gaza.",
    link: "https://www.facebook.com/share/v/1Bm2j2Ggx2/",
    description: "Selepas gencatan senjata, kami gandakan misi bantuan di Gaza. Sumbangan anda menyediakan hidangan panas kepada saudara-saudara kita di sana.<br>Terima kasih! *Koordinasi Fokus kita ialah Susu untuk bayi dan makanan Tin"
  },
  {
    time: "14 Oktober, 2025",
    title: "Never Give Up! (Gaza)",
    link: "https://www.facebook.com/share/v/1QxCdn6C5E/",
    description: "Di sebalik kehancuran, penderitaan, dan semua yang telah hilang, kami akan kembali dan membina semula semuanya.<br>keluarga yang pulang ke Gaza tidak menyerah harapan mereka tetap menyala"
  },
  {
    time: "13 Oktober, 2025",
    title: "Sejak 7 Okt 2023,kami tetap di lapangan bersama Gaza",
    link: "https://www.facebook.com/share/v/17Fm2gLkzk/",
    description: "menyalurkan bantuan kemanusiaan—semuanya dengan sokongan anda. Alhamdulillah"
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
