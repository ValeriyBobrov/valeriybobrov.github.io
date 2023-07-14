let searchList = document.querySelector('.search-list');
let searchInput = document.querySelector('.search-input');

let resultDiv = document.querySelector('.result')

searchInput.addEventListener('keyup', ()=> {
    let searchResult = searchInput.value.trim();

    if (searchResult === '') {
        searchList.innerHTML = '';
        return
    }

    fetch (`https://api.github.com/search/repositories?q=${searchResult}&per_page=5`)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        let fragment = document.createDocumentFragment()
        data.items.forEach(rep => {
            let item = document.createElement('li')
            item.classList.add('search-item')
            item.textContent = rep.full_name
            fragment.appendChild(item)

            item.setAttribute('data-rep-name', rep.full_name);
            item.setAttribute('data-rep-lang', rep.language);
            item.setAttribute('data-rep-stars', rep.stargazers_count)
        })

        while (searchList.firstChild) {
            searchList.removeChild(searchList.firstChild);
        }
    
        searchList.appendChild(fragment)

        let searchItems = document.querySelectorAll('.search-item');

        for(let i = 0; i < searchItems.length; i++) {
            searchItems[i].addEventListener('click', ()=> {
                let el = document.createElement('div')
                el.classList.add('result-item-wrapper')
        
                let name = document.createElement('p')
                name.textContent = `Name: ${searchItems[i].getAttribute('data-rep-name')}`;
        
                let owner = document.createElement('p')
                owner.textContent = `Owner: ${searchItems[i].getAttribute('data-rep-lang')}`;
        
                let stars = document.createElement('p')
                stars.textContent = `Stars: ${searchItems[i].getAttribute('data-rep-stars')}`;

                let btn = document.createElement('button')
                btn.classList.add('result-button');
                btn.textContent = 'X'
        
                el.appendChild(name);
                el.appendChild(owner);
                el.appendChild(stars);
                el.appendChild(btn);
        
                resultDiv.appendChild(el)

                btn.addEventListener('click', ()=>{
                    resultDiv.removeChild(el);
                })
            })
        }
    })
})






