/*
 * Root file that handles instances of all the charts and loads the visualization
 */
(function(){
    var instance = null;

    /**
     * Creates instances for every chart (classes created to handle each chart;
     * the classes are defined in the respective javascript files.
     */
    function init() {
        //Creating instances for each visualization
        var popupBar = new PopupBar();

        var yearChart = new YearChart();

        var brushSelection = new BrushSelection();

        var map = new MapVis();


        //load the data corresponding to all the disasters
        //pass this data and instances of all the charts that update on year selection to yearChart's constructor
        //JSON file
        // d3.csv("data/yearwise-winner.csv")
        //     .then(function(electionWinners) {
        //         //pass the instances of all the charts that update on selection change in YearChart
        //         var yearChart = new YearChart(electoralVoteChart, tileChart, votePercentageChart, electionWinners);
        //         yearChart.update();
        //     });

        //when extracting the data, call it 'disasters'
        let disasters = [];

        $.getJSON('https://www.fema.gov/api/open/v2/DisasterDeclarationsSummaries', function (json) {
            if (json.hasOwnProperty("DisasterDeclarationsSummaries")) {
                disasters = json["DisasterDeclarationsSummaries"];      
            }
        console.log(disasters);
        });


        
    }

    /**
     *
     * @constructor
     */
    function Main(){
        if(instance  !== null){
            throw new Error("Cannot instantiate more than one Class");
        }
    }

    /**
     *
     * @returns {Main singleton class |*}
     */
    Main.getInstance = function(){
        var self = this
        if(self.instance == null){
            self.instance = new Main();

            //called only once when the class is initialized
            init();
        }
        return instance;
    }

    Main.getInstance();
})();