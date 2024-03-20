//https://www.codewars.com/kata/5bb0c58f484fcd170700063d



function pillarDistance(noPillars, disBetween, pillarWidth) {

    var totalDis = (noPillars - 1) * disBetween;
    var totalWidth = (noPillars - 2) * pillarWidth / 100; 
    var distanceBetweenFirstAndLast = totalDis + totalWidth;

        return distanceBetweenFirstAndLast;
}

// Example

console.log("Distance between first and last pillar:",  pillarDistance(5, 20, 20), "meters"); // corrected unit




