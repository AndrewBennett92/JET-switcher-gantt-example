define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojgantt'],
    function (oj, ko, $) {
        var ganttViewModel = function (param) {
        self = this;
        self.customerId = param["customerId"];

        var self = this;
        self.data = Promise.resolve($.getJSON("/dummy-data/gantt-data.json"));
        self.projectStartDate = new Date("Jan 1, 2016").toISOString();
        self.projectEndDate = new Date("Dec 31, 2016").toISOString();

    }
    return ganttViewModel
});