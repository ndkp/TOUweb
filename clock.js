function updateTime() {
    const now = new Date(); // 現在日時
    const hours = String(now.getHours()).padStart(2, '0'); // 時
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 分
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 秒
    const timeString = `${hours}:${minutes}:${seconds}`;
  
    const timeElement = document.getElementById('time');
    timeElement.innerText = timeString;
  }
  
  // 初回表示のために1回実行
  updateTime();
  
  // 1秒ごとに時刻を更新
  setInterval(updateTime, 1000);
  