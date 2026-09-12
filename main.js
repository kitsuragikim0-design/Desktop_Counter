// 从浏览器本地存储中读取之前的计数
let count = localStorage.getItem('prague_count') ? parseInt(localStorage.getItem('prague_count')) : 0;

const countDisplay = document.getElementById('count-display');
const clickBtn = document.getElementById('click-btn');

// 初始化显示
countDisplay.textContent = count;

// 监听点击事件
clickBtn.addEventListener('click', () => {
    count += 1;
    
    // 更新界面
    countDisplay.textContent = count;
    
    // 保存到本地
    localStorage.setItem('prague_count', count);
    
    // 确认点击生效
    console.log(`灵感 +1，当前总数：${count}`);
});
