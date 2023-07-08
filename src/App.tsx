import './App.css'
import Provider from './@globalState/checkoutContext'
import CartPage from './pages/checkout/yourCart/cartPage'

function App() {
  
  return (
    <>
    <Provider>
    {/* <CartTable/>
    <OrderSummary/> */}
    <h1>SUCCESS</h1>
    <CartPage />
    </Provider>
    </>
  )
}

export default App
