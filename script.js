arr = [
    {
    img_url :  'https://www.skymetweather.com/themes/skymet/images/gallery/toplists/Top-Not-to-miss-food-items-in-Monsoon/4.jpg',
    name : 'Samosa',
    category : 'Snacks',
    is_junk : true,
    calories : 300
    },
    {
    img_url :  'https://www.simplyrecipes.com/thmb/pjYMLcsKHkr8D8tYixmaFNxppPw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg',
    name : 'Pizza',
    category : 'Snacks',
    is_junk : true,
    calories : 600
    },
    {
    img_url :  'https://static.fanpage.it/wp-content/uploads/sites/22/2021/09/beef-burger.jpg',
    name : 'Burger',
    category : 'Snacks',
    is_junk : true,
    calories : 550
    },
    {
    img_url :  'https://theyummydelights.com/wp-content/uploads/2022/04/shredded-chicken-sandwich.jpg',
    name : 'Sandwich',
    category : 'Breakfast',
    is_junk : false,
    calories : 150
    },
    {
    img_url :  'https://i.ytimg.com/vi/M7nvJN0vQ3g/maxresdefault.jpg',
    name : 'Dal Makhni',
    category : 'Dinner',
    is_junk : false,
    calories : 200
    },
    {
    img_url :  'https://www.awesomecuisine.com/wp-content/uploads/2020/03/bread-omelette.jpg',
    name : 'Bread Omelette',
    category : 'Breakfast',
    is_junk : false,
    calories : 500
    },
    {
    img_url :  'https://www.whiskaffair.com/wp-content/uploads/2022/07/Cheesy-Tadka-Maggi-2-3.jpg',
    name : 'Maggi',
    category : 'Snacks',
    is_junk : true,
    calories : 250
    }
]

function filter(flt){
    document.querySelector('.container').innerHTML = '';
    switch(flt){
        case 'Breakfast':
            arr.filter((item) => {
                if (item.category === "Breakfast") {
                  document.querySelector(
                    ".container"
                  ).innerHTML += `<div class="items">
                    <div class="image">
                      <img src="${item.img_url}" alt="">
                  </div>
                  <div class="txt">
                      <p>Food Name: ${item.name}</p>
                      <p>Category: ${item.category}</p>
                      <p>Junk: ${item.is_junk}</p>
                      <p>Calories: ${item.calories}</p>
                  </div>
              </div>`;
                }
              });
            break;
        case 'all':
            arr.filter((item) => {
                document.querySelector(
                  ".container"
                ).innerHTML += `<div class="items">
                <div class="image">
                  <img src="${item.img_url}" alt="">
              </div>
              <div class="txt">
                  <p>Food Name: ${item.name}</p>
                  <p>Category: ${item.category}</p>
                  <p>Junk: ${item.is_junk}</p>
                  <p>Calories: ${item.calories}</p>
              </div>
          </div>`;
            });
            break;
        case 'junk':
            arr.filter((item) => {
                if (item.is_junk === true) {
                  document.querySelector(
                    ".container"
                  ).innerHTML += `<div class="items">
                  <div class="image">
                    <img src="${item.img_url}" alt="">
                </div>
                <div class="txt">
                    <p>Food Name: ${item.name}</p>
                    <p>Category: ${item.category}</p>
                    <p>Junk: ${item.is_junk}</p>
                    <p>Calories: ${item.calories}</p>
                </div>
            </div>`;
                }
              });
            break;
        case 'cal':
            arr.filter((item) => {
                if (item.calories <= 300) {
                  document.querySelector(
                    ".container"
                  ).innerHTML += `<div class="items">
                  <div class="image">
                    <img src="${item.img_url}" alt="">
                </div>
                <div class="txt">
                    <p>Food Name: ${item.name}</p>
                    <p>Category: ${item.category}</p>
                    <p>Junk: ${item.is_junk}</p>
                    <p>Calories: ${item.calories}</p>
                </div>
            </div>`;
                }
              });
            break;
    }
}

document.querySelector('.btn-bf').addEventListener("click", ()=>{
    filter('Breakfast');
})
document.querySelector('.btn-al').addEventListener("click", ()=>{
    filter('all');
})
document.querySelector('.btn-cl').addEventListener("click", ()=>{
    filter('cal')
})
document.querySelector('.btn-jf').addEventListener("click", ()=>{
    filter('junk')
})