import React from "react";
import { Header } from "./coponents/header";
import { Footer } from "./coponents/footer";
import { Items } from "./coponents/items";
import { Categories } from "./coponents/categories";
import { ShowFullItem } from "./coponents/showFullItem";


class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      currentItems:[],
      items: [
        {
          id: 1,
          title: 'Определение ТЧС',
          img: 'atmos.jpg',
          desc: 'Отбор проб и определение концентрации твердых частиц суммарно (пыль, взвешенные вещества), ДИ: (15 - 20000) мг/м3',
          category: 'prom',
          price:'30'
        },
        {
          id: 2,
          title: 'Определение азота диоксид',
          img: 'atmos.jpg',
          desc: 'Определение концентрации азот (IV) оксид (азота диоксид), ДИ: (0 - 1000) мг/м3',
          category: 'prom',
          price:'20'
        },
        {
          id: 3,
          title: 'Определение углерода оксида',
          img: 'atmos.jpg',
          desc: 'Определение концентрации углерода оксида (окись углерода, угарный газ), ДИ: (0 - 50000) мг/м3',
          category: 'prom',
          price:'25'
        },
        {
          id: 4,
          title: 'Определение серы диоксида',
          img: 'atmos.jpg',
          desc: 'Определение концентрации серы диоксида (ангидрид сернистый, сера (IV) оксид, сернистый газ)б ДИ: (0 - 15000) мг/м3',
          category: 'prom',
          price:'60'
        },
        {
          id: 5,
          title: 'Определение сероводорода',
          img: 'atmos.jpg',
          desc: 'Концентрация сероводорода, ДИ: (3 - 100) мкг/м3',
          category: 'atmos',
          price:'70'
        },
        {
          id: 6,
          title: 'Определение аммиака',
          img: 'atmos.jpg',
          desc: 'Концентрация аммиака, ДИ: (10-2500) мкг/м3',
          category: 'atmos',
          price:'50'
        },
        {
          id: 7,
          title: 'азота (IV) оксида',
          img: 'atmos.jpg',
          desc: 'Концентрация азота (IV) оксида (азота диоксид), ДИ: (0-10 000) мкг/м3',
          category: 'atmos',
          price:'80'
        },
        {
          id: 8,
          title: 'Определение ацетальдегида',
          img: 'atmos.jpg',
          desc: 'Определение концентрации ацетальдегида, ДИ: (1,0 - 2000) мг/м3',
          category: 'rabzone',
          price:'100'
        },
        {
          id: 9,
          title: 'Определение марганца',
          img: 'atmos.jpg',
          desc: 'Отбор проб и определение концентрации марганца, ДИ: (0,02 - 4,00) мг/м3',
          category: 'rabzone',
          price:'70'
        }
        

      ],
      showFullItem: false,
      fullItem:{}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)

  }

  render () { 
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete = {this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem = {this.onShowItem} items = {this.state.currentItems} onAdd={this.addToOrder}/>

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem = {this.onShowItem} item={this.state.fullItem} />}
        <Footer/>
      </div>
    )
  }

  onShowItem (item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory (category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder (item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      this.setState({orders: [...this.state.orders, item]});
    }
  }
};

export default App;
