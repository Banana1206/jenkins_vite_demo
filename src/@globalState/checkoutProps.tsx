export interface Cart{
    userId: number,
    quantity: number,
    variantId: number,
    variant:{
        variantId: number,
        variantName: string,
        productId:number,
        imageId: string,
        price: number,
        discount: number
    }
}

// type yourCartState = {
//     cart: Cart[],
//     saveCart: (cart: Cart) => void,
//     updateCart: (varian_id:string)=>void,
//     delCart: (varian_id:string)=>void,
// }
export type yourCartState = {
    cart: Cart,
    listCart: Cart[],
}
// initState:
const cartData: Cart[] = [
    {
      userId: 1,
      quantity: 2,
      variantId: 1,
      variant: {
        variantId: 1,
        variantName: "Red Rose",
        productId: 1,
        imageId: 'https://th.bing.com/th/id/OIP.MpDvFLjjb5IeHpiutilSxAHaHa?pid=ImgDet&rs=1',
        price: 10,
        discount: 0,
      },
    },
    {
      userId: 1,
      quantity: 1,
      variantId: 2,
      variant: {
        variantId: 2,
        variantName: "White Lily",
        productId: 2,
        imageId: 'https://th.bing.com/th/id/OIP.cgp_4RBV7s7WE2H9uP3zcAAAAA?pid=ImgDet&w=199&h=248&c=7&dpr=1.3',
        price: 15,
        discount: 0,
      },
    },
    {
      userId: 2,
      quantity: 3,
      variantId: 3,
      variant: {
        variantId: 3,
        variantName: "Pink Carnation",
        productId: 3,
        imageId: 'https://th.bing.com/th/id/OIP.KFLg8ZlAxIubTDcLN5O_ggHaHa?pid=ImgDet&w=199&h=199&c=7&dpr=1.3',
        price: 8,
        discount: 0,
      },
    },
    {
      userId: 2,
      quantity: 1,
      variantId: 4,
      variant: {
        variantId: 4,
        variantName: "Yellow Sunflower",
        productId: 4,
        imageId: 'https://th.bing.com/th/id/OIP.QAtVnL0YBkTBVCH2Hs9N7gHaIP?pid=ImgDet&w=199&h=221&c=7&dpr=1.3',
        price: 12,
        discount: 0,
      },
    },
    {
      userId: 3,
      quantity: 2,
      variantId: 5,
      variant: {
        variantId: 5,
        variantName: "Purple Orchid",
        productId: 5,
        imageId: 'https://th.bing.com/th/id/OIP.oGWhC-9eQCWoiIylPQCFBgAAAA?pid=ImgDet&w=199&h=223&c=7&dpr=1.3',
        price: 20,
        discount: 0,
      },
    },
  ];
export const initState = {
    cart: {
        userId: 0,
        quantity: 0,
        variantId: 0,
        variant: {
          variantId: 0,
          variantName: "",
          productId: 0,
          imageId: 'https://th.bing.com/th/id/OIP.oGWhC-9eQCWoiIylPQCFBgAAAA?pid=ImgDet&w=199&h=223&c=7&dpr=1.3',
          price: 0,
          discount: 0,
        },
      },
      listCart: cartData,
}
// action


