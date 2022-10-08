const jsonData = fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    const hours = document.querySelectorAll('.hours');
    const previous = document.querySelectorAll('.previous');
    const daily = document.getElementById('daily');
    const weekly = document.getElementById('weekly');
    const monthly = document.getElementById('monthly');
 
    
    for (let i=0; i<hours.length; i++) {
        
        daily.addEventListener('click', () => {
            hours[i].innerHTML = `${data[i].timeframes.daily.current}hrs`;
            previous[i].innerHTML = `Last week ${data[i].timeframes.daily.previous}hrs`;
            daily.style.color = "white";
            weekly.style.color = "";
            monthly.style.color = "";
        })
        hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            previous[i].innerHTML = `Last week ${data[i].timeframes.weekly.previous}hrs`;
            weekly.style.color = "white"
            daily.style.color = "";
            monthly.style.color = "";
        weekly.addEventListener('click', () => {
            hours[i].innerHTML = `${data[i].timeframes.weekly.current}hrs`;
            previous[i].innerHTML = `Last week ${data[i].timeframes.weekly.previous}hrs`;
            weekly.style.color = "white"
            daily.style.color = "";
            monthly.style.color = "";
        })
    
        monthly.addEventListener('click', () => {
            hours[i].innerHTML = `${data[i].timeframes.monthly.current}hrs`;
            previous[i].innerHTML = `Last week ${data[i].timeframes.monthly.previous}hrs`;
            monthly.style.color = "white";
            daily.style.color = "";
            weekly.style.color = "";
        })  
            
        
        
    }
    
    
});
const daily = document.getElementById('daily');

