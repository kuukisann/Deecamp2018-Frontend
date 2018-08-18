function draw_pic(drawing, x, y) {
    let can = document.getElementById('sketch-canvas');
    let ctx = can.getContext('2d');

    let dx, dy, pen_down, pen_up, pen_end;
    let prev_pen = [0, 1, 0];

    for (let i = 0; i < drawing.length; i++) {
        [dx, dy, pen_down, pen_up, pen_end] = drawing[i];
        if (prev_pen[2] === 1) {
            break;
        }
        if (prev_pen[0] === 1) {
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + dx, y + dy);
            ctx.stroke();
        }
        x += dx;
        y += dy;
        prev_pen = [pen_down, pen_up, pen_end];
    }
}

function gen_pic(rnn_model, size) {
    let z = rnn_model.random_latent_vector();

    let drawing = rnn_model.decode(z, 0.1);
    drawing = rnn_model.scale_drawing(drawing, size);
    drawing = rnn_model.center_drawing(drawing);
    // console.log(drawing);
    return drawing;
}

function get_model(model_name) {
    let request = new XMLHttpRequest();
    request.open("GET", `./models/${model_name}.vae.json`, false);
    request.send(null);
    let model_json = JSON.parse(request.responseText);
    return new SketchRNN(model_json);
}