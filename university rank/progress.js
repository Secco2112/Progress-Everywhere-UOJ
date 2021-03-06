// ==UserScript==
// @name         Progress Everywhere - University Rank
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  The users progress on university rank.
// @author       Gustavo Marmentini
// @include      *://www.urionlinejudge.com.br/judge/*/users/university/*
// @grant        none
// ==/UserScript==

var totalCont = $('tbody tr td.medium').length;
var totalProblems = 1494;
var arrayPor = [];

var url = window.location.href;
url = url.split('/');
var langUrl = url[4];
var progressText = {};

progressText["pt"] = 'Progresso';
progressText["en"] = 'Progress';
progressText["es"] = 'Progreso';

$('thead tr').append('<th class="small">' + progressText[langUrl] + '</th>');

for(i=0; i<=totalCont; i++){
    var userProblems = $('tbody tr:nth-child(' + i + ') td:nth-child(4)').text();
    userProblems = userProblems.replace(/\s/g, "");
    userProblems = userProblems.replace(/\./g, "");
    userProblems = userProblems.replace(/\,/g, "");
    userProblems = parseInt(userProblems);

    var porcentagem = (userProblems*100.0)/totalProblems;
    porcentagem = porcentagem.toFixed(2);

    arrayPor.push(porcentagem);
}

for(i=0; i<=totalCont; i++){
    $('tbody tr:nth-child(' + i + ')').append('<td class="small"><span class="porc">' + arrayPor[i] + '%</span></td>');
}