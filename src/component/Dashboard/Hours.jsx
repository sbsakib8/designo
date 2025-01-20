
import ReactECharts from 'echarts-for-react';
function Hours() {
  const  option = {
        xAxis: {
          type: 'category',
          data: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [
              120,
              {
                value: 200,
                itemStyle: {
                  color: '#FF4B00'
                  
                }
              },
              150,
              80,
              70,
              110,
              130
            ],
            type: 'bar'
          }
        ]
      };
  return (
    <div>
        <ReactECharts option={option} />
    </div>
  )
}

export default Hours