import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { message, Icon, BackTop, Spin } from 'antd';

// Highcharts
// const ReactHighcharts = require('react-highcharts');
// // Highcharts more
// var HighchartsMore = require('highcharts-more');
// HighchartsMore(ReactHighcharts.Highcharts);
// var HighchartsExporting = require('highcharts-exporting');
// HighchartsExporting(ReactHighcharts.Highcharts);
// var Highlight = require('react-highlight');
// var HighchartsSolidGauge = require('highcharts-solid-gauge');
// HighchartsSolidGauge(ReactHighcharts.Highcharts);

// import qrcode
var QRCode = require('qrcode.react');

// import highcharts circle view
// var singleExamData = require('../../utils/single_exam_chart_data.js');
// var overviewExamData = require('../../utils/overview_exam_chart_data.js');


// 加载单个星星
const Star = ({}) => <img src="../src/assets/star.png" width="50px" height="50px"/> ;

// 显示若干个星星，可能有半个星星
const ShowStars = ({count}) => {
    // 拼接多个星星
    const rows = [];
    for (var i = 0; i < parseFloat(count); i++) {
      rows.push(<Star key={i} />);
    }
    return(
      <div>
        {rows}
      </div>
    );
}

const TechRow = ({jineng, stars}) => {
  return (
    <tr>
        <td>{jineng}</td>
        <td><ShowStars count={stars}/></td>
    </tr>
    );
}

const LessonTable = ({data}) => {
    var rows = [];
    data.skills.forEach(function(cell){
      rows.push(<TechRow key={cell.name} jineng={cell.name} stars={cell.judgement}/>);
    });
    return (
      <table>
        <thead>
          <tr>
            <th>技能</th>
            <th>评分</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
}

const LessonOverViewTable = ({exam_data}) => {
    return(
      <table>
        <thead>
          <tr>
            <th>{exam_data.category+" "+exam_data.exam_name}</th>
            <th>建议意见</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><LessonTable data={exam_data}/></td>
            <td>{exam_data.comment}</td>
          </tr>
        </tbody>
      </table>
    );
}


const AllExamsContent = ({exams_data}) => {
    var rows = [];
    exams_data.forEach(function(exam_data){
      rows.push(<LessonOverViewTable key={exam_data.exam} exam_data={exam_data} />);
    });
    return(
      <div>
        {rows}
      </div>
    );
}


const ExamDetailView = ({details}) => {
    // 单个试卷的信息
    var exam_data = details;
    console.log("exam detail view: " + exam_data);
    var exam_rank_info = "你真棒!排名就不告诉你了。";
    var qrcode_url = "http://www.alo7.com";
    var qrcode_tip = "扫描上面的二维码，分享到手机上。";
    // var config1 = singleExamData.get_single_exam_chart_view_data(exams_data.exam_name, exams_data.scores);


    return (
        <div>
            <div id="title" style={{textAlign:"center",fontSize:"40px"}}>{details.exam_name}</div>
            <div id="single_exam_chart_view" >
                <div id="single_exam_container1" style={{minWidth: "400px", maxWidth: "600px", height: "400px", margin: "auto"}}>
                   
                </div>
                <div id="single_exam_rank" style={{textAlign:"center",fontSize:"30px"}}>{exam_rank_info}</div>
            </div>
            <br/><br/><br/>
            <div id="lesson_details" style={{minWidth: "600px", maxWidth: "800px",margin: "auto"}}>
                <LessonOverViewTable key={exam_data.id} exam_data={exam_data} />
            </div>
            <br/><br/><br/>
            <div>
                <div id="qrcode" style={{width:"128px", height:"128px",margin: "auto"}}>
                    <QRCode value={qrcode_url} />
                </div>
                <br/>
                <div id="qrcode_tip" style={{textAlign:"center",fontSize:"18px"}}>
                    <p>{qrcode_tip}</p>
                </div>
            </div>

            <BackTop />
        </div>

    );
};

ExamDetailView.propTypes = {
    details: PropTypes.object,
    location: PropTypes.object,
    dispatch: PropTypes.func,
};

export default ExamDetailView;
