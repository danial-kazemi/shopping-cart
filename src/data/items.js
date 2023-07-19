const productList = [
    {
        id : '1',
        title : 'لپ تاپ ایسوز',
        price : '70',
        image : '/images/asus_laptop.webp'
    },
    {
        id : '2',
        title : 'مک بوک پرو',
        price : '100',
        image : '/images/macbook_pro.webp'
    },
    {
        id : '3',
        title : 'مینی پی سی',
        price : '111',
        image : '/images/mini_pc.webp'
    },
    {
        id : '4',
        title : 'موس',
        price : '99',
        image : '/images/razer.webp'
    }
];
function getProductData(id){
    return productList.find( (item)=> item.id === id );    
}
export { productList, getProductData};