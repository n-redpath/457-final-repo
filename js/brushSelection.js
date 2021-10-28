function BrushSelection() {
    var self = this;
    self.init();
};

/**
 * Initializes the svg elements required for this chart;
 */
BrushSelection.prototype.init = function () {
    var self = this;
    self.divBrushSelection = d3.select("#brush-selection").classed("sideBar", true);
};
