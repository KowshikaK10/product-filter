const buttons=document.querySelectorAll('.btn');
const products=document.querySelectorAll('.productImage');
const closeBtn=document.querySelector('.bx');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
       activeButton(e);
    });
});

function activeButton(e){  
    buttons.forEach((button)=>{
        button.classList.remove('btnclicked');
    });

    e.target.classList.add('btnclicked');
    const btnDataset=e.target.dataset.filter;

        if(btnDataset=='all'){
            products.forEach((product)=>{
                product.style.display='block';
            });
        }
        else{
            products.forEach((product)=>{
                 const productDataset=product.dataset.product;
                if(productDataset==btnDataset){
                     product.style.display='block';
                 }
                 else{
                     product.style.display='none';
                 }
            });
        }
}

products.forEach((prod)=>{
    prod.addEventListener('click',()=>{
        viewProduct(prod);
    });
});



function viewProduct(product){
    document.querySelector('.productItem').style.display='block';
    let productItem=document.querySelector('.productItem');
    productItem.classList.add('viewActive');

    const productName=product.dataset.product; 
    const img=product.querySelector('img').src;
    const imageName=document.querySelector('.productDet');
    const name=document.createElement('p');
    name.className='selectedImg';
    name.innerHTML=`<h5>Image Category : ${productName}</h5>
    <div class="imageData">
    <img src=${img}>
    </div>
    `;
    imageName.appendChild(name);
}

closeBtn.addEventListener('click',()=>{
    let productItem=document.querySelector('.productItem');
    productItem.classList.remove('viewActive');
    document.querySelector('.productItem').style.display='none';
    const imageName=document.querySelector('.productDet');
    const name=document.querySelector('.selectedImg')
    imageName.removeChild(name);
})