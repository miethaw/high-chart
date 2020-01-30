import React, { Component } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


class LineChart extends Component {
    constructor(props){
        super(props);

        this.state = {
            chartOptions: {
                chart: {
                    backgroundColor: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, '#bdc3c7'],
                            [1, '#2c3e50']
                        ]
                    },
                    spacingBottom: 15,
                    spacingTop: 20,
                    spacingLeft: 10,
                    spacingRight: 25,
                    // width: 400,
                    // height: null,
                   
                },
                
                title: {
                    text: "Line Chart",
                    style: {
                        color: '#fff',
                        font: ' 16px "Trebuchet MS", Verdana, sans-serif'
                    }
                },
                xAxis: {
                    categories:['A','B','C','D','E'],
                },
                series: [
                    { data:[1,2,3,4,5]}
                ],
                plotOptions: {
                    series:{
                        point:{
                            events:{
                                mouseOver: this.setHoverData.bind(this)
                            }
                        }
                    }
                }
            },
            hoverData: null
        };
    }

    setHoverData = (e) => {
        this.setState({hoverData: e.target.category})
    }

    updateSeries = () => {
        this.setState({
            chartOptions: {
                series: [
                    {data: [Math.random()*5,2,1,3,9,4]}
                ]
            }
        });
    }

    render() {
        const { chartOptions, hoverData } = this.state;

        return(
            <div style={{fontSize:'15px', fontFamily:'Trebuchet MS, Verdana, sans-serif'}}>
                <HighchartsReact highcharts={Highcharts} options={chartOptions} />
                <span>Hovering over {hoverData}</span><br />
                <button onClick={this.updateSeries.bind(this)} style={{marginBottom:'20px', marginTop:'10px', alignSelf:'center' }}>Update Series</button>
            </div>
        )
    }
}

export default LineChart