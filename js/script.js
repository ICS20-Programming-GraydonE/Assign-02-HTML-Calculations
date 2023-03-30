// Copyright (c) 2022 Graydon Ezzeddin All rights reserved
//
// Created by: Graydon Ezzeddin
// Created on: March 2022
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates the slope of a line
 */
function calculate () {
  // input
  let rise = parseFloat(document.getElementById('rise-of-line').value);
  let run = parseFloat(document.getElementById('run-of-line').value);
  // process
  let slope = rise/run;
  // output
  document.getElementById('slope').innerHTML = 'Slope is: ' + slope.toFixed(2);
}
