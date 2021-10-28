function PopupBar() {
    var self = this;
    self.init();
};

/**
 * Initializes the svg elements required for this chart
 */
PopupBar.prototype.init = function(){

    var self = this;
    self.margin = {top: 10, right: 20, bottom: 30, left: 50};
    var divPopupBar = d3.select("#popupBar").classed("fullView", true);

    //Gets access to the div element created for this chart from HTML
    self.svgBounds = divPopupBar.node().getBoundingClientRect();
    self.svgWidth = self.svgBounds.width - self.margin.left - self.margin.right;
    self.svgHeight = 100;

    //creates svg element within the div
    self.svg = divPopupBar.append("svg")
        .attr("width",self.svgWidth)
        .attr("height",self.svgHeight)

};