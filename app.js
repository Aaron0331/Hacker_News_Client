const ajax = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"


//동기적 처리
ajax.open("GET", NEWS_URL , false)
ajax.send();

//JSON 문자열 객체화
const newsFeed = JSON.parse(ajax.response)

// 하드코딩
document.getElementById('root').innerHTML =
`<ul>
  <li>${newsFeed[0].title}</li>
  <li>${newsFeed[1].title}</li>
  <li>${newsFeed[2].title}</li>
</ul>`

// 코드적 처리
const ul = document.createElement('ul')

for (let i = 0; i <10; i++){
  const li = document.createElement('li')

  li.innerHTML = newsFeed[i].title

  ul.appendChild(li)
}

document.getElementById('root').appendChild(ul)