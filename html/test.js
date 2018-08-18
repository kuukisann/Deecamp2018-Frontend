// var p5 = require("./lib/p5");
const rnn = require("./lib/sketch_rnn");
const fs = require('fs');

function main(model_name) {
    console.log(__dirname);
    let model_raw_data = fs.readFileSync(__dirname + '/models/' + model_name + '.vae.json', 'utf-8');
    console.log(model_raw_data);
    let rnn_model_data = JSON.parse(model_raw_data);
    rnn_model = new rnn.get_model_data()
    console.log(rnn_model_data);

    let z = rnn_model.random_latent_vector();

    let drawing = rnn_model.decode(z, 0.3);
    drawing = rnn_model.scale_drawing(drawing, 90);
    drawing = rnn_model.center_drawing(drawing);
    console.log(drawing)
}

main("ant");
