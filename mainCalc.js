/**
 * Created by stas on 10.02.17.
 */
angular
    .module('calcApp', [])

    .controller('appController', appController);

function appController($scope) {
    $scope.DISPLAY = '';
    $scope.rez = null;
    //Цифры
    $scope.click1 = function () {

        $scope.one = '1';
           $scope.DISPLAY += $scope.one;

    };
    $scope.click2 = function () {

        $scope.two = '2';
        $scope.DISPLAY += $scope.two;

    };
    $scope.click3 = function () {

        $scope.three = '3';
        $scope.DISPLAY += $scope.three;

    };
    $scope.click4 = function () {

        $scope.four = '4';
        $scope.DISPLAY += $scope.four;

    };
    $scope.click5 = function () {

        $scope.five = '5';
        $scope.DISPLAY += $scope.five;

    };
    $scope.click6 = function () {

        $scope.six = '6';
        $scope.DISPLAY += $scope.six;

    };
    $scope.click7 = function () {

        $scope.seven = '7';
        $scope.DISPLAY += $scope.seven;

    };
    $scope.click8 = function () {

        $scope.eigth = '8';
        $scope.DISPLAY += $scope.eigth;

    };
    $scope.click9 = function () {

        $scope.nine = '9';
        $scope.DISPLAY += $scope.nine;

    };
    //Знаки
    $scope.clickPlas = function () {

        $scope.plas = '+';
        $scope.DISPLAY += $scope.plas;

    };
    $scope.clickMin = function () {

        $scope.minus = '-';
        $scope.DISPLAY += $scope.minus;

    };
    $scope.clickMult = function () {

        $scope.mult = '*';
        $scope.DISPLAY += $scope.mult;

    };
    $scope.clickDiv = function () {

        $scope.div = '/';
        $scope.DISPLAY += $scope.div;

    };
    $scope.clickClear = function () {

        $scope.clear = '';
        $scope.DISPLAY = $scope.clear;

    };
    $scope.clickBracketL = function () {

        $scope.bracketL = '(';
        $scope.DISPLAY += $scope.bracketL;

    };
    $scope.clickBracketR = function () {

        $scope.bracketR = ')';
        $scope.DISPLAY += $scope.bracketR;

    };
    $scope.clickDot= function () {

        $scope.dot = '.';
        $scope.DISPLAY += $scope.dot;

    };



    $scope.clickEqv = function () {
        rezultStr = $scope.DISPLAY;
        $scope.rez =  eval(rezultStr);


    };

}