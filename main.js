class Cat{
        constructor (name, picture, clicks = 0){
            this.name = name;
            this.picture = picture;
            this.clicks = clicks
        }
    };

var model={
    cats:[
        new Cat("Biggie", "images/big cat.jpg"),
        new Cat("Smalls", "images/big cat2.jpg"),
        new Cat("Nipsey", "images/2cats.jpg"),
        new Cat("Hussle", "images/lcat.jpg"),
        new Cat("Pac", "images/blackCat.jpg")
    ]
}


var octopus = {
    getCats: function(){
        return model.cats;
    }
}


var view = {
    init: function(){
        // select left column in dom
        const leftColumn = document.querySelector(".col-4");

        // construct list
        const ul = document.createElement("ul");
        ul.className = "list-group text-center"
        for(let cat of octopus.getCats()){
            const li = document.createElement("li");
            li.className = "list-group-item"
            li.textContent = cat.name;
            li.addEventListener("click", ()=>{
                this.render(cat);
            })


            ul.appendChild(li);
        }

        leftColumn.appendChild(ul);
    },

    render: function(cat){
        const rightColumn= document.querySelector(".col-8");
            // clear the display area
        rightColumn.innerHTML = "";

        const h1 = document.createElement("h1");
            h1.textContent = cat.name;
        rightColumn.appendChild(h1);

        const img = document.createElement("img");
            img.setAttribute("src", cat.picture);
            img.setAttribute("alt", "Big Cat");
            img.addEventListener("click", ()=>{
                cat.clicks++;
            h2.textContent = `Clicks: ${cat.clicks}`;
            })
        rightColumn.appendChild(img);

        const h2 = document.createElement("h2");
            h2.textContent = `Clicks: ${cat.clicks}`;
        rightColumn.appendChild(h2);
        }
        }

    view.init();