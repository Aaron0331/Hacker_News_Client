// 반복되는 코드를 줄여 유지보수 용이하게 함
const container = document.getElementById('root')
const ajax = new XMLHttpRequest()
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"

//컨텐츠를 보여줄 div 생성
const content = document.createElement('div')

// 개별 글을 불러오는 URL
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"


ajax.open("GET", NEWS_URL , false)
ajax.send();

const newsFeed = JSON.parse(ajax.response)
const ul = document.createElement('ul')

//HashChange 이벤트
window.addEventListener('hashchange', function() {
  // location : 브라우저 기본 제공 객체, 주소 관련 정보 제공
  // 클릭한 게시물의 정보를 받아와 파싱
  const id = location.hash.substr(1)
  ajax.open('GET', CONTENT_URL.replace("@id", id), false)
  ajax.send()
  
  const newsContent = JSON.parse(ajax.response)
  const title = document.createElement('h1')

  title.innerHTML = newsContent.title
  content.appendChild(title)

})


for (let i = 0; i <10; i++){
  const li = document.createElement('li')
  
  //앵커 태그 추가
  const a = document.createElement('a')
  a.href = `#${newsFeed[i].id}`

  // 타이틀 옆에 댓글 수 표기
  a.innerHTML = `${newsFeed[i].title} (${newsFeed[i].comments_count})`

  //이벤트 리스너 등록
  a.addEventListener('click', function() {

  })

  li.appendChild(a)
  ul.appendChild(li)
}

container.appendChild(ul)
container.appendChild(content)