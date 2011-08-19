(function(win, doc, undef) {
    
    win.onload = function() {
      
        canvax()
        
            // Draw some random squares
            .drawSquare(5, 5, 50, 50)
            .drawSquare(120, 35, 50, 50)
            .drawSquare(35, 120, 50, 50)
            .drawSquare(450, 250, 50, 50)
            .drawSquare(580, 410, 50, 50)
            .drawSquare(290, 290, 50, 50)
            
            // Draw a statisticly-esk line
            .drawLine(0, 50, [
                [20, 30],
                [50, 240],
                [80, 180],
                [150, 180],
                [190, 440],
                [280, 10],
                [390, 50],
                [480, 100],
                [640, 350]
            ], '#f00', 3);
    };
    
})(window, window.document);