/**
 * Core Canvas JS file
 * @author Koos van Egmond <flamefingers at gmail dot com>
 */
 
(function(win, doc, undef) {
    
    // Define canvax
    function canvax() {
        return new canvax.fn.init();
    }
    
    // Set iniitial canvax function
    canvax.fn = canvax.protoype = {
      
        constructor: canvax,
        
        canvas: false,
        context: false,
        dimensions: [],
        
        init: function() {
            
            // Set the context
            this.canvas  = doc.getElementById('canvax');
            this.context = this.canvas.getContext('2d');
            
            // Set the current dimensions
            this.dimensions = [this.canvas.width, this.canvas.height];
          
            return this;
        }
    };
    
    // Link prototypes
    canvax.fn.init.prototype = canvax.fn;
    
    // Draw square method
    canvax.fn.drawSquare = function(x, y, w, h) {
        
        this.context.fillRect(x, y, w, h);
        return this;
    };
    
    // Draw line method
    canvax.fn.drawLine = function(x, y, locs, color, width) {
      
        // Set start
        this.context.moveTo(x, y);
        
        // Set default color and width
        if (color === undef) color = '#000';
        if (width === undef) width = 1;
        
        // Loop through the positions and draw
        var idx, entry;
        for (idx in locs) {
            
            entry = locs[idx];
            x = entry[0];
            y = entry[1];
            
            this.context.lineTo(x, y);
        }
        
        this.context.strokeStyle = color;
        this.context.lineWidth = width;
        this.context.stroke();
        
        return this;
    };
    
    // Reset method
    canvax.fn.reset = function() {
        
        // Reset by re-setting the dimensions
        this.canvas.width = this.dimensions[0];
    };
    
    // Link canvax function to global scope
    win.canvax = canvax;
    
})(window, window.document);