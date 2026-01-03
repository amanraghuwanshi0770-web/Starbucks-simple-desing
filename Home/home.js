const body = document.querySelector("body"),
   sidebar = body.querySelector(".sidebar"),
   toggle = body.querySelector(".toggle"),
   searchbtn = body.querySelector(".search-box"),
   modeswtich = body.querySelector(".toggle-switch"),
   modetext = body.querySelector(".mode-text");

   modeswtich.addEventListener("click",() =>{
    body.classList.toggle("close")
   })

   modeswtich.addEventListener("click",() =>{
    body.classList.toggle("dark")
   })

   let container = document.getElementById("container");
let inpt = document.getElementsByTagName("input")[0];

let data = [
  {
    "Id": "301",
    "name": "Midnight Brew",
    "desc": "Dark roasted perfection with bold aroma.",
    "Img": "https://picsum.photos/seed/midnightbrew/400/400"
  },
  {
    "Id": "302",
    "name": "Caramel Cloud",
    "desc": "Light and sweet brew topped with silky foam.",
    "Img": "https://picsum.photos/seed/caramelcloud/400/400"
  },
  {
    "Id": "303",
    "name": "Hazelnut Heaven",
    "desc": "Nutty, smooth coffee with creamy richness.",
    "Img": "https://picsum.photos/seed/hazelnutheaven/400/400"
  },
  {
    "Id": "304",
    "name": "Mocha Magic",
    "desc": "Chocolate-infused espresso delight.",
    "Img": "https://picsum.photos/seed/mochamagic/400/400"
  },
  {
    "Id": "305",
    "name": "Vanilla Mist",
    "desc": "Gentle vanilla aroma blended into mild roast.",
    "Img": "https://picsum.photos/seed/vanillamist/400/400"
  },
  {
    "Id": "306",
    "name": "Classic Espresso",
    "desc": "Pure and strong traditional espresso shot.",
    "Img": "https://picsum.photos/seed/classicespresso/400/400"
  },
  {
    "Id": "307",
    "name": "Frosted Latte",
    "desc": "Iced latte with cooling freshness.",
    "Img": "https://picsum.photos/seed/frostedlatte/400/400"
  },
  {
    "Id": "308",
    "name": "Roast River",
    "desc": "Smooth-flowing blend with natural notes.",
    "Img": "https://picsum.photos/seed/roastriver/400/400"
  },
  {
    "Id": "309",
    "name": "Bold Bean",
    "desc": "Strong bean blend for energy lovers.",
    "Img": "https://picsum.photos/seed/boldbean/400/400"
  },
  {
    "Id": "310",
    "name": "Creamy Cappuccino",
    "desc": "Thick froth meets balanced espresso.",
    "Img": "https://picsum.photos/seed/creamycappuccino/400/400"
  },

  {
    "Id": "311",
    "name": "Sunrise Coffee",
    "desc": "Bright flavors to kickstart your morning.",
    "Img": "https://picsum.photos/seed/sunrisecoffee/400/400"
  },
  {
    "Id": "312",
    "name": "Arabica Peak",
    "desc": "Premium Arabica beans with clean finish.",
    "Img": "https://picsum.photos/seed/arabicapeak/400/400"
  },
  {
    "Id": "313",
    "name": "Cinnamon Shot",
    "desc": "Warm cinnamon-spiced rich coffee.",
    "Img": "https://picsum.photos/seed/cinnamonshot/400/400"
  },
  {
    "Id": "314",
    "name": "Dark Velvet",
    "desc": "Ultra-smooth dark brew with deep aroma.",
    "Img": "https://picsum.photos/seed/darkvelvet/400/400"
  },
  {
    "Id": "315",
    "name": "Golden Latte",
    "desc": "Turmeric-infused golden spiced latte.",
    "Img": "https://picsum.photos/seed/goldenlatte/400/400"
  },

  {
    "Id": "316",
    "name": "Café Royal",
    "desc": "Rich royal blend with a silky texture.",
    "Img": "https://picsum.photos/seed/caferoyal/400/400"
  },
  {
    "Id": "317",
    "name": "Maple Brew",
    "desc": "Sweet maple taste with medium roast beans.",
    "Img": "https://picsum.photos/seed/maplebrew/400/400"
  },
  {
    "Id": "318",
    "name": "Choco Crunch",
    "desc": "Crunchy chocolate flavor perfectly blended.",
    "Img": "https://picsum.photos/seed/chococrunch/400/400"
  },
  {
    "Id": "319",
    "name": "Smoky Roast",
    "desc": "Smoky slow-roasted beans for deep taste.",
    "Img": "https://picsum.photos/seed/smokyroast/400/400"
  },
  {
    "Id": "320",
    "name": "Honey Drip",
    "desc": "Natural honey sweetness meets soft coffee.",
    "Img": "https://picsum.photos/seed/honeydrip/400/400"
  },

  {
    "Id": "321",
    "name": "Ocean Brew",
    "desc": "Refreshing coastal-inspired light blend.",
    "Img": "https://picsum.photos/seed/oceanbrew/400/400"
  },
  {
    "Id": "322",
    "name": "Almond Aroma",
    "desc": "Almond-scented medium roast delight.",
    "Img": "https://picsum.photos/seed/almondaroma/400/400"
  },
  {
    "Id": "323",
    "name": "Iced Americano",
    "desc": "Chilled black coffee with crisp finish.",
    "Img": "https://picsum.photos/seed/icedamericano/400/400"
  },
  {
    "Id": "324",
    "name": "Choco Melt Latte",
    "desc": "Sweet melting chocolate blended into latte.",
    "Img": "https://picsum.photos/seed/chocomelt/400/400"
  },
  {
    "Id": "325",
    "name": "Roast Fusion",
    "desc": "Fusion of two premium origins for balance.",
    "Img": "https://picsum.photos/seed/roastfusion/400/400"
  },

  {
    "Id": "326",
    "name": "Nutty Bliss",
    "desc": "Nut-filled aroma for cozy coffee moments.",
    "Img": "https://picsum.photos/seed/nuttybliss/400/400"
  },
  {
    "Id": "327",
    "name": "Sugar Frost",
    "desc": "Sweet creamy brew topped with frosted foam.",
    "Img": "https://picsum.photos/seed/sugarfrost/400/400"
  },
  {
    "Id": "328",
    "name": "Roast Master",
    "desc": "Master-level slow roast with rich notes.",
    "Img": "https://picsum.photos/seed/roastmaster/400/400"
  },
  {
    "Id": "329",
    "name": "Cocoa Brew",
    "desc": "Delicate cocoa aroma with medium roast.",
    "Img": "https://picsum.photos/seed/cocoabrew/400/400"
  },
  {
    "Id": "330",
    "name": "Royal Macchiato",
    "desc": "Light foam and bold espresso royalty.",
    "Img": "https://picsum.photos/seed/royalmacchiato/400/400"
  },
  {
    "Id": "329",
    "name": "Cocoa Brew",
    "desc": "Delicate cocoa aroma with medium roast.",
    "Img": "https://picsum.photos/seed/cocoabrew/400/400"
  },
  {
    "Id": "329",
    "name": "Cocoa Brew",
    "desc": "Delicate cocoa aroma with medium roast.",
    "Img": "https://picsum.photos/seed/cocoabrew/400/400"
  },
  {
    "Id": "330",
    "name": "Toffee Nut Classic",
    "desc": "Sweet toffee and nutty roast blended perfectly.",
    "Img": "https://picsum.photos/seed/toffeenut/400/400"
  },
  {
    "Id": "331",
    "name": "Brown Butter Latte",
    "desc": "Nutty brown-butter flavor with soft latte textures.",
    "Img": "https://picsum.photos/seed/brownbutter/400/400"
  },
  {
    "Id": "332",
    "name": "Caramel Ice Burst",
    "desc": "Refreshing iced coffee sweetened with caramel.",
    "Img": "https://picsum.photos/seed/carameliceburst/400/400"
  },
  {
    "Id": "333",
    "name": "Mocha Almond Frappe",
    "desc": "Mocha blended with almond milk for a creamy chill.",
    "Img": "https://picsum.photos/seed/mochaalmond/400/400"
  },
  {
    "Id": "334",
    "name": "Bold Brew Black",
    "desc": "Straight black coffee with deep earthy flavors.",
    "Img": "https://picsum.photos/seed/boldbrewblack/400/400"
  },
  {
    "Id": "335",
    "name": "Vanilla Cold Foam Brew",
    "desc": "Chilled coffee topped with airy vanilla foam.",
    "Img": "https://picsum.photos/seed/vanillacoldfoam/400/400"
  },
  {
    "Id": "336",
    "name": "Hazelnut Frost Frappe",
    "desc": "Hazelnut iced blend with creamy frost texture.",
    "Img": "https://picsum.photos/seed/hazelnutfrost/400/400"
  },
  {
    "Id": "337",
    "name": "Macchiato Supreme",
    "desc": "Layered espresso with rich milk foam.",
    "Img": "https://picsum.photos/seed/macchiatosupreme/400/400"
  },
  {
    "Id": "338",
    "name": "Iced Americano Zest",
    "desc": "Icy americano with a refreshing twist.",
    "Img": "https://picsum.photos/seed/icedamericanozest/400/400"
  },
  {
    "Id": "339",
    "name": "Vanilla Caramel Bliss",
    "desc": "Dreamy mix of vanilla and caramel in a latte.",
    "Img": "https://picsum.photos/seed/vanillacaramelbliss/400/400"
  },
  {
    "Id": "340",
    "name": "Mocha Lava Drink",
    "desc": "Rich melted chocolate blended with espresso.",
    "Img": "https://picsum.photos/seed/mochalava/400/400"
  },
  {
    "Id": "341",
    "name": "Honeycomb Cappuccino",
    "desc": "Foamy cappuccino topped with honey sweetness.",
    "Img": "https://picsum.photos/seed/honeycombcap/400/400"
  },
  {
    "Id": "342",
    "name": "Cocoa Delight Brew",
    "desc": "Smooth cocoa notes infused into warm coffee.",
    "Img": "https://picsum.photos/seed/cocoadelight/400/400"
  },
  {
    "Id": "343",
    "name": "Hazelnut Brew Shot",
    "desc": "Roasted hazelnut aroma in a tight espresso shot.",
    "Img": "https://picsum.photos/seed/hazelnutshot/400/400"
  },
  {
    "Id": "344",
    "name": "Caramel Spice Latte",
    "desc": "Sweet caramel mixed with gentle winter spices.",
    "Img": "https://picsum.photos/seed/caramelspice/400/400"
  },
  {
    "Id": "345",
    "name": "Milk & Mocha Harmony",
    "desc": "A soft symphony of milk and mocha flavor.",
    "Img": "https://picsum.photos/seed/mochaharmony/400/400"
  },
  {
    "Id": "346",
    "name": "Rich Cocoa Iced Brew",
    "desc": "Cooling iced brew lifted with cocoa tones.",
    "Img": "https://picsum.photos/seed/richcocoaiced/400/400"
  },
  {
    "Id": "347",
    "name": "Espresso Fire Shot",
    "desc": "Strong espresso with a fiery, bold bite.",
    "Img": "https://picsum.photos/seed/espressofire/400/400"
  },
  {
    "Id": "348",
    "name": "Creamy Latte Mist",
    "desc": "Light creamy latte with a foggy smooth finish.",
    "Img": "https://picsum.photos/seed/lattemist/400/400"
  },
  {
    "Id": "349",
    "name": "Café Honey Twist",
    "desc": "Warm honey drizzle over fresh café brew.",
    "Img": "https://picsum.photos/seed/cafehoney/400/400"
  },
  {
    "Id": "350",
    "name": "Iceberg Cappuccino",
    "desc": "Chilled cappuccino with icy foam layers.",
    "Img": "https://picsum.photos/seed/icebergcap/400/400"
  },
  {
    "Id": "351",
    "name": "Caramel Nut Frappe",
    "desc": "Caramel sweetness with nutty frappe chill.",
    "Img": "https://picsum.photos/seed/caramelnutfrappe/400/400"
  },
  {
    "Id": "352",
    "name": "Maple Latte Silk",
    "desc": "Velvety latte warmed with maple flavor.",
    "Img": "https://picsum.photos/seed/maplesilk/400/400"
  },
  {
    "Id": "353",
    "name": "Iced Honey Breeze",
    "desc": "Cool iced brew sweetened with honey.",
    "Img": "https://picsum.photos/seed/icedhoneybreeze/400/400"
  },
  {
    "Id": "354",
    "name": "Choco Chip Mocha",
    "desc": "Mocha topped with crunchy chocolate chips.",
    "Img": "https://picsum.photos/seed/chocochipmocha/400/400"
  },
  {
    "Id": "355",
    "name": "Espresso Glacier",
    "desc": "Cold espresso with a sharp refreshing chill.",
    "Img": "https://picsum.photos/seed/espressoglacier/400/400"
  },
  {
    "Id": "356",
    "name": "Nutella Coffee Blend",
    "desc": "Creamy Nutella blended into smooth coffee.",
    "Img": "https://picsum.photos/seed/nutellacoffee/400/400"
  },
  {
    "Id": "357",
    "name": "Cocoa Cinnamon Latte",
    "desc": "A warm latte with cocoa and a dash of cinnamon.",
    "Img": "https://picsum.photos/seed/cocoacinnamon/400/400"
  },
  {
    "Id": "358",
    "name": "Frost Mint Brew",
    "desc": "Icy brew with cool mint freshness.",
    "Img": "https://picsum.photos/seed/frostmint/400/400"
  },
  {
    "Id": "359",
    "name": "Vanilla Sky Latte",
    "desc": "Light vanilla latte with a dreamy aroma.",
    "Img": "https://picsum.photos/seed/vanillasky/400/400"
  },
  {
    "Id": "360",
    "name": "Caramel Chocolate Vibe",
    "desc": "A magical blend of caramel and dark chocolate.",
    "Img": "https://picsum.photos/seed/caramelvibe/400/400"
  },
  {
    "Id": "361",
    "name": "Mocha Frost Bite",
    "desc": "A chilled mocha with sharp icy richness.",
    "Img": "https://picsum.photos/seed/mochafrostbite/400/400"
  },
  {
    "Id": "362",
    "name": "Honey Latte Glow",
    "desc": "Warm latte infused with golden honey sweetness.",
    "Img": "https://picsum.photos/seed/honeyglow/400/400"
  },
  {
    "Id": "363",
    "name": "Coconut Cream Brew",
    "desc": "Smooth brew blended with creamy coconut milk.",
    "Img": "https://picsum.photos/seed/coconutcream/400/400"
  },
  {
    "Id": "364",
    "name": "Minty Mocha Ice",
    "desc": "Cool mint and dark chocolate in a chilled mix.",
    "Img": "https://picsum.photos/seed/mintymochice/400/400"
  },
  {
    "Id": "365",
    "name": "Golden Espresso Shot",
    "desc": "A bright, intense espresso with a clean finish.",
    "Img": "https://picsum.photos/seed/goldenshot/400/400"
  },
  {
    "Id": "366",
    "name": "Almond Ice Latte",
    "desc": "Iced latte layered with soft almond flavors.",
    "Img": "https://picsum.photos/seed/almondicelatte/400/400"
  },
  {
    "Id": "367",
    "name": "Dark Cocoa Burst",
    "desc": "Bold coffee enriched with dark cocoa.",
    "Img": "https://picsum.photos/seed/darkcocoaburst/400/400"
  },
  {
    "Id": "368",
    "name": "Sweet Crème Brew",
    "desc": "Smooth sweet cream blended into warm coffee.",
    "Img": "https://picsum.photos/seed/sweetcremebrew/400/400"
  },
  {
    "Id": "369",
    "name": "Hazelnut Ice Bliss",
    "desc": "Cold hazelnut latte with silky texture.",
    "Img": "https://picsum.photos/seed/hazelnuticebliss/400/400"
  },
  {
    "Id": "370",
    "name": "Mocha Velvet Cup",
    "desc": "Smooth velvet-like mocha with creamy depth.",
    "Img": "https://picsum.photos/seed/mochavelvet/400/400"
  },
  {
    "Id": "371",
    "name": "Vanilla Snow Latte",
    "desc": "Light chilly vanilla latte topped with foam.",
    "Img": "https://picsum.photos/seed/vanillasnow/400/400"
  },
  {
    "Id": "372",
    "name": "Caramel Blast Brew",
    "desc": "A burst of caramel blended with strong brew.",
    "Img": "https://picsum.photos/seed/caramelblast/400/400"
  },
  {
    "Id": "373",
    "name": "Nutty Cappuccino",
    "desc": "Classic cappuccino with light nutty aftertaste.",
    "Img": "https://picsum.photos/seed/nuttycappuccino/400/400"
  },
  {
    "Id": "374",
    "name": "Choco Ice Ripple",
    "desc": "Icy chocolate swirls blended with cold brew.",
    "Img": "https://picsum.photos/seed/chocoiceripple/400/400"
  },
  {
    "Id": "375",
    "name": "Brown Sugar Latte",
    "desc": "Creamy latte sweetened with caramelized brown sugar.",
    "Img": "https://picsum.photos/seed/brownsugarlatte2/400/400"
  },
  {
    "Id": "376",
    "name": "Espresso Chill Shot",
    "desc": "A cold twist to a bold espresso shot.",
    "Img": "https://picsum.photos/seed/chillespresso/400/400"
  },
  {
    "Id": "377",
    "name": "Honey Spice Cappuccino",
    "desc": "Cappuccino infused with gentle honey spice.",
    "Img": "https://picsum.photos/seed/honeyspicecap/400/400"
  },
  {
    "Id": "378",
    "name": "Dark Roast Iced Brew",
    "desc": "Iced version of deep, bold dark roast.",
    "Img": "https://picsum.photos/seed/darkroastice/400/400"
  },
  {
    "Id": "379",
    "name": "Creamy Vanilla Dash",
    "desc": "Soft vanilla mixed with warm creamy coffee.",
    "Img": "https://picsum.photos/seed/vanilladash/400/400"
  },
  {
    "Id": "380",
    "name": "Chocolate Melt Latte",
    "desc": "A latte where rich chocolate melts into espresso.",
    "Img": "https://picsum.photos/seed/chocolatemelt/400/400"
  },
  {
    "Id": "381",
    "name": "Frosty Hazelnut Cup",
    "desc": "Chilly hazelnut latte that refreshes instantly.",
    "Img": "https://picsum.photos/seed/frostyhazelnut/400/400"
  },
  {
    "Id": "382",
    "name": "Maple Ice Latte",
    "desc": "Refreshing iced latte with smooth maple drizzle.",
    "Img": "https://picsum.photos/seed/mapleice/400/400"
  },
  {
    "Id": "383",
    "name": "Cocoa Nut Crisp",
    "desc": "Crispy nutty tones mixed with rich cocoa brew.",
    "Img": "https://picsum.photos/seed/cocoanutcrisp/400/400"
  },
  {
    "Id": "384",
    "name": "Cinnamon Ice Latte",
    "desc": "Iced latte topped with a dust of cinnamon.",
    "Img": "https://picsum.photos/seed/cinnamonice/400/400"
  },
  {
    "Id": "385",
    "name": "Mocha Ice Crystal",
    "desc": "Cold mocha with ice-crystal texture.",
    "Img": "https://picsum.photos/seed/mochaicecrystal/400/400"
  },
  {
    "Id": "386",
    "name": "Creamy Almond Shot",
    "desc": "Espresso blended with smooth almond cream.",
    "Img": "https://picsum.photos/seed/almondshot/400/400"
  },
  {
    "Id": "387",
    "name": "Vanilla Drift Brew",
    "desc": "Soft drifting vanilla aroma in warm coffee.",
    "Img": "https://picsum.photos/seed/vanilladrift/400/400"
  },
  {
    "Id": "388",
    "name": "Caramel Milk Storm",
    "desc": "Milk-rich caramel coffee with a bold twist.",
    "Img": "https://picsum.photos/seed/caramelstorm/400/400"
  },
  {
    "Id": "389",
    "name": "Hazelnut Mocha Ice",
    "desc": "Cold mocha enriched with roasted hazelnut.",
    "Img": "https://picsum.photos/seed/hazelnutmochaice/400/400"
  },
  {
    "Id": "390",
    "name": "Honey Brew Chill",
    "desc": "Chilled honey-sweetened smooth brew.",
    "Img": "https://picsum.photos/seed/honeybrewchill/400/400"
  },
  {
    "Id": "391",
    "name": "Frost Latte Classic",
    "desc": "Classic latte served in a frosty chilled style.",
    "Img": "https://picsum.photos/seed/frostlatteclassic/400/400"
  },
  {
    "Id": "392",
    "name": "Double Cocoa Shot",
    "desc": "Two-layer punch of espresso and cocoa.",
    "Img": "https://picsum.photos/seed/doublecocoa/400/400"
  },
  {
    "Id": "393",
    "name": "Almond Caramel Chill",
    "desc": "Iced almond latte fused with caramel sweetness.",
    "Img": "https://picsum.photos/seed/almondcaramelchill/400/400"
  },
  {
    "Id": "394",
    "name": "Mint Breeze Coffee",
    "desc": "Light coffee lifted with subtle mint breeze.",
    "Img": "https://picsum.photos/seed/mintbreeze/400/400"
  },
  {
    "Id": "395",
    "name": "Chocolate Drip Latte",
    "desc": "Latte drizzled generously with melted chocolate.",
    "Img": "https://picsum.photos/seed/chocodrip/400/400"
  },
  {
    "Id": "396",
    "name": "Golden Cinnamon Brew",
    "desc": "Warm cinnamon and mild roast blended smoothly.",
    "Img": "https://picsum.photos/seed/goldencinnamon/400/400"
  },
  {
    "Id": "397",
    "name": "Vanilla Bean Ice Cup",
    "desc": "Iced drink infused with natural vanilla bean.",
    "Img": "https://picsum.photos/seed/vanillabeanice/400/400"
  },
  {
    "Id": "398",
    "name": "Caramel Mocha Freeze",
    "desc": "Frozen mix of mocha and caramel swirl.",
    "Img": "https://picsum.photos/seed/caramelmochafreeze/400/400"
  },
  {
    "Id": "399",
    "name": "Hazelnut Frost Blend",
    "desc": "Smooth frosty hazelnut cold brew blend.",
    "Img": "https://picsum.photos/seed/hazelnutfrostblend/400/400"
  },
  {
    "Id": "400",
    "name": "Honey Ice Latte",
    "desc": "Chilled latte lightly sweetened with honey.",
    "Img": "https://picsum.photos/seed/honeyicelatte/400/400"
  }
]
function displaydata(cardsdata)
{
  container.innerHTML= "";
  for (let i of cardsdata) 
    {
      
    container.innerHTML += `
    <div class="card">
           <img src="${i.Img}" alt="${i.name}">
            <div class="cardinfo">
                 <h2>${i.name}</h2>
                 <p>${i.desc}</p>
                 <button>Order</button>
              </div>
      </div>
    `;
    }
}
displaydata(data);
inpt.oninput = function(){
  let a = data.filter((e)=> e.name.startsWith(inpt.value));
  displaydata(a);
}

toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
});



searchbtn.addEventListener("click", () =>{
    sidebar.classList.remove("close");
});

modeswtich.addEventListener("click", () =>{
    if(body.classList.contains("dark")){
        modetext.innerText = "Light Mode";
    }
    else{
        modetext.innerText = "Dark Mode";
    }
    body.classList.toggle("dark");
});

