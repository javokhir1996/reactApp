import Orders from "../../components/orders";
import Products from "../../components/Products";


function Home(){
      return(
        <div className="home_page">
            <div className="home_page_content">
                <div className="header">
                    <div className="header_title">
                        <h1>Jaegar Resto</h1>
                        <h4>Tuesday, 2 Feb 2021</h4>
                    </div>
                    <div className="input_search_block">
                        <img src="/assets/img/search.svg" alt="" />
                        <input type="search" placeholder="Search for food, coffe, etc.." className="input_search" />
                    </div>
                </div>
                <ul className="cats_list">
                    <li>dishes</li>
                    <li>dishes</li>
                    <li>dishes</li>
                </ul>
                <h6 className="choose_block" >
                    Choose Dishes
                    <select>
                        <option defaultValue value="Dine In">Dine In</option>
                        <option value="To Go">To Go</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                </h6>
                <Products/>
            </div>
            <Orders/>
        </div>
        
      )
}


export default Home;