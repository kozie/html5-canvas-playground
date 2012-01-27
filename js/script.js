(function(win, doc, undef) {
    
    var locations = new Array(),
        cw = canvax().getWidth(),
        ch = canvax().getHeight();
    
    win.onload = function() {
        
        // Create a loop to make a motion
        var i, x, y,
            angle = 0,
            inc = Math.PI / 100,
            w = cw / 100,
            h = ch / 100;
        
        for (i = 0; i <= 100; i++) {
            x = i * w;
            y = ch - ((Math.sin(angle) * 99) * h);
            
            locations.push([x, y]);
            angle += inc;
        }
        
        canvax().drawLines(0, ch, locations, undef, 3);
      
        /*canvax()
            // Draw some random squares
            .drawSquare(5, 5, 50, 50)
            .drawSquare(120, 35, 50, 50)
            .drawSquare(35, 120, 50, 50)
            .drawSquare(450, 250, 50, 50)
            .drawSquare(580, 410, 50, 50)
            .drawSquare(290, 290, 50, 50);*/
    };
    
})(window, window.document);