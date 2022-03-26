let products = [
    {
        name: '5 centimet trên giây',
        image1: './images/5-tren-giay.png',
        old_price: '50.000Đ',
        curr_price: '45.000Đ'
    },
    {
        name: 'Sách dạy nấu ăn',
        image1: './images/sach-day-nau-an-200-mon-an-truyen-thong.png',
        old_price: '100.000Đ',
        curr_price: '90.000Đ'
    },
    {
        name: 'Bản chất của dối trá',
        image1: './images/sach-tam-ly-hay-nen-doc.png',
        old_price: '45.000Đ',
        curr_price: '40.000Đ'
    },
    {
        name: 'Tiểu sử Steve Jobs',
        image1: './images/tieu-su-steve-jobs.png',
        old_price: '150.000Đ',
        curr_price: '140.000Đ'
    },
    {
        name: 'Trí tuệ xúc cảm',
        image1: './images/tri-tue-xuc-cam.png',
        old_price: '60.000Đ',
        curr_price: '55.000Đ'
    },
    {
        name: 'Kỳ án ánh trăng',
        image1: './images/ki-an-anh-trang.png',
        old_price: '80.000Đ',
        curr_price: '75.000Đ'
    },
    {
        name: 'Kỳ án ánh trăng',
        image1: './images/ki-an-anh-trang.png',
        old_price: '80.000Đ',
        curr_price: '75.000Đ'
    },
    {
        name: 'Ảo tưởng tình yêu',
        image1: './images/ao-tuong-tinh-yeu.png',
        old_price: '50.000Đ',
        curr_price: '45.000Đ'
    },
    {
        name: 'Kỳ án ánh trăng',
        image1: './images/ki-an-anh-trang.png',
        old_price: '80.000Đ',
        curr_price: '75.000Đ'
    },
    {
        name: 'Ảo tưởng tình yêu',
        image1: './images/ao-tuong-tinh-yeu.png',
        old_price: '50.000Đ',
        curr_price: '45.000Đ'
    },{
        name: 'Kỳ án ánh trăng',
        image1: './images/ki-an-anh-trang.png',
        old_price: '80.000Đ',
        curr_price: '75.000Đ'
    },
    {
        name: 'Ảo tưởng tình yêu',
        image1: './images/ao-tuong-tinh-yeu.png',
        old_price: '50.000Đ',
        curr_price: '45.000Đ'
    },
]

let product_list = document.querySelector('#products')
    products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                <img style="height: 200px; width: 150px; transform: translateX(-7rem);" src="${e.image1}" alt="">                 
                 </div>                
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">Chi tiết</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
        product_list.insertAdjacentHTML("beforeend", prod)
    })


let filter_col = document.querySelector('#filter-col')

document.querySelector('#filter-toggle').addEventListener('click', () => filter_col.classList.toggle('active'))

document.querySelector('#filter-close').addEventListener('click', () => filter_col.classList.toggle('active'))