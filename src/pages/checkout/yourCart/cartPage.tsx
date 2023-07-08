import { Flex } from "@mantine/core";
import BreadcrumbsComponent from "./components/breadcrumbsComponent";
import CartTable from "./components/CartTable";
import OrderSummary from "./components/orderSummary";
import FormPromotion from "./components/formPromotion";

const CartPage: React.FC = () =>{


    return(
        <div style={{display:"flex", justifyContent: "center", alignItems: "center" }}>

        <Flex
        gap="xl"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        w={900}
        >

            <BreadcrumbsComponent />
        <Flex gap="xl">
            <CartTable/>
            <OrderSummary/>
        </Flex>
            <FormPromotion/>
        {/* <Button variant="outline" style={{ alignSelf: "flex-start" }}  onClick={() => onStepChange(activeStep + 1)}>Back</Button> */}
        </Flex>

    </div>

    );
}
export default CartPage;