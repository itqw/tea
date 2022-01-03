import React from "react";
import {Button, Card, Typography} from "@mui/material";
import "./default.css"

class App extends React.Component {
    list = ["Грейпфрут и розмарин", "С мятой", "English Breakfast", "Green Gunpowder", "С имбирём и ароматом лимона", "С шиповником и ароматом земляники", "Green Classic", "Чёрный экстра крепкий", "Yellow Label", "Солнечная лёгкость (цитрус и апельсиновые корочки)", "Открой гармонию с чабрецом", "С витамином C, шиповником и ароматом земляники", "Royal Ceylon", "Earl Grey", "Green Mandarine Orange", "Согрей теплом, с малиной и листьями шалфея", "Чистота и прохлада с мятой", "Earl Grey Tea байховый", "Cherry Morello",
    "Golden Ceylon", "kenyan Sunrise", "English Edition", "Classic Breakfast", "Earl Grey Fantasy", "Magic Yunnan", "Silver Fujian", "Premium Assam", "Flying Dragon", "Jasmine Dream", "Japanese Sencha",
    "Milky Oolong", "Rose Pineberry", "Exotic Opuntia", 'Spring Melody', 'Barberry Garden', 'Lemon Spark', 'Christmas Mystery', 'Strawberry Gourmet', 'Vanilla Cranberry', 'Chocolate Toffee',
    'Honey Linden', 'Blueberry Nights', 'Currant & Mint', 'Grand Fruit', 'Tropical Tarragon', 'Green Melissa', 'Spicy Mango', 'Quince Ginger', 'Floral Cloud', 'Mellow Peach', 'Cherry Blossom',
    'Summer Bouqet', 'Camomile Meadow', 'Rich Camomile', 'Festive Grape', 'Ginger Red', 'Wildberry Rooibos', 'Spirit Mate', 'Tverskaya Smooth (Limited)', 'Broadway Soul (Limited)', 'Soho Stride (Limited)',
    'Montmartre Fusion (Limited)', 'The 5th Element (Limited)', 'Tea Advent Calendar "Magic Days" (Limited)', 'Black Wonder', 'Fusion Way', 'Tropical Sunset']

    select = () => {
        this.setState({name: this.list[Math.floor(Math.random() * this.list.length)]})
    }

    constructor(props) {
        super(props);
        this.state = {
            name: "..."
        }
    }

    componentDidMount() {
        this.select();
    }

    render() {
        return (<div className={"center"}>
            <Card className={"centerCard"}>
                <div className={"centerContent"}>
                    <Typography style={{marginTop: "10px"}}>Думаю, что чай «<div style={{fontWeight: "bold", display: "inline"}}>{this.state.name}</div>» — отличный выбор!</Typography>
                    <Button onClick={this.select} style={{marginBottom: "15px"}} variant={"contained"}>не</Button>
                </div>
            </Card>

        </div>);
    }
}

export default App;