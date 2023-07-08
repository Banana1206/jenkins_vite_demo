import './App.css'
import Provider from './@globalState/checkoutContext'
import CartPage from './pages/checkout/yourCart/cartPage'

function App() {
  
  return (
    <>
    <Provider>
    {/* <CartTable/>
    <OrderSummary/> */}
    <CartPage />
    </Provider>
    </>
  )
}

export default App
