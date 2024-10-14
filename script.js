const productsDiv = document.querySelector('.products');
const count = document.querySelector('h1 span');

const cartArr = [];

count.innerHTML = cartArr.length;

function reload(arr) {
    productsDiv.innerHTML = '';

    for (let item of arr) {
        // elements
        const product = document.createElement('div');
        const product__info = document.createElement('div');
        const rates = document.createElement('div');
        const priceDiv = document.createElement('div');
        const rateDiv = document.createElement('div');
        const countDiv = document.createElement('div');
        const price = document.createElement('span');
        const rate = document.createElement('span');
        const count = document.createElement('span');
        const image = document.createElement('img');
        const title = document.createElement('h3');
        const description = document.createElement('p');
        const addToFavorite = document.createElement('button');
        const btn2 = document.querySelector('.btn2')
        const korzinka = document.querySelector('.korzinka')
        const modal =  document.querySelector('.modal')
        const modalContent =  document.querySelector('.modal-content');
        const p2 = document.querySelector('.p2')
        const p3 = document.createElement('p')
         

        // innerHtml
        title.innerHTML = item.title.split(' ').slice(0, 3).join(' ') + '...';
        description.innerHTML = item.description.split(' ').slice(0, 15).join(' ') + '...';
        price.innerHTML = item.price;        
        rate.innerHTML = item.rating.rate;        
        count.innerHTML = item.rating.count;
        addToFavorite.innerHTML = 'В избранное';
        priceDiv.innerHTML += priceSvg();
        rateDiv.innerHTML += ratingSvg();
        countDiv.innerHTML += countSvg();
        p3.innerHTML = 'X'

        // attr
        product.classList.add('product');
        image.src = './81fPKd-2AYL 1.png';
        product__info.classList.add('product__info');
        rates.classList.add('rates');

        // 1
        priceDiv.append(price);
        rateDiv.append(rate);
        countDiv.append(count);

        // 2
        rates.append(priceDiv, rateDiv, countDiv);

        // 3
        product__info.append(title, description, rates, addToFavorite);
    
        // 4
        product.append(image, product__info);

        // 5
        productsDiv.append(product);


        //function

        btn2.onclick = function() {
            
            modalContent.style.display = 'flex';
            modalContent.style.flexdirextion = 'coloumn';
            modalContent.style.gap = '15px'
        }
        
        
        p2.onclick = function() {
            modalContent.style.display = "none";
        }

        addToFavorite.onclick = () => {
           korzinka.innerHTML++;

           modalContent.append(product);
           product.style.width = '300px';
           product.style.height = '300px';
           product.append(p3)
          

           
        }

        p3.onclick = function() {
          productsDiv.append(product)
          korzinka.innerHTML--;

        }



        
    }
}

reload(productsArr);