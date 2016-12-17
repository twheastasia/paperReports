'use strict';

const qs = require('qs');
const mockjs = require('mockjs');
var fs = require('fs');
var file = "./mock/data.json";

var result = JSON.parse(fs.readFileSync( file));

var mock_data = {
      data: result, 
      page: {
        total: 100,
        current: 1
      }
    };


module.exports = {

  'GET /api/exams': function (req, res) {
    const page = qs.parse(req.query);
    const pageSize = page.pageSize || 10;
    const currentPage = page.page || 1;

    let data;
    let newPage;

    // let newData = mock_data.data.concat();
    let newData = mock_data.data;

    if (page.field) {
      const d = newData.filter(function (item) {
        return item[page.field].indexOf(page.keyword) > -1;
      });

      data = d.slice((currentPage - 1) * pageSize, currentPage * pageSize);

      newPage = {
        current: currentPage * 1,
        total: d.length
      };
    } else {
      data = mock_data.data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
      mock_data.page.current = currentPage * 1;
      newPage = {
        current: mock_data.page.current,
        total: mock_data.page.total
      };
    }


    setTimeout(function () {
      res.json({
        success: true,
        data,
        page: newPage
      });
    }, 500);
  },

  'GET /api/exams_details': function (req, res){
    console.log(req);
    let data;

    setTimeout(function () {
      res.json({
        success: true,
        data,
        page: newPage
      });
    }, 500);
  }


};
