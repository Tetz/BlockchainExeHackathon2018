import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import qptImage from '../img/image.json';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class LgBarChart extends Component {
  render(){
    const data4 = [
        {"time": "08:00", "row": 1},
        {"time": "09:00", "row": 2},
        {"time": "10:00", "row": 5},
        {"time": "11:00", "row": 6}, 
        {"time": "12:00", "row": 7}, 
        {"time": "13:00", "row": 8}, 
        {"time": "14:00", "row": 6}, 
        {"time": "15:00", "row": 5}, 
        {"time": "16:00", "row": 1}, 
        {"time": "17:00", "row": 1}, 
        {"time": "18:00", "row": 5}, 
        {"time": "19:00", "row": 6}, 
        {"time": "20:00", "row": 7}, 
        {"time": "21:00", "row": 6}, 
        {"time": "22:00", "row": 5}, 
        {"time": "23:00", "row": 4}
    ]

    return ( 
      <div>
        <BarChart width={320} height={200} data={data4}
              margin={{top: 5, right: 30, left: 10, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="row" fill="#82ca9d" />
        </BarChart>
      </div>
    )
  }
}

const data = [
			{name:'17:00',row: 4}, //時刻と列長を格納
      {name:'18:00',row: 5},
      {name:'19:00',row: 6},
      {name:'20:00',row: 7},
      {name:'21:00',row: 6},
      {name:'22:00',row: 5},
      {name:'23:00',row: 4}
      ];

  const data1 = [
			{name:'17:00',row: 1}, //時刻と列長を格納
      {name:'18:00',row: 2},
      {name:'19:00',row: 2},
      {name:'20:00',row: 3},
      {name:'21:00',row: 2},
      {name:'22:00',row: 2},
      {name:'23:00',row: 1}
  ];

  const data2 = [
			{name:'17:00',row: 8}, //時刻と列長を格納
      {name:'18:00',row: 6},
      {name:'19:00',row: 6},
      {name:'20:00',row: 6},
      {name:'21:00',row: 4},
      {name:'22:00',row: 2},
      {name:'23:00',row: 1}
  ];

  const data3 = [
			{name:'17:00',row: 4}, //時刻と列長を格納
      {name:'18:00',row: 5},
      {name:'19:00',row: 8},
      {name:'20:00',row: 7},
      {name:'21:00',row: 4},
      {name:'22:00',row: 2},
      {name:'23:00',row: 0}
  ];  

  const data4 = [
			{name:'17:00',row: 5}, //時刻と列長を格納
      {name:'18:00',row: 6},
      {name:'19:00',row: 9},
      {name:'20:00',row: 8},
      {name:'21:00',row: 5},
      {name:'22:00',row: 3},
      {name:'23:00',row: 1}
  ]; 

class SimpleBarChart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { rowData } = this.props
    return ( 
      <div>
        <BarChart width={320} height={200} data={rowData}
              margin={{top: 5, right: 30, left: 10, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="row" fill="#82ca9d" />
        </BarChart>
      </div>
    )
  }
}

const cardSize = {
  width: '21vw',
  margin: '24px'
}

const QPTcard = (props) => (
      <Card style={ cardSize }>
        <CardMedia>
          <img src={ props.imageUrl } alt={ props.name } style={{ height: '200px' }} />
        </CardMedia>
        <CardHeader
          title={ props.tokenName }
          subtitle={ props.shopName }
          avatar={ props.imageUrl }
        />
        {props.component}
        <CardActions style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FlatButton label="BUY QPT" primary={true} style={{ margin: '0 26px' }} onClick={props.dialog} />
          <FlatButton label="DETAILE" primary={true} style={{ margin: '0 26px' }}/>
        </CardActions>
      </Card>
)

const cardsWrap = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alineItems: 'center',
  padding: '36px'
}

const QPTcards = (props) => (
   <div style={cardsWrap} >
    <QPTcard 
      imageUrl={ qptImage.sushi[0].url }
      name={ qptImage.sushi[0].name }
      tokenName="sushiQPT-1"
      shopName="Yajima"
      description="とても美味しいお寿司です。"
      component={<SimpleBarChart rowData={data} />}
      dialog={props.dialog}
      />
    <QPTcard 
      imageUrl={ qptImage.skytree[0].url }
      name={ qptImage.skytree[0].name }
      tokenName="skytreeQPT-2"
      shopName="SkyTree"
      description="とても高いです。"
      component={<SimpleBarChart rowData={data1} />}
      dialog={props.dialog}
    />
    <QPTcard 
      imageUrl={ qptImage.noodle[0].url }
      name={ qptImage.noodle[0].name }
      tokenName="noodleQPT-3"
      shopName="Ippudo"
      description="とてもアツいです。"
      component={<SimpleBarChart rowData={data2} />}
      dialog={props.dialog}
    />
    <QPTcard 
      imageUrl={ qptImage.tempura[0].url }
      name={ qptImage.tempura[0].name }
      tokenName="tempuraQPT-4"
      shopName="Tempura-tensei"
      description="とても高級です。"
      component={<SimpleBarChart rowData={data3} />}
      dialog={props.dialog}
    />
    <QPTcard 
      imageUrl={ qptImage.kabuki[0].url }
      name={ qptImage.kabuki[0].name }
      tokenName="kabukiQPT-5"
      shopName="Kabuki"
      description="とても歌舞伎です。"
      component={<LgBarChart />}
      dialog={props.dialog}
    />
    <QPTcard 
      imageUrl={ qptImage.maid[0].url }
      name={ qptImage.maid[0].name }
      tokenName="maidQPT-6"
      shopName="Maid-Cafe"
      description="とてもかわいいです。"
      component={<SimpleBarChart rowData={data4} />}
      dialog={props.dialog}
    />
   </div>
);

export default QPTcards