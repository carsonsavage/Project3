const fs = require('fs');
const short = require('short-uuid');
const translator = short();


function readWriteFile(product) {
    fs.readFile("./products.json", "utf8", (error, fileData) => {
        if (error) throw error;
        let data = JSON.parse(fileData);
        data.push(product);

        fs.writeFile("./products.json", JSON.stringify(data, null, 2), (err) => {
            if (err) throw err;
            console.log("Successfully Wrote File");
        })

    });
};

let product = {
    "uid": translator.new(),
    "title": "Little Blue Truck's Valentine Hardcover – Picture Book, December 8, 2020",
    "price": 9.29,
    "quantity": 35,
    "category": "Books",
    "keywords": [
        "valentine book",
        "reading",
        "kids book"
    ],
    "features": [
        "story about little blue truck",
        "kids valentine book"
    ],
    "description": "Spread the love with Little Blue Truck—a perfect Valentine's Day read-aloud in this best-selling series! Beep! said Blue. Happy Valentine's Day!,Join Little Blue Truck as he delivers Valentine's Day cards to all his farm animal friends. But as Blue beeps along, he starts to wonder: will he get any cards of his own? With brightly colored foil accents throughout and a large gatefold at the end, this book is the perfect Valentine's Day gift.",
    "image": "https://images-na.ssl-images-amazon.com/images/I/511fkcXCwBL._SX258_BO1,204,203,200_.jpg"
}

readWriteFile(product);
