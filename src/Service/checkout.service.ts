import { api } from "./api";

interface CheckoutRequestProps {
    id: number;
    amount: number;
}

export const checkout = async (id:number|string) : Promise<string> => {
    const { data } = await api.put(`/orders/${id}/payment`);
    return data.payment_url;
}

export const order = async (value:CheckoutRequestProps[]): Promise<number> => { 
    const body = {
        products: value.map((item) => ({
            product_id: item.id,
            quantity: item.amount,
        })),
    };

    const { data } = await api.post("/orders", body);
    return data.id;
}